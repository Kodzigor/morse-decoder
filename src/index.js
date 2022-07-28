const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const morseKeys = Object.keys(MORSE_TABLE);
const morseValues = Object.values(MORSE_TABLE);

function decode(expr) {
  // write your solution here
  let finArr = [];
  let strArr = [];
  let arr = [];

  for (let i = 0; i < expr.length; i += 10) {
    let subStr = expr.slice(i, i + 10);
    let subArr = [];
    if (subStr !== "**********") {
      for (let i = 0; i < subStr.length; i += 2) {
        let subSubStr = subStr.slice(i, i + 2);
        if (subSubStr !== "00") {
          subArr.push([subSubStr]);
        }
      }
    } else {
      subArr.push([subStr]);
    }
    arr.push(subArr);
  }

  for (let el of arr) {
    for (let subEl of el) {
      for (let i = 0; i < subEl.length; i++) {
        subEl[i] === "11"
          ? (subEl[i] = "-")
          : subEl[i] === "10"
          ? (subEl[i] = ".")
          : (subEl[i] = " ");
      }
    }
    finArr.push(el.join(""));
  }

  for (let el of finArr) {
    if (el === " ") {
      strArr.push(el);
    } else {
      for (let i = 0; i < morseKeys.length; i++) {
        if (el === morseKeys[i]) {
          strArr.push(morseValues[i]);
        }
      }
    }
  }

  return strArr.join("");
}

module.exports = {
  decode,
};
