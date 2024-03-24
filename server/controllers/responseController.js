//Tips: always try to use default values for the parameters to make your function easier to use and less error prone
exports.errorResponse = (
  res,
  { statusCode = 500, message = "Server Error" }
) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

exports.successResponse = (
  res,
  { statusCode = 200, message, payload = {} }
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    payload,
  });
};
