import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const isImage = file.fieldname === 'image';
    
    const destinationPath = isImage ? './uploads/blogImages/' : './uploads/assesmentCv/';
    
    cb(null, destinationPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {

  const imageFiletypes = /jpg|jpeg|png|webp/;
  const cvFiletypes = /txt|pdf|doc|docx/; 

  const filetypes = file.fieldname === 'image' ? imageFiletypes : cvFiletypes;

  const fileSizeLimit = file.fieldname === 'cv' ? 1 * 1024 * 1024 : Infinity;
  
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  
  if (extname && mimetype) {
    console.log("success");
    return cb(null, true);
  } else {
    const errorMessage = file.fieldname === 'image' ? 'Images Only' : 'Text file Only i.e(.pdf , .docx etc)';
    cb(errorMessage);
  }
}

const cvLimits = {
  fileSize: 1 * 1024 * 1024,
  files: 1, 
};

const imageLimits = {
  fileSize: 10 * 1024 * 1024, 
  files: 1, 
};

const upload = {
  cv: multer({
    storage: storage,
    fileFilter:function (req, file, cb) {
          checkFileType(file, cb);
        },
    limits: cvLimits,

  }),
  image: multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
          checkFileType(file, cb);
        },
  }),
};


router.post("/", upload.image.single("image"), (req, res) => {
  
  res.send(`/${req.file.path}`);
})
router.post("/assesment", upload.cv.single("cv"), (req, res) => {
  res.send(`${req.file.path}`);
})




export default router
