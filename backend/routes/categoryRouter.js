import express from 'express';
const categoryRouter= express.Router();
 
import { getAllCategories, createCategory } from '../controllers/categoryController.js'

// category routes
categoryRouter.get('/', getAllCategories)
categoryRouter.post('/add_category', createCategory);  

export default categoryRouter;