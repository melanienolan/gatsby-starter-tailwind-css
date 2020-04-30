import React from "react"
import Layout from "../components/Layout.js"

export default () => {
  return (
    <Layout>
      <h1 className="text-xl text-center text-teal-500">Hello</h1>
      <button className="p-4 bg-purple-700 hover:bg-purple-300">
        This is a button
      </button>
      <div className="appearance-none"></div>
    </Layout>
  )
}
