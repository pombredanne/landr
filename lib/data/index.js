const Promise = require('bluebird')
const redux = require('redux')
const debug = require('debug')('store')

const defaultReducers = require('./reducers')
const defaultActions = require('./actions')
const defaultMiddleware = require('./middleware')

const defaultPlugins = [
  require('./plugins/changelog'),
  require('./plugins/docs'),
  require('./plugins/faq'),
  require('./plugins/github')
]

const apiRunner = (plugins, dir, actions) => {
  return Promise.map(plugins, fn => {
    return fn({ dir, actions })
  })
}

const middlewareCreate = fn => store => next => action => {
  // wrap each action creator so they can return a promise,
  // then store each promise, so we can wait until all middleware is resolved before returning
  if (action.type !== 'ADD_PROMISE') {
    store.dispatch({
      type: 'ADD_PROMISE',
      payload: Promise.resolve(fn(store, action, next))
    })
  }
}

/**
 * @namespace
 * @property {object}  options                - The default values for parties.
 * @property {array}   options.reducers       - Array of custom redux reducers.
 * @property {array}   options.middleware     - Array of custom redux middleware in order of execution.
 * @property {array}   options.plugins        - Array of collector plugins that dispatch actions to store.
 * @property {array}   options.actions        - Object of action creators to be bound to store.dispatch
*/
/**
 * Run the collector
 * @param {string} dir
 * @param {string} options
 */
module.exports = async (dir, { reducers, middleware, actions, plugins }) => {
  // 1. init Store with options
  // 2. run plugins
  // 3. return store
  const combinedMiddleware = [
    ...defaultMiddleware,
    ...middleware
  ]

  try {
    const middlewares = redux.applyMiddleware(
      ...combinedMiddleware.map(middlewareCreate)
    )
    const store = redux.createStore(
      redux.combineReducers({
        ...defaultReducers,
        ...reducers
      }),
      {},
      middlewares
    )

    const boundActions = redux.bindActionCreators(
      {
        ...defaultActions,
        ...actions
      },
      store.dispatch
    )

    await apiRunner(defaultPlugins, dir, boundActions)
    await Promise.all(store.getState().promises)

    return store.getState()
  } catch (error) {
    throw error
  }
}
