const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/home/tsturge/apps/tom.sturge.co/src/templates/blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tsturge/apps/tom.sturge.co/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/tsturge/apps/tom.sturge.co/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/tsturge/apps/tom.sturge.co/src/pages/index.js")))
}

