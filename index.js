function isPalindrome(word) {
  // Write your algorithm here
  //word = word.replace(/\w/g, "");
  //word = word.toLowercase();
  return word === word.split("").reverse().join("");

}

/* 
  Add your pseudocode here
  return the words if the words are the same both backwards and forwards
*/

/*
  Add written explanation of your solution here

  We needed to see if these words were the same in reverse. So by reversing each string and seeing if they were
  the same forward, we needed to use .reverse to check. .split was used just in case it was a phase and join was used
  to make sure it was b roght together so that we have all bases covered
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
