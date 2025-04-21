import React from "react";
import "../../css/Blogs.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../../assests/Images/Blogs/blog-1-image.png";
import img2 from "../../../assests/Images/Blogs/blog-2-image.png";
import img3 from "../../../assests/Images/Blogs/blog-3-image.png";
import img4 from "../../../assests/Images/Blogs/blog-4-image.png";
import img5 from "../../../assests/Images/Blogs/blog-5-image.png";  
import img6 from "../../../assests/Images/Blogs/blog-6-image.png";
import BannerImages from "../../../assests/Images/Blogs/blog-banner.png";


const Blog = () => {
  const posts = [
    {
      id: 1,
      category: "Virtual Assistant",
      title: "Fortifying Mobile App Security",
      date: "Oct 16,2024",
      author: "Admin",
      image: img1,
      url: "/fortifying-mobile-app-security",
    },
    {
      id: 2,
      category: "Ethical",
      title: "Why Strong Passwords Matter and How to Create",
      date: "Oct 16,2024",
      author: "Admin",
      image: img2,
      url: "/why-strong-passwords-matter-and-how-to-create",
    },
    {
      id: 3,
      category: "Lifecycle",
      title: "Phishing: Beware of Fake Emails and Messages",
      date: "Oct 16,2024",
      author: "Admin",
      image: img3,
      url: "/phishing-beware-of-fake-emails-and-messages",
    },
    {
      id: 4,
      category: "Virtual Assistant",
      title: "Strengthening Your Digital Fortress",
      date: "Oct 16,2024",
      author: "Admin",
      image: img4,
      url: "/strengthening-your-digital-fortress",
    },
    {
      id: 5,
      category: "Ethical",
      title: "Elevating Security with Firewalls",
      date: "Oct 16,2024",
      author: "Admin",
      image: img5,
      url: "/elevating-security-with-firewalls",
    },
    {
      id: 6,
      category: "Lifecycle",
      title: "Top 5 Effective Website Security Tips for 2024",
      date: "Oct 16,2024",
      author: "Admin",
      image: img6,
      url: "/top-5-effective-website-security-tips-for-2024",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Blog | Infoziant - Insights on Cybersecurity and Mobile App Security
        </title>
        <meta
          name="description"
          content="Explore Infoziant's blog for insights on mobile app security, firewall assessments, phishing, and effective website security tips to safeguard your data."
        />
      </Helmet>

      <div className="blog_page">
        <div
          className="service-banner"
          style={{
            backgroundImage: `url(${BannerImages})`, // Use the imported variable here
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >


          <motion.div
            className="sb-intro"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <h1 >Blogs</h1>
            <br />
            <p>
              Securing mobile apps and firewalls is vital to protect against data
              leaks, spyware, and unauthorized access.
            </p>
          </motion.div>
        </div>
        <div className="blog-container-l">
          <div className="blog-header-l">
            <motion.h1
              className="blog-title-l"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              All The Tips In One Place
            </motion.h1>
          </div>
          <div className="blog-grid-l">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="blog-card-l"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: post.id * 0.15,
                }}
              >
                <div className="image-container-l">
                  <img
                    src={post.image}
                    alt={post.category}
                    className="blog-image-l"
                  />
                </div>
                <div className="blog-content-l">
                  <p className="blog-category-l">{post.category}</p>
                  <p className="blog-title-text-l">{post.title}</p>
                  <p className="blog-author-l">
                    {post.date} by{" "}
                    <span className="author-name-l">{post.author}</span>
                  </p>
                  <br />
                  <Link to={post.url}>
                    <button className="read-more-l">Read More</button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default Blog;