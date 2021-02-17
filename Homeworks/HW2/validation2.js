function validateAll() {
    validateEmail();
    validatePhone();
    validateAddress();
}

function validateEmail() {
    var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
    var image1 = getImage(Boolean(resultEmailCheck), "email");
    var labelNotifyEmail1=getEmailNotification(Boolean(resultEmailCheck), "email") ;
    document.getElementById("email").appendChild(image1);
    document.getElementById("email").appendChild(labelNotifyEmail1);
}

function validatePhone() {
    var resultPhoneCheck = phoneCheck(document.forms["contact information"]["phone"].value);
    var image1 = getImage(Boolean(resultPhoneCheck), "phone");
    var labelNotifyPhone=getPhoneNotification(Boolean(resultPhoneCheck), "phone") ;
    document.getElementById("phone").appendChild(image1);
    document.getElementById("phone").appendChild(labelNotifyPhone);
}

function validateAddress() {
    var resultAddressCheck = addressCheck(document.forms["contact information"]["address"].value);
    var image1 = getImage(Boolean(resultAddressCheck), "address");
    var labelNotifyAddress=getAddressNotification(Boolean(resultAddressCheck), "address") ;
    document.getElementById("address").appendChild(image1);
    document.getElementById("address").appendChild(labelNotifyAddress);
}

function getEmailNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Must be in the form xxx@xxx.xxx x should be alphanumeric (e.g. no special symbols).";
    return label;
}

function getPhoneNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Must be in the form xxx-xxx-xxxx or xxxxxxxxxx. x should be numeric";
    return label;
}

function getAddressNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Must be in the form of city & state. example: Ames,IA";
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

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    return false;
}

function phoneCheck(phone) {
    atSplit = phone.split('-');
    if (atSplit.length == 3 && numCheck(atSplit[0] + atSplit[1] + atSplit[2]) && (atSplit[0].length + atSplit[1].length + atSplit[2].length) == 10) {
        return true;
    } else if (phone.length == 10 && numCheck(phone)) {
        return true;
    }
    return false;
}

function addressCheck(phone) {
    atSplit = phone.split(',');
    if (atSplit.length == 2 && alphaCheck(atSplit[0] + atSplit[1]) && atSplit[1].length == 2) {
        return true;
    }
    return false;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function numCheck(entry) {
    let regex = /^[0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function alphaCheck(entry) {
    let regex = /^[a-zA-Z]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}