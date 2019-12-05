const container=document.querySelector('#container');
let cellArray=[];
container.style.display='grid';
container.style['grid-template-columns']='repeat(16, 100px)';
container.style['grid-template-rows']='repeat(16, 60px)';

for(let i=0;i<16;i++){
    const cell=document.createElement('div');
    for(let j=0;j<16;j++){
        cell.textContent="I'm cell#("+i+'/'+j+')';
        cellArray[i]=cell;
        container.appendChild(cell);
        cell.style['grid-column']= i/j;
        cell.style.color='white';
        cell.style.backgroundColor='black';
        //cell.setAttribute(':hover')
       // cell.style[':hover']=cell.style.backgroundColor='white';
    }
    // cell.textContent='Im cell #'+i;
    // cellArray[i]=cell;
    // container.appendChild(cell);
}
for(let i=0;i<cellArray.length;i++){
    cellArray[i].addEventListener('mouseover',()=>{
        onHover(cellArray[i]);
    });
    cellArray[i].addEventListener('mouseover',()=>{
        onHover(cellArray[i]);
    });
console.log('This is#',i,cellArray[i]);
}
function onHover(item){
    item.style.color='black';
    item.style.backgroundColor='white';
}
function onExit(item){
    
}
//console.log(cellArray);