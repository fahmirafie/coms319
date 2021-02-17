function validateAll() {
  validateNames();

  gender = document.getElementById("gender");
  document.getElementById("gender").appendChild(getImage(!gender.value, gender));

  state = document.getElementById("state");
  document.getElementById("state").appendChild(getImage(!state.value, state));
}

function validateNames() {
  validate("fName");
  validate("lName");
}


function validate(name) {
  var resultNameCheck = nameCheck(document.forms["validation form"][name].value);
  var nameImage = getImage(Boolean(resultNameCheck), name);
  var labelNotifyName = getNotification(Boolean(resultNameCheck), name);
  document.getElementById(name).appendChild(nameImage);
  document.getElementById(name).appendChild(labelNotifyName);
}

function getNotification(bool, ID) {
  var label = document.getElementById("labelNotify" + ID);
  if (label == null) {
    label = document.createElement("LABEL");
    label.id = "labelNotify" + ID;
    // label.className = "errorMessage";
    label.setAttribute('class', 'errorMessage');
  }

  label.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters.";
  return label;
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

function nameCheck(name) {
  return (alphaNumCheck(name));
}

function alphaNumCheck(entry) {
  let regex = /^[a-z0-9]+$/i;
  if (entry != null && entry.match(regex)) {
    return true;
  } else {
    return false;
  }
}