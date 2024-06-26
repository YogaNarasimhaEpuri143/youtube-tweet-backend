import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, lowerCase: true, trim: true, index: true },
        email: { type: String, required: true, unique: true, lowerCase: true, trim: true },
        fullname: { type: String, required: true, trim: true, index: true },
        avatar: { type: String, required: true },
        coverImage: { type: String },
        watchHistory: [{ type: Schema.Types.ObjectId, ref: "Video" }],
        passsword: { type: String, required: [true, "Password is Required"] },
        refreshToken: { type: String },
    },
    { timestamps: true }
);

// Inject Middleware / Hook
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.passsword = await bcrypt.hash(this.passsword, 10);
    next();
});

// Injecting methods
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.passsword);
};

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign({ _id: this._id, email: this.email, username: this.username, fullname: this.fullname }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
};

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
};

export const User = mongoose.model("User", userSchema);
