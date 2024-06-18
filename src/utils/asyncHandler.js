const asyncHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (err) {
        res.status(err.status || 500).json({ success: false, message: err.message });
    }
};

export { asyncHandler };

// Wrapper to remove try-catch block, reduce the code

// const asyncHandler1 = (func) => {
//     (req, res, next) => {
//         Promise.resolve(func(req, res, next)).catch((err) => next(err));
//     };
// };

// Standardized API Response
// Standardized API Error
