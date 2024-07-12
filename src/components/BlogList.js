// BlogList.js
import React from 'react';
import { Row, Col } from 'antd';
import BlogCard from './BlogCard';

const blogs = [
  {
    title: 'Introduction to Machine Learning',
    description: 'A beginner\'s guide to understanding the basics of machine learning and its applications.',
    link: 'https://example.com/blog1',
  },
  {
    title: 'Advanced Data Science Techniques',
    description: 'Explore advanced techniques in data science including deep learning and neural networks.',
    link: 'https://example.com/blog2',
  },
  {
    title: 'Building Scalable Applications',
    description: 'Learn how to build scalable and robust applications using modern development practices.',
    link: 'https://example.com/blog3',
  },
];

const BlogList = () => (
  <div style={{ padding: '24px' }}>
    <h2>My Blogs</h2>
    <Row gutter={[16, 16]}>
      {blogs.map((blog, index) => (
        <Col key={index} xs={24} sm={12} md={8}>
          <BlogCard title={blog.title} description={blog.description} link={blog.link} />
        </Col>
      ))}
    </Row>
  </div>
);

export default BlogList;
