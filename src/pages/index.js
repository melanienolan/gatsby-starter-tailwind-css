import React from "react";
import Layout from "../components/Layout.js";
import SEO from "../components/SEO.js";

export default () => {
  return (
    <Layout>
      <SEO />
      <h1 className="text-xl text-center text-teal-500">Hello</h1>
      <button className="bg-purple-700 p-4 hover:bg-purple-300">
        This is a button
      </button>
    </Layout>
  );
};
