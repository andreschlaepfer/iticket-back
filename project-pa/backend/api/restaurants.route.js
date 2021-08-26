import express from 'express'
import {getRestaurants, createRestaurant, updateRestaurant, deleteRestaurant} from '../controllers/restaurant.controller.js'
import Restaurants from '../models/restaurant.model.js'
const router = express.Router()

router.get('/', getRestaurants)
router.post('/add', createRestaurant)
router.put('/put', updateRestaurant)
router.delete('/del', deleteRestaurant)

export default router