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

// Plugins are used to add extra functionality to the schema.
// mongoose aggreagate pipeline.

// Hook/Middleware   -> Function that runs automatically, at certain points in the lifecycle of database operation.
// pre, post
// Pre  -> To Execute code, just before saving the data to the database.
// Post -> To Execute code, just after saving the data to the database

// Events -> Signals, that something has happend.
// save, validate, remove, ...

// Cryptographic
// bcrypt - Hash the passwords.

// JWT, Bearer Token,

// Refresh Token is stored in database.
// Cookies
// Session

/** What to see
 *
 *    1. MongoDB Aggregate Pipeline.
 *    2. bcrypt.
 *    3. jwt
 */
