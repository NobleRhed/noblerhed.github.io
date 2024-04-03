const express = require("express");
const multer = require('multer');
const bodyParser = require('body-parser');

var cors = require('cors')
const app = express();

// Set up storage for uploaded files (optional)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      // Define where the files should be saved (e.g., '/tmp/my-uploads')
      cb(null, '/Temp/my-uploads');
  },
  filename: (req, file, cb) => {
      // Set the file name (e.g., use the original file name)
      cb(null, file.originalname);
  }
});
// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// Parse JSON bodies and URL-encoded bodies
//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const port = 9876;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/init", (_, res) => {
  return res.json({reply: 'hellp'});
});

app.post("/inft", upload.single('user_file'), (req, res) => {
    // Access the uploaded file data using req.file
    // Access other form fields using req.body  
  return res.send(`${req.body.user_name} send ${req.file.filename}`);
})

app.listen(port, () => {
  console.log(`Start INFG server at ${port}`);
});
