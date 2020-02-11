const encrypt = function(plaintext, key) {
  // IMPLEMENT ME
  let letterMap = {};
  let result = "";
  for (i = 97; i < 123; i++) {
    letterMap[i - 96] = String.fromCharCode(i);
  }
  letterMap["space"] = " ";

  const findKeyByValue = function(object, value) {
    for (const property in object) {
      if (object[property] === value) {
        return property;
      }
    }
  };
  for (const letter of plaintext) {
    let index = "";

    if (findKeyByValue(letterMap, letter) === "space") {
      index = "space";
    } else {
      index = Number(findKeyByValue(letterMap, letter)) + key;
    }

    if (index <= 0) {
      index += 26;
      result += letterMap[index];
    } else if (index > 26) {
      index -= 26;
      result += letterMap[index];
    } else {
      result += letterMap[index];
    }
  }

  return result;
};

module.exports = { encrypt };
