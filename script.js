function RPG() {
	let pwdlength = parseInt(
		prompt("How long do you want your password to be? Min 8 - Max 128")
	);

	while (pwdlength > 129 || pwdlength < 8 || isNaN(pwdlength)) {
		pwdlength = parseInt(prompt("Please choose password length from 8 to 128"));
	}

	let lowerCase, upperCase, numbers, specials;

	do {
		// ask user if they want lower case in their password
		do {
			lowerCase = parseInt(prompt("Do you want lower case? Yes: 1  No: 2"));
		} while ((lowerCase != 1 && lowerCase != 2) || isNaN(lowerCase));
		// ask user if they want upper case in their password
		do {
			upperCase = parseInt(prompt("Do you want upper case? Yes: 1  No: 2"));
		} while ((upperCase != 1 && upperCase != 2) || isNaN(upperCase));
		// ask user if they want numbers in their password
		do {
			numbers = parseInt(prompt("Do you want numbers? Yes: 1  No: 2"));
		} while ((numbers != 1 && numbers != 2) || isNaN(numbers));
		// ask user if they'd like special characters in password
		do {
			specials = parseInt(
				prompt("Do you want special characters? Yes: 1  No: 2")
			);
		} while ((specials != 1 && specials != 2) || isNaN(specials));
		// if user chooses no for each option, prompt them to choose at least one
		if (lowerCase === 2 && upperCase === 2 && numbers === 2 && specials === 2) {
			alert("Please choose at least one category.");
		}
	} while (
		lowerCase === 2 &&
		upperCase === 2 &&
		numbers === 2 &&
		specials === 2
	);

	let arrayStorage = [];
	let arrayDisplay = [];
	let char;
	let pwdnum;
	let specialChar;
	let alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	for (let i = 0; i < pwdlength; i++) {
		// Random alphabet selection
		let j = 0;

		if (lowerCase === 1 || upperCase === 1) {
			char = alphabet[Math.floor(Math.random() * alphabet.length)];

			if (lowerCase === 2) {
				char = char.toUpperCase();
			}

			if (lowerCase === 1 && upperCase === 1) {
				let decision = Math.floor(Math.random() * 2);

				if (decision === 1) {
					char = char.toUpperCase();
				}
			}

			// alert("This is the letter: " + char);

			// alert("This is alphabet count: " + j);

			arrayStorage[j] = char;
			j++;
		}
		// random number
		if (numbers === 1) {
			pwdnum = Math.floor(Math.random() * 10);
			// alert("number is: " + pwdnum);

			// alert("This is number count: " + j);

			arrayStorage[j] = pwdnum;
			j++;

			// alert("This is number count after +1: " + j);
		}

		// Random Special Character

		if (specials === 1) {
			let specialCharacter = " !”#$%&’()*+,-./:;<=>?@[]^_`{|}~";

			specialChar =
				specialCharacter[Math.floor(Math.random() * specialCharacter.length)];

			// alert("Special Character: " + specialChar);

			// alert("This is specialChar count: " + j);

			arrayStorage[j] = specialChar;
			j++;

			//  alert("This is specialChar count +1: " + j);
		}
		if (j <= 1) {
			j--;
			arrayDisplay[i] = arrayStorage[j];
		} else {
			arrayDisplay[i] = arrayStorage[Math.floor(Math.random() * j)];
		}

		// alert("character at: " + i + " is " + arrayDisplay[i]);
		// alert("End Count: " + j);
	}

	document.getElementById("Password").innerHTML =
		"This is your password: " + arrayDisplay.join("");
}
