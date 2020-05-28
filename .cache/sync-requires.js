const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-book-template-js": hot(preferDefault(require("D:\\My Websites\\gatsby-book-app\\book-app\\src\\templates\\bookTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\My Websites\\gatsby-book-app\\book-app\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\My Websites\\gatsby-book-app\\book-app\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\My Websites\\gatsby-book-app\\book-app\\src\\pages\\index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("D:\\My Websites\\gatsby-book-app\\book-app\\src\\pages\\login.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("D:\\My Websites\\gatsby-book-app\\book-app\\src\\pages\\page-2.js")))
}

