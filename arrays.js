var chocolateBars =[
  'snickers', 'hundred grand', 'kitkat', 'skittles'];
  
function addElementToBeginningOfArray(array,newElement) {
   return [newElement, ...array]
 }
 
 function destructivelyAddElementToBeginningOfArray(array,newElement) {
   array.unshift(newElement)
   return array
 }
 
 function addElementToEndOfArray (array,newElement){
   return [...array, newElement]
 }
 
 function destructivelyAddElementToEndOfArray(array,newElement){
   array.push(newElement)
   return array}
   
function accessElementInArray(array, index){
 return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shrft()
  return array
}