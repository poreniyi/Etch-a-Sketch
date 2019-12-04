const container=document.querySelector('#container');
let cellArray=[];
for(let i=0;i<16;i++){
    const cell=document.createElement('div');
    cell.textContent='Im cell #'+i;
    cellArray[i]=cell;
    container.appendChild(cell);
}
console.log(cellArray);