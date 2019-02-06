var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)}
  
function nowServing (katzDeliLine){
  	var firstPersonInLine = katzDeliLine.shift()
  	if (katzDeliLine.length === 0) {return "There is nobody waiting to be served!"}
  if (katzDeliLine.length > 0) {return (`Currently serving ${firstPersonInLine}.`)
	}
}

function currentLine(katzDeliLine){
   	if (katzDeliLine.length === 0) {return "The line is currently empty."}
var daniel
for(var i=0; i<katzDeliLine.length; i++){
      katzDeliLine += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    return katzDeliLine.slice(0, katzDeliLine.length-2);
}