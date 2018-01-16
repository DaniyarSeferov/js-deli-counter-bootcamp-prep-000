function takeANumber(katzDeliLine, name) {
  var position = 0;
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] == name) {
      position = i + 1
    }
  }
  if (position === 0) {
    
  }
  //console.log(position)
  return `Welcome, ${name}. You are number ${position} in line.`
}

var katzDeliLine = ['Ada'];
console.log(takeANumber(katzDeliLine, "Ada"))