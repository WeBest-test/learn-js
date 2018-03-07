let p = console.log;

try{
  alert()
} catch (e) {
  p(e)
} finally {
  p("finished====")
}



class ValidationError extends Error {
  constructor(message) {
    super(message); 
    this.name = "ValidationError";
  }
}

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new ValidationError("Parameter is not a number!");
  }
}

try {
  getRectArea(3, 'A');
}
catch(e) {
  console.log(e);
}
