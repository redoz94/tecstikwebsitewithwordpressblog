import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./BlogPost.css";

const WP_BASE = "*wpinstallurl*"; // SAME as Blog.jsx

const BlogPost = () => {
  const { slug } = useParams(); // 👈 reads URL slug
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${WP_BASE}/posts?slug=${slug}&_embed`
        );
        const data = await res.json();
        setPost(data[0]); // slug is unique
      } catch (err) {
        console.error("Failed to load post", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading…</p>;
  if (!post) return <p style={{ textAlign: "center" }}>Post not found</p>;

  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <>
      <Header />

      {/* HERO / CAROUSEL IMAGE */}
      <section className="blog-hero">
        {featuredImage && (
          <img src={featuredImage} alt={post.title.rendered} />
        )}
        <h1
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </section>

      {/* CONTENT AREA */}
      <section className="blog-content container">
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;