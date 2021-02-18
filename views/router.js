import express from 'express'
import userController from '../controllers/userController.js'
import secureRoute from '../middleware/secureRoute.js'
import countryController from '../controllers/countryController.js'
import commentController from '../controllers/commentController.js'

const router = express.Router()

router.route('/register')
  .post(userController.register)

router.route('/login')
  .post(userController.login)

router.route('/user/:id')
  .get(userController.getUserById)
  .put(secureRoute, userController.editUser)

router.route('/countries')
  .get(countryController.getAllCountries)

router.route('/countries/:id')
  .get(countryController.getCountryById)

router.route('/countries/:id/comments')
  .post(secureRoute, commentController.postComment)

export default router