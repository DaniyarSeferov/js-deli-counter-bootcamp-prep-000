function takeANumber(katzDeliLine, name) {
  var position = checkPosition(katzDeliLine, name)
  
  if (position === 0) {
    katzDeliLine.push(name)
    //position = checkPosition(katzDeliLine, name)
    position = katzDeliLine.length
  }
  //console.log(position)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function checkPosition(katzDeliLine, name) {
  var position = 0;
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] == name) {
      position = i + 1
    }
  }
  return position
}

var katzDeliLine = ['Ada'];
console.log(takeANumber(katzDeliLine, "Ada"))