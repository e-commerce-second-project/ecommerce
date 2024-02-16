const express = require('express');
const router = express.Router();
const cloudinary = require("../Cloudinary");
const upload = require("../middleware/multer.js");

 router.post('/upload', upload.single('image'), function (req, res) {
  cloudinary.uploader.upload(req.file.Images, function (err, result){
    console.log(process.env.API_SECRET);
    if(err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error"
      })
    }

    res.status(200).json({
      success: true,
      message:"Uploaded!",
      data: result
    })
  })
});

module.exports = router;