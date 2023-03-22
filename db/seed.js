import mongoose from './connection.js'
import Food from '../models/Food.js'
// import Meals from '../models/MealPlans.js'
import testFood from './testfood.json' assert { type: 'json' }

// Food.remove({})

Food.collection.insert(testFood)
    .then(test => {
        console.log(testFood)
    })
    .catch(err => {
        console.log(err)
    })