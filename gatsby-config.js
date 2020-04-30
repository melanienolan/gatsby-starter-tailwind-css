const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Gatsby Starter TailwindCSS",
    author: "Melanie Nolan",
    description: "A Gatsby starter to set you up with TailwindCSS",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter TailwindCSS",
        short_name: "Gatsby Starter TailwindCSS",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.teal[500],
        icon: "static/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
