function shout (inputString) {
  var upperCase = inputString.toUpperCase()
  return upperCase
}

console.log(shout('hello'))

function whisper (inputString) {
  var lowerCase = inputString.toLowerCase()
  return lowerCase
}

console.log(whisper('HELLO'))

function logShout (inputString) {
  const upperCaseString = inputString.toUpperCase()
  console.log(upperCaseString)
}

logShout('hello')

function logWhisper (inputString) {
  let lowerCaseString = inputString.toLowerCase()
  console.log(lowerCaseString)
}

logWhisper('HELLO')

function sayHiToHeadphonedRoommate(string){
  if(string === string.toLowerCase()){
    return "I can\'t hear you!"
  } else if (string === string.toUpperCase()){
    return "YES INDEED!"
  } else if(string === "Let's have dinner together!"){
    return "I would love to!"
  } else {
    return "What did you say?"
  }
}