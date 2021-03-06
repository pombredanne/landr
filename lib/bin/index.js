#!/usr/bin/env node
require("babel-polyfill")
const capitano = require('capitano')
const findUp = require('find-up')
const path = require('path')
const compact = require('lodash/compact')

const build = require('../core/build')
const serve = require('../core/serve')
const view = require('../core/view')
const deploy = require('../core/deploy')
const {
  getUserConfig,
  getThemeConfig,
  getMasterConfig
} = require('../core/utils/configs')
const getData = require('../data')
const landrReducers = require('../core/reducers')
const landrActions = require('../core/actions')
const mapValues = require('lodash/mapValues')

const CWD = process.cwd()

const errorHandler = error => {
  console.error(error)
  process.exit(1)
}

const getRootDir = async cwd => {
  const gitDir = await findUp('.git', { cwd })
  return path.resolve(`${gitDir}/..`)
}

const LANDR_DIR = path.resolve(`${__dirname}/../`)

capitano.command({
  signature: '*',
  description: 'Run dev server',
  action: async () => {
    try {
      const dir = await getRootDir(CWD)
      const userConfig = await getUserConfig(dir)
      const themeConfig = await getThemeConfig(LANDR_DIR, userConfig.theme)
      const { pages, ...locals } = await getData(dir, {
        reducers: landrReducers,
        actions: landrActions,
        middleware: compact([userConfig.middleware, themeConfig.middleware])
      })

      const config = getMasterConfig({
        dir,
        themeConfig,
        userConfig
      })
      await serve({
        config,
        pages,
        locals
      })
    } catch (error) {
      errorHandler(error)
    }
  }
})

capitano.command({
  signature: 'build',
  description: 'Build static site',
  options: [
    {
      signature: 'prefixPaths',
      boolean: true
    }
  ],
  action: async (params, options) => {
    try {
      process.env.NODE_ENV = 'production'
      const dir = await getRootDir(CWD)
      const userConfig = await getUserConfig(dir)
      const themeConfig = await getThemeConfig(LANDR_DIR, userConfig.theme)
      const { pages, ...locals } = await getData(dir, {
        reducers: landrReducers,
        actions: landrActions,
        middleware: [userConfig.middleware, themeConfig.middleware]
      })

      const config = getMasterConfig({
        dir,
        themeConfig,
        userConfig,
        options
      })

      if (options.prefixPaths) {
        config.pathPrefix = `/${locals.repository.name}`
      }

      await build({
        config,
        pages,
        locals
      })

      console.log(`Site built to ${config.distDir}`)

      if (config.hooks['post-build']) {
        await Promise.resolve(config.hooks['post-build']({
          config,
          pages,
          locals
        }))
      }
      
      process.exit(0)
    } catch (error) {
      errorHandler(error)
    }
  }
})

capitano.command({
  signature: 'view',
  description: 'View built site',
  action: async () => {
    try {
      process.env.NODE_ENV = 'production'
      const dir = await getRootDir(CWD)
      const userConfig = await getUserConfig(dir)
      const themeConfig = await getThemeConfig(LANDR_DIR, userConfig.theme)

      const { distDir } = getMasterConfig({
        userConfig,
        themeConfig,
        dir
      })
      view(distDir)
    } catch (error) {
      errorHandler(error)
    }
  }
})

capitano.command({
  signature: 'deploy',
  description: 'Deploy built site to gh-pages',
  action: async () => {
    try {
      const dir = await getRootDir(CWD)
      const userConfig = await getUserConfig(dir)
      const themeConfig = await getThemeConfig(LANDR_DIR, userConfig.theme)

      const { remoteUrl, distDir } = getMasterConfig({
        userConfig,
        themeConfig,
        dir
      })
      console.log(`Deploying site to ${remoteUrl}`)
      await deploy(distDir, remoteUrl)
      console.log(`Site deployed to ${remoteUrl}`)
    } catch (error) {
      errorHandler(error)
    }
  }
})

capitano.run(process.argv, error => {
  if (error != null) {
    throw error
  }
})
