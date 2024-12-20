"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { articles } from "../../assets/data";
import Link from "next/link";

export default function ArticlePage({ params }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params; // Unwrap params Promise
      const { id } = resolvedParams;
      const foundArticle = articles.find((art) => art.id.toString() === id);
      setArticle(foundArticle || null); // Fallback if article is not found
    }

    fetchParams();
  }, [params]);

  if (!article) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">
          Article not found. Please check the URL.
        </h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="article-page   min-h-screen mt-[12vh]"
    >
      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header text-center mb-8"
      >
        <h1 className=" uppercase text-4xl lg:text-6xl mb-4 font-westmeath ">
          {article.titre}
        </h1>
        <h2 className="text-lg lg:text-2xl font-bold text-gray-700 mb-6 font-mono">
          {article.sousTitre}
        </h2>
        <img
          className="h-[40vh] lg:h-[50vh] w-full object-cover card shadow-md"
          src="../../herobann.jpg"
          alt="Hero Banner"
        />
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="content max-w-5xl mx-auto space-y-8 p-4"
      >
        {/* Introduction */}
        <section className="introduction ">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-westmeath">
            Introduction
          </h3>
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-mono">
            Welcome to the world of culinary wonders! In this article, we dive
            deep into the magic behind Rosa Cuisine, where every bite tells a
            story. Get ready to explore flavors, traditions, and the artistry of
            food like never before.
          </p>
        </section>

        {/* Main Section */}
        <section className="main-content">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-westmeath">The Rosa Experience</h3>
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-mono">
            Rosa Cuisine is more than just a restaurant; it's an experience.
            Every dish is crafted with passion and precision, blending
            traditional techniques with modern innovation. From the first
            appetizer to the final dessert, you'll embark on a journey of
            unforgettable flavors.
          </p>
          <img
            className=" h-[50vh] object-cover rounded-lg shadow-md my-6"
            src="../../fish.png"
            alt="Signature Dish"
          />
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-mono">
            Our signature dishes are a celebration of local ingredients and
            global inspiration. The Rosa Risotto, for instance, is a perfect
            blend of creamy texture and vibrant flavors, leaving you craving for
            more.
          </p>
        </section>

        {/* Chef's Note */}
        <section className="chefs-note">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-westmeath">
            A Note from the Chef
          </h3>
          <blockquote className="text-lg lg:text-xl italic text-gray-600 border-l-4 border-gray-400 pl-4 font-mono">
            "Cooking is an art, and every plate is a canvas. At Rosa Cuisine, we
            believe in creating masterpieces that delight both the palate and
            the soul." - Chef Rosa
          </blockquote>
        </section>

        {/* Closing Thoughts */}
        <section className="closing-thoughts">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-westmeath">
            Closing Thoughts
          </h3>
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-mono">
            We hope this glimpse into Rosa Cuisine has inspired you to visit us
            and savor the magic yourself. Whether you're celebrating a special
            occasion or simply indulging your taste buds, Rosa Cuisine promises
            an experience to cherish forever.
          </p>
        </section>
      </motion.div>

      {/* Read Next Articles Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="read-next mt-12 max-w-5xl mx-auto p-6 sm:p-2"
      >
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-center uppercase font-westmeath">
          A lire aussi
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles
            .filter((art) => art.id.toString() !== article.id.toString())
            .map((nextArticle) => (
              <Link key={nextArticle.id} href={`/articles/${nextArticle.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="next-article-card border border-gray-200 rounded-lg shadow-md p-4 bg-white "
                >
                  <img src="../../stk.png"/>
                  <h4 className="font-bold text-lg lg:text-xl mb-2 font-westmeath">
                    {nextArticle.titre}
                  </h4>
                  <p className="text-sm lg:text-md text-gray-600 font-mono">
                    {nextArticle.sousTitre}
                  </p>
                </motion.div>
              </Link>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
