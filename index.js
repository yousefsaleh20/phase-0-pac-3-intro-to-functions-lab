function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
    console.log(shout(string));
    return shout(string);
  }

  function logWhisper(string) {
    console.log(whisper(string));
    return whisper(string);
  }

  function sayHiToHeadphonedRoommate(string){
if(string === logWhisper(string)){
    return "I can't hear you!";
}
    if (string === logShout(string)) {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }

  }