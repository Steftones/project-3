import Image from '../models/image.js'
import fileManager from '../lib/fileManager.js'

const fileUploadController = {
  getAllImages: async (req, res, next) => {
    try {
      const images = await Image.find()
      res.status(200).send(images)
    } catch (err) {
      next(err)
    }
  },
  getImageById: async (req, res, next) => {
    try {
      const image = await Image.findById(req.params.imageId)
      res.status(200).send(image)
    } catch (err) {
      next(err)
    }
  },
  postImage: async (req, res, next) => {
    const body = req.body
    try {
      const file = await fileManager.uploadImage(req.body.filePath)
      body.url = file.secure_url
      body.public_id = file.public_id,
      body.user = req.currentUser._id
      const image = await Image.create(body)
      res.send(image)
    } catch (err) {
      next(err)
    }
  },
  deleteImage: async (req, res, next) => {
    try {
      const file = await Image.findById(req.params.imageId)
      const deletedFileCloud = await fileManager.deleteImage(file.public_id)
      const deletedFile = await Image.findByIdAndDelete(file._id)
      res.send(deletedFile)
    } catch (err) {
      next(err)
    }
  }
}

export default fileUploadController