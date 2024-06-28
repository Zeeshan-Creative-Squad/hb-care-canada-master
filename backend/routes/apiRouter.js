import express from 'express';
const router= express.Router();

import { getBlogs, getBlogsByCategory,getBlogsId, getBlogById, createBlog, updateBlog, deleteBlog } from '../controllers/blogsController.js';

// blogs routes
router.get('/blogs', getBlogs); 
router.get('/blogs-id', getBlogsId); 
router.get('/get_blogs_by_category/:id', getBlogsByCategory);  
router.get('/blog/:id', getBlogById); 
router.post('/blog', createBlog);  
router.put('/blog/:id', updateBlog); 
router.delete('/blog/:id', deleteBlog);

export default router;