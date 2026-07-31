export function successResponse(type, message, data = {}) {
  return {
    success: true,
    type,
    message,
    data,
  };
}

export function errorResponse(message) {
  return {
    success: false,
    message,
  };
}