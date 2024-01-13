const LibHTTPResponseException = (res, error) => {
    if (error?.status === 401 && error?.message) {
      return res.status(error.status).json({
        detail: error.message,
      });
    } else if (error?.status === 404 && error?.message) {
      return res.status(error.status).json({
        detail: error.message,
      });
    } else if (error?.status === 403 && error?.message) {
      return res.status(error.status).json({
        detail: error.message,
      });
    } else {
      console.log("LibServiceResponseException", error);
      return res.status(500).json({
        detail: "Something when wrong!",
      });
    }
  };
  
  module.exports = {
    LibHTTPResponseException,
  };
  