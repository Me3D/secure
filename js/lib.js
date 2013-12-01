var encrypted;
var decrypted;
var message;
var password;

$("#password.form-control").keyup(function(){
	password = $("#password.form-control").val();
});


function encrypt() {
	
	password = $("#password").val();
	message = $("#message").val();

	console.log("Password: " + password);
	console.log("Message: " + message);

	if (password.length >=1 && message.length >=1 ) {    //only run if we have a key and atleast 1 charachter to encrypt
		//encrypt the message
		encrypted = CryptoJS.AES.encrypt(message, password);
		console.log("CipherText:"+encrypted.ciphertext.toString());
		$('#encrypted-message').html(encrypted.toString());
		$('#encrypted-message').css({"background-color" : "#f50"});
		$('#encrypted-message').css({"font-size" : "large"});
	}	
}//end encrypt

function decrypt() {
	
	password = $("#password").val();
	encrypted = $("#encrypted-text").val();

	
	console.log("Password: " + password);
	console.log("Encrypted: " + encrypted);
	
	if (password.length >=1 && encrypted.length >=1) {    //only run if we have a key and atleast 1 charachter to encrypt
				decrypted = CryptoJS.AES.decrypt(encrypted, password);
				console.log("PlainText:"+decrypted.toString(CryptoJS.enc.Utf8));
				var out = decrypted.toString(CryptoJS.enc.Utf8);
				out = out.replace(/(<([^>]+)>)/ig,"");
				$('#decrypted-message').html(out);
				$('#decrypted-message').css({"background-color" : "#000"});
				$('#decrypted-message').css({"color" : "green"});
				$('#decrypted-message').css({"font-size" : "large"});
	}
}