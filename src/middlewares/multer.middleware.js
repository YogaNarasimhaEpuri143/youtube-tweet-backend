import multer from "multer";

// Full Control on Storing files on disk
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

export const upload = multer({ storage });

/**
 * <input type="file"> in an HTML form and a user uploads a PDF file (or any other type of file),
 * Multer helps you access and manage that file on your server
 * It processes the uploaded file and makes it available to your server-side code so,
 *      1. can save it,
 *      2. manipulate it, or
 *      3. use it however you need.
 */
//

// <form action="/upload" method="POST" enctype="multipart/form-data">
//     <input type="file" name="profileImage" />
//     <button type="submit">Upload</button>
// </form>;

// app.post("/upload", upload.single("profileImage"), (req, res) => {
//     console.log(req.file);

//     return res.redirect("/");
// });

// Logic -> Big problem into smaller problems.
