const container=document.querySelector('.container')
container.style.display='flex'
container.style.flexDirection='row'
container.style.gap='0'




const button= document.querySelector('button')
button.style.height='60px'
button.style.width='250px'

button.style.fontSize='20px'


let horizontalGrid
let verticalGrid
button.addEventListener('click', () => {
     horizontalGrid = parseInt (prompt('Enter the number of horizontal grid lines:'));
     verticalGrid = parseInt(prompt('Enter the number of vertical grid lines:'));


if (verticalGrid>100 || horizontalGrid>100) {  alert("The maximum grid side are 100")}
else{ 
    container.innerHTML = ''
    Etch(horizontalGrid,verticalGrid)}

})

function Etch(horizontalGrid,verticalGrid) {
    


for (let row = 1; row <=horizontalGrid; row++) {
    const newRow= document.createElement('div')
   
    
    
    newRow.style.display = 'flex';
    newRow.style.flexDirection='column'

    container.appendChild(newRow)



    for (let col = 1; col <=verticalGrid; col++) {

     const newDiv= document.createElement('div')

     newDiv.style.border='1px solid'
     newDiv.style.padding = '10px';
     newDiv.style.width = '30px';
     newDiv.style.height = '30px';

     


newDiv.addEventListener('mouseover', () => {
    newDiv.style.backgroundColor = 'lightgreen';})

    

    newRow.appendChild(newDiv)  

}

}
}



