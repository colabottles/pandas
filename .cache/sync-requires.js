const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/todd/pandas/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/todd/pandas/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/todd/pandas/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/todd/pandas/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/todd/pandas/src/pages/my-files.js"))),
  "component---src-pages-us-js": hot(preferDefault(require("/Users/todd/pandas/src/pages/us.js")))
}

