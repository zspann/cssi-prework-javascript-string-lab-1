function encode(userString){

  userString = userString.toLowerCase().replace(/a/g, "4").replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/ /g, "$")

  return userString
}
