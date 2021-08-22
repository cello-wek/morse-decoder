const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	if (expr.length % 10 !== 0) {
		return false;
	}
	let arr = [];
	let decodeSymb;
	let morseDecode = [];
	for (let i = 0; i < expr.length; i += 10) {
		const morseSubstr = expr.substring(i, i + 10);
		if( morseSubstr === "**********"){
			morseDecode.push(' ');
		}
		for (let j = 0; j < morseSubstr.length; j += 2) {
			const subSubstring = morseSubstr.substring(j, j + 2);
			if (subSubstring.includes('00')) {
				arr.push('');
			};
			if (subSubstring.includes('10')) {
				arr.push('.');
			}
			if (subSubstring.includes('11')) {
				arr.push('-');
			}
		}
			decodeSymb = arr.join('');
			arr = [];
		for (let i in MORSE_TABLE) {
			if (i === decodeSymb) {
				morseDecode.push(MORSE_TABLE[i]);
				decodeSymb = '';
			}
		}
	}
	console.log(morseDecode.join(''));
	return morseDecode.join('');
}

module.exports = {
    decode
}