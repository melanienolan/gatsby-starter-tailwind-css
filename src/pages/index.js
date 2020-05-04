import React from "react"
import Layout from "../components/Layout.js"
import heroImage from "../images/hero-image.svg"

export default () => {
  return (
    <Layout>
      <main className="container flex-grow mx-auto">
        <div>
          <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold">
            Gatsby Starter Tailwind CSS
          </h1>
          <p className="px-4 mt-8 text-lg text-gray-700">
            Start your Gatsby and Tailwind CSS project easily with this Gatsby
            Starter
          </p>
        </div>
        <img
          className="mt-12 w-full"
          src={heroImage}
          alt="Gatsby and Tailwind CSS together"
        />
        <div className="p-3 mt-12 mx-2 bg-white rounded shadow-xs">
          <code className="text-gray-600 text-xs leading-3">
            gatsby new my-project-name
            https://github.com/melanienolan/gatsby-starter-tailwindcss
          </code>
        </div>
      </main>
    </Layout>
  )
}
