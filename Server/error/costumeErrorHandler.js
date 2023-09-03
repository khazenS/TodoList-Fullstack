const CostumeError = require("../error/CostumeError");
const costumeErrorHandler = (err,req,res,next) => {
    let customError = err;
    console.log(customError)

    if (customError.name == "CastError") {
      customError = new CostumeError("Bad Request", 400);
    }
    if (customError._message === "Todo validation failed"){
        customError = new CostumeError("Please fill a todo!",400)
    }
    console.log(customError)
    res
      .status(customError.status || 500)
      .json({
        status: false,
        message: customError.message || "Unknowm Error!"
      })
    
  }


module.exports = costumeErrorHandler;
