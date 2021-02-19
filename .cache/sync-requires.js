const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ubuntu/ledner/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ubuntu/ledner/src/pages/404.js"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("/home/ubuntu/ledner/src/templates/blog-list.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/ubuntu/ledner/src/templates/blog-post.js")))
}

