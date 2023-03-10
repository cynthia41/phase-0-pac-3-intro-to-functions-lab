function shout(string) {
    return string;
}
"Hello!".toUpperCase(); // 'HELLO!'
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
 return string;
}
"HELLO!".toLowerCase(); // 'hello!'
function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase()) // 'HELLO'
  }
function logWhisper(string) {
    console.log(string.toLowerCase()) // 'hello'
}
function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello')
     return"I can\'t hear you!"
        else if (string === 'HELLO')
      return "YES INDEED!"
       else (string === "Let\'s have dinner together!")
       return "I would love to!"
  }
