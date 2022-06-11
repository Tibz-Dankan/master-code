//  CHECK FILE EXTENSION
// var fileName = "myDocument.pdf";
// var fileExtension = fileName.split('.').pop(); //"pdf"
const checkString = (string) => {
  if (
    string === "image/jpeg" ||
    string === "image/jpg" ||
    string === "image/png"
  ) {
    console.log("String Accepted !");
  } else {
    console.log("String Rejected !");
  }
};

checkString("image/jpeg");
checkString("image/jpg");
checkString("image/png");
checkString("image/pdf");
checkString("image/tibz");
