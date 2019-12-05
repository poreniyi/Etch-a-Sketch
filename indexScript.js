const container=document.querySelector('#container');
let cellArray=[];
let rowArray=[];
container.style.display='grid';
//document.documentElement.style.setProperty('--size','16');
container.style['grid-template-columns']='repeat(16, 115px)';
container.style['grid-template-rows']='repeat(16, 60px)';

for(let i=1;i<17;i++){
    for(let j=1;j<17;j++){
        const cell=document.createElement('div');
       // cell.textContent="I'm cell#("+i+'/'+j+')';
        cellArray[i-1]=cell;
        container.appendChild(cell);
        //cell.style['grid-column']= i/j;
       // cell.style['grid-row']=i/i+1;
       // cell.style['grid-area']=i/j;
       cell.style.color='white';
       cell.style.backgroundColor='black';
        cell.addEventListener('mouseover',()=>{
            onHover(cell);
        });
    }
}

function onHover(item){
    item.style.color='black';
    item.style.backgroundColor='white';
    item.style.backgroundColor="rgb(155, 102, 102)"; 
}
function onExit(item){

}
