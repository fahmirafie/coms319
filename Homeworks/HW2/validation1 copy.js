function validate() {
  valCheck = true;

}

function getImage(bool, ID) {
  var image = document.getElementById("image" + ID);
  if (image == null) {
      image = new Image(15, 15);
      image.id = "image" + ID;
  }
  image.src = bool ? './correct.png' : './wrong.png';
  return image;
}

function fNameCheck(fName) {
  return (alphaNumCheck(fName));
}

function lNameCheck(lName) {
  return (alphaNumCheck(lName));
}

function alphaNumCheck(entry) {
  let regex = /^[a-z0-9]+$/i;
  if (entry != null && entry.match(regex)) {
    return true;
  } else {
    return false;
  }
}