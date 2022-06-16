const removeTimeStamp = (path) => {
    return path?.slice(0, path.lastIndexOf("-"));
  };
  
  module.exports = {
    removeTimeStamp,
  };
  