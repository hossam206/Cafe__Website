import React, { useEffect, useState } from "react";

import TitleSlide from "../../Components/TitleSlider/TitleSlide";
// import pages
import "./RecentBlog.css";
import "../../../src/index.css";
// import components
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import RecentBlogCOMP from "../../Components/RecentBloG/RecentBlogCOMP";
import NewArticleComp from "../../Components/NewArticleComp/NewArticleComp";
// import icons
import { CiSearch } from "react-icons/ci";

// import images
// ------------------import Recent Blog Img
import RecentBlogImg1 from "../../Images/RecentBlog/blog-post-1.jpeg";
import RecentBlogImg2 from "../../Images/RecentBlog/blog-post-2.jpeg";
import RecentBlogImg3 from "../../Images/RecentBlog/blog-post-3.jpeg";
import blog_author_1 from "../../Images/RecentBlog/blog-author-1.png";

// ------------------import Categories Img
import Categories1 from "../../Images/RecentBlog/Categories/b-sm-1.png";
import Categories2 from "../../Images/RecentBlog/Categories/b-sm-2.png";
import Categories3 from "../../Images/RecentBlog/Categories/b-sm-3.png";
import Categories4 from "../../Images/RecentBlog/Categories/b-sm-4.png";
// ------------------import add panner img
import AddBannerImg from "../../Images/RecentBlog/ad-bg-1.jpg";
import WhiteNavbarComp from "../../Components/whiteNavbarComp/WhiteNavbarComp";
import Loaderr from "../../Components/Loader/Loaderr";
export default function RecentBlog() {
    const [loader, showloader] = useState(true);

    function setLoader() {
      let LoaderTime = setTimeout(() => {
        showloader(false);
      }, 1000);
      return () => clearTimeout(LoaderTime);
    }
    useEffect(() => {
      setLoader();
    }, []);
  return (
    <>
      {loader && <Loaderr />}
      <WhiteNavbarComp />
      <TitleSlide PageTitle={"Recent Blog"} PageSmallTitle={"BLOG"} />
      {/* start Recent Blog  */}
      <div className="RecentBlog">
        <Container fluid>
          <div className="RecentBlogContent">
            <Row>
              <Col xl={8} lg={8} md={12} sm={12}>
                <RecentBlogCOMP
                  RecentBlogImg1={RecentBlogImg1}
                  RecentBlogHeadingTitle={
                    "IDEAL COCKTAILS FROM OUR BARMEN FOR PEFECT MOOD"
                  }
                  AuthorName={"Rasalina De Willimson"}
                />

                <RecentBlogCOMP
                  RecentBlogImg1={RecentBlogImg2}
                  RecentBlogHeadingTitle={
                    "WHISPER TO US ABOUT YOUR FEELINGS, AND WE WILL PREPARE WHAT YOU NEED NOW."
                  }
                  AuthorName={"Anderson Ulter"}
                />

                <RecentBlogCOMP
                  RecentBlogImg1={RecentBlogImg3}
                  RecentBlogHeadingTitle={
                    "BUILD A COOL MORNIG WITH CAFENA COFFEE"
                  }
                  AuthorName={"Alisha De Hukaar"}
                />
              </Col>
              <Col xl={4} lg={4} md={12} sm={12}>
                <div className="rightsection">
                  <div className="searhHere blogBorder">
                    <h5
                      style={{
                        fontWeight: "600",
                        color: "#000",
                        fontFamily: "Bebas Neue",
                        letterSpacing: "1px",
                      }}
                    >
                      SEARCH HERE
                    </h5>
                    <input
                      type="text"
                      placeholder="Search Product"
                      className="RegularInput"
                    ></input>
                  </div>
                  <div className="categoriesNumber blogBorder">
                    <h5 style={{ fontWeight: "600", color: "#000" }}>
                      CATEGORIES
                    </h5>
                    <ul>
                      <li className="cat-item">
                        <a href="#0">Burger</a> <span>04</span>
                      </li>
                      <li className="cat-item">
                        <a href="#0">2x Pizza</a> <span>06</span>
                      </li>
                      <li className="cat-item">
                        <a href="#0">Cold Drinks</a> <span>08</span>
                      </li>
                      <li className="cat-item">
                        <a href="#0">Chicken</a> <span>10</span>
                      </li>
                      <li className="cat-item">
                        <a href="#0">Stuck Dish</a> <span>12</span>
                      </li>
                    </ul>
                  </div>
                  <div className="Categories blogBorder">
                    <h5 style={{ fontWeight: "600", color: "#000" }}>
                      CATEGORIES
                    </h5>
                    <NewArticleComp
                      Img={Categories1}
                      Title={"Ideal Cocktails From Our Barmen For Pefect Mood"}
                    />
                    <NewArticleComp
                      Img={Categories2}
                      Title={"Ideal Cocktails From Our Barmen For Pefect Mood"}
                    />
                    <NewArticleComp
                      Img={Categories3}
                      Title={"Ideal Cocktails From Our Barmen For Pefect Mood"}
                    />
                    <NewArticleComp
                      Img={Categories4}
                      Title={"Ideal Cocktails From Our Barmen For Pefect Mood"}
                    />
                  </div>
                  <div className="PopularTag blogBorder">
                    <h5 style={{ fontWeight: "600", color: "#000" }}>
                      Popular Tag
                    </h5>
                    <ul>
                      <li>Design</li>
                      <li>Web design</li>
                      <li>brand</li>
                      <li>ui/ux</li>
                      <li>nnc</li>
                      <li>design</li>
                      <li>construction</li>
                      <li>theme</li>
                      <li>app</li>
                    </ul>
                  </div>
                  <div className="AddBanner blogBorder">
                    <img
                      src={AddBannerImg}
                      alt="AddBannerImg"
                      style={{ width: "100%" }}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
