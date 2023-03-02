// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/portfolio/`
  basePath = `/${repo}/portfolio`
}

module.exports = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
}
