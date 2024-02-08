import React from "react";
import Hero from "../../Components/Blog/Hero/Hero";
import Nav from "../../Components/Blog/Nav/Nav";
import News from "../../Components/Blog/News/News";
import Partner from "../../Components/Home/Partner/Partner";

const Blog = () => {
  return (
    <div>
      <div>
        <Hero />
        <Nav />
        <News />
        <Partner />
      </div>
    </div>
  );
};

export default Blog;
