import { asyncHandler } from "./../utils/asyncHandler.js";
import { ApiError } from "./../utils/ApiError.js";
import { ApiResponse } from "./../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import uploadOnCloudinary from "./../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
    // get tge user data from the frontend
    // validation
    // check if the user is already exists: username, email
    // check for images, check for avatar.
    // upload to cloudinary, avatar
    // create user Object - create entry in db
    // remove password and refresh token feom response
    // check for user creation success
    // return res

    const { fullname, email, username, password } = req.body;

    if ([fullname, email, username, password].some((filed) => filed.trim() === "")) {
        throw ApiError(400, "All Fields are required");
    }

    const existedUser = User.findOne({ $or: [{ username }, { email }] });

    if (existedUser) throw ApiError(409, "User with email or username already exists");

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) throw ApiError(400, "Avatar file is required");

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) throw ApiError(400, "Avatar file is required");

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        uername,
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) throw ApiError(500, "Something went wrong while registering the user");

    return res.status(201).json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});

export { registerUser };

// Operators
