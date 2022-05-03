import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsArticle from "./NewsArticle";

const NewsArticles = () => {
  return (
    <div className="bg-slate-300">
      <div className=" max-w-7xl mx-auto font-jost py-12">
        {/* Categories */}
        <div className=" hidden md:block bg-white shadow-lg bg-white-100 p-4 border-4 rounded-lg border-grey-600">
          <div className="flex text-black-100">
            <a className=" px-8 text-xl border-r border-grey-600">ALL</a>
            <a className=" px-8 text-xl border-r border-grey-600">FEATURED</a>
            <a className=" px-8 text-xl border-r border-grey-600">CATEGORY</a>
            <a className=" px-8 text-xl">CATEGORY</a>
          </div>
        </div>
        {/* blogs */}
        <section className="bg-white pt-1 px-4 w-full">
          <NewsArticle border={true} />
          <NewsArticle border={true} />
          <NewsArticle border={true} />
          <NewsArticle border={true} />
          <NewsArticle border={false} />
        </section>
        {/* button */}
        <div className=" text-center py-8">
          <button className=" border bg-white-100 border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
