const wordSearch = (letters, word) => {
  let isPresent = false;

  const horizontalJoin = letters.map((ls) => ls.join(""));

  //console.log(horizontalJoin);
  for (l of horizontalJoin) {
    const revl = l.split("").reverse().join("");
    //console.log(rev1);
    if (l.includes(word) || revl.includes(word)) {
      isPresent = true;
    }
  }
  return isPresent;
};

const wordtest = [
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
];
wordSearch(wordtest, "FRANK");
wordSearch(wordtest, "SEINFELD");
module.exports = wordSearch;
