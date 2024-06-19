import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const schema = new mongoose.Schema(
    {
        videoFile: { type: String, required: true }, // Cloudinary URL
        thumbnail: { type: String, required: true }, // Cloudinary URL
        title: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: Number, required: true }, // Cloudinary
        views: { type: Number, default: 0 },
        isPublished: { type: Boolean, default: true },
        owner: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

schema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model("Video", schema);

// Aggregation Queries.
// Middlewares are specified at schema level.

// Pre -> To Execute code, just before saving the data to the database.

// Plugins are used to add extra functionality to the schema.
// mongoose aggreagate pipeline.

// Cryptographic
// bcrypt - Hash the passwords.

// JWT, Bearer Token,

// Refresh Token is stored in database.
// Cookies
// Session
