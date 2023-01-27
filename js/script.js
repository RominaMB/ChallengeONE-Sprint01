const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function textValidate(){
    let writtenText = document.querySelector(".text-area").value;
    let validator = writtenText.match(/^[a-z]*$/);

    if(!validator || validator === 0) {
        alert("Only lowercase letters and no accents are allowed")
        location.reload();
        return true;
    }
}

function btnEncrypt() {
    if(!textValidate()) {   
        const encryptedText = encrypt(textArea.value)
        message.value = encryptedText
        textArea.value="";
        message.style.backgroundImage = "none";
    }
}

function encrypt(stringEncrypted) {
    let matCode = [["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncrypted = stringEncrypted.toLowerCase()

    for(let i = 0; i < matCode.length; i++){
        if(stringEncrypted.includes(matCode[i][0])){
            stringEncrypted = stringEncrypted.replaceAll(matCode[i][0], matCode[i][1])
        }
    }
    return stringEncrypted;
}

function btnDecrypt() {
    const decryptedText = decrypt(textArea.value)
    message.value = decryptedText
    textArea.value="";
}

function decrypt(stringDecrypted) {
    let matCode = [["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDecrypted = stringDecrypted.toLowerCase()

    for(let i = 0; i < matCode.length; i++){
        if(stringDecrypted.includes(matCode[i][1])){
            stringDecrypted = stringDecrypted.replaceAll(matCode[i][1], matCode[i][0])
        }
    }
    return stringDecrypted;
}

function copy(){
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Copied!");
}
