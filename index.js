var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)}
  
function nowServing (katzDeliLine){
  	var firstInLine = katzDeliLine.shift()
  	if (katzDeliLine.length === 0) {return "There is nobody waiting to be served!"}
  if (katzDeliLine.length > 0) {return 	var firstInLine = katzDeliLine.shift()
		return "Currently serving " + firstInLine + "."
	}