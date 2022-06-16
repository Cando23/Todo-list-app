const isDateValid = (date) => {
    if (Date.parse(date) < Date.now()) return false;
    return true;
  };
module.exports = {
    isDateValid
}