const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function btnEncrypt() {
    const encryptedText = encrypt(textArea.value)
    message.value = encryptedText
    textArea.value="";
    message.style.backgroundImage = "none";
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
    var content = document.querySelector(".message");
    content.select();
    document.execCommand("copy");
    alert("Copied!");
 
 }