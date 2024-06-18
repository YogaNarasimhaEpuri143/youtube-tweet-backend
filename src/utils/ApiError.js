class ApiError extends Error {
    constructor(statusCode, errors = [], stack = "", message = "Something went wrong") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;
        this.success = false;

        if (status) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor); // Create detail record of the current point in the code where the error happend.
        }
    }
}

export { ApiError };

// Core Node.JS
