const GitInfo = require('gitinfo')

const distDir = (owner, name) => `${process.env.HOME}/landr/${owner}/${name}`

const getUserConfig = dir => {
  try {
    return require(`${dir}/landr.conf.js`)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return {
        theme: 'landr-theme-intro'
      }
    } else {
      throw err
    }
  }
}

const getThemeConfig = (landrDir, theme) => {
  try {
    return require(`${landrDir}/themes/${theme}/landr.conf.js`)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return {}
    } else {
      throw err
    }
  }
}

const getMasterConfig = ({ dir, themeConfig, userConfig, options }) => {
  const gitInfo = GitInfo({
    gitPath: `${dir}/.git`,
    defaultBranchName: 'master'
  })

  return {
    dev: process.env.NODE_ENV !== 'production',
    dir: dir,
    distDir: distDir(gitInfo.getUsername(), gitInfo.getName()),
    owner: gitInfo.getUsername(),
    repo: gitInfo.getName(),
    remoteUrl: gitInfo.getRemoteUrl(),
    theme: userConfig.theme,
    hooks: userConfig.hooks,
    settings: {
      ...userConfig.settings,
      ...themeConfig.settings
    },
    ...options
  }
}

module.exports = {
  getThemeConfig,
  getUserConfig,
  getMasterConfig
}
