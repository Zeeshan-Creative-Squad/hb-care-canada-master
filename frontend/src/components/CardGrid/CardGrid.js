import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardGrid.css';
import LatestNews from '../../components/LatestNews/LatestNews';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function CardGrid() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [firstBlog,setFirstBlog] = useState();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBlogsListing();
  }, []);

  const getAllBlogsListing = () => {
    setLoading(true);
    axios.get("/blogs")
      .then((res) => {
        if (res.data.status === "success") {
          const [firstSectionBlog , ...otherBlog] = res.data.data;
          setFirstBlog(firstSectionBlog)

          setBlogs(otherBlog);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Error fetching blogs:", err);
        setLoading(false);
      });
  };

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNewsData = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page <= Math.ceil(blogs.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {loading ?
        (<div className="w-100 text-center mb-5">
          <Spinner style={{ color: "black", width: "120px", height: "120px" }} />
        </div>) : (

          <>
          {
            firstBlog &&
            <div>
              <LatestNews 
                img={firstBlog.blog_image}
                title={firstBlog.title}
                content={firstBlog.brief_paragraph}
                anchor={firstBlog.slug_url}
                redirectionFunction={redirectUserToBlog}
              />
            </div>
          }
          {
            blogs &&
            <Container className='main-cardgrid'>
              <Row>
                {currentNewsData.map((blog) => (
                  <Col sm={12} md={6} lg={4} key={blog.id} className="mb-4">
                    <Card style={{ border: 'none' }}>
                      <Card.Img variant="top" src={blog.blog_image} />
                      <Card.Body className='card-body'>
                        <Card.Subtitle className="mb-2 text-muted">{blog.entity}</Card.Subtitle>
                        <Card.Title className='card-title'>{blog.title}</Card.Title>
                        <Card.Text>{blog.brief_paragraph}</Card.Text>
                        <Card.Link className='href' onClick={() => redirectUserToBlog(blog.slug_url)}>Read More →</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className='pagination-container'>
                {[...Array(Math.ceil(blogs.length / itemsPerPage)).keys()].map((page) => (
                  <button
                    key={page + 1}
                    className={currentPage === page + 1 ? 'active circle-button' : 'circle-button'}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    {page + 1}
                  </button>
                ))}
                {currentPage < Math.ceil(blogs.length / itemsPerPage) && (
                  <button className='connect-button' onClick={() => handlePageChange(currentPage + 1)}>
                    <img src="/icons/next-arrow-icon.svg" className="next-icon" alt="next-arrow"/>
                  </button>
                )}
              </div>
            </Container>
          }
          </>
        )}
    </>
  );
}

export default CardGrid;
