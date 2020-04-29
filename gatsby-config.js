module.exports = {
  siteMetadata: {
    title: "Gatsby Starter TailwindCSS",
    author: {
      name: "Melanie Nolan",
    },
    description: "A Gatsby starter to set you up with TailwindCSS",
    siteUrl: "https://www.google.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter TailwindCSS",
        short_name: "Gatsby Starter TailwindCSS",
        start_url: "/",
        background_color: "#38b2ac",
        theme_color: "#38b2ac",
        icon: "src/images/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
