import React from "react";
// import pages
import "./RecentBlogCOMP.css";
import "../../../src/index.css";
// import images
import RecentBlogImg1 from "../../Images/RecentBlog/blog-post-1.jpeg";
import RecentBlogImg2 from "../../Images/RecentBlog/blog-post-2.jpeg";
import RecentBlogImg3 from "../../Images/RecentBlog/blog-post-3.jpeg";
import blog_author_1 from "../../Images/RecentBlog/blog-author-1.png";
// import icons
import { CiFileOn } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function RecentBlogCOMP(props) {
  return (
    <>
      <div className="RecentBlogcoMP">
        <div className="RecentBlogImg" style={{ overflow: "hidden" }}>
          <img
            src={props.RecentBlogImg1}
            alt="RecentBlogImg1"
            loading="lazy"
          ></img>
        </div>
        <div className="RecentBlogIcons">
          <ul>
            <li>
              <CiFileOn />
              <span>cofee</span>
            </li>
            <li>
              <FaRegComments />
              <span>30 Comments</span>
            </li>
            <li>
              <SlCalender />
              <span>04Th March 2024</span>
            </li>
          </ul>
        </div>
        <div className="RecentBlogHeading">
          <h3 className="DarkTitle">{props.RecentBlogHeadingTitle}</h3>
          <p style={{ fontSize: "18px", Color: "#6c6c6c", marginTop: "15px" }}>
            Ronec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam
            quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo
            mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper.
            Lorem ipsum.
          </p>
        </div>
        <div className="RecentBlogAuthor">
          <button>READ MORE</button>
          <div className="authordetail">
            <img
              src={blog_author_1}
              alt="blog_author_1"
              style={{ widthL: "100%" }}
              loading="lazy"
            ></img>
            <h5 style={{ fontSize: "16px", marginLeft: "20px" }}>
              {props.AuthorName}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
