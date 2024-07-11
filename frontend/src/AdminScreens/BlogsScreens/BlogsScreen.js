import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import BlogsPortalListings from "../../components/Blogs & Landing Page/BlogsPortalListings";
// import HeroBanner from "../../components/Common Banner Component/HeroBanner";

const BlogsScreen = () => {
  return (
    <Fragment>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      {/* <HeroBanner
                Heading="Blogs Listing"
                Paragraph={"Venus Blogs Portal"}
                bgImg={"/images/creatives/plane-hero-bg.png"}
            /> */}
      {/* <h1 style={{ color: "black" }} className="h1_main ps-5 pt-5 pb-5">
        
      </h1> */}
      <BlogsPortalListings />
    </Fragment>
  );
};

export default BlogsScreen;
