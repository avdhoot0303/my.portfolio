// BlogCard.js
import React from 'react';
import { Card } from 'antd';

const BlogCard = ({ title, description, link }) => (
  <Card title={title} extra={<a href={link} target="_blank" rel="noopener noreferrer">Read More</a>}>
    <p>{description}</p>
  </Card>
);

export default BlogCard;
