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
     
      <BlogsPortalListings />
    </Fragment>
  );
};

export default BlogsScreen;
