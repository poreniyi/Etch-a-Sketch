const container=document.querySelector('#container');
let cellArray=[];
let rowArray=[];
container.style.display='grid';
//document.documentElement.style.setProperty('--size','16');
container.style['grid-template-columns']='repeat(16, 1fr)';
container.style['grid-template-rows']='repeat(16, 60px)';
//container.style['grid-template-rows']='repeat(auto-fit, minmax(10px, 1fr))';
//container.style['grid-template-columns']='repeat(auto-fit, minmax(10px, 1fr) )';

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
let black=0;
function onHover(item){
    item.style.color='black';
   // item.style.backgroundColor='white';
    //item.style.backgroundColor="rgb(155, 102, 102)"; 
    item.style.backgroundColor=randomColor(); 
}
function onExit(item){

}
function randomColor(){
     let red=Math.floor(Math.random() * Math.floor(256)).toString();
     let green=Math.floor(Math.random() * Math.floor(256)).toString();
     let blue=Math.floor(Math.random() * Math.floor(256)).toString();
    //console.log(red,green,blue);
    
    let hue=Math.floor(Math.random() * Math.floor(361)).toString();
    let saturation=Math.floor(Math.random() * Math.floor(101)).toString();
    let light=Math.floor(Math.random() * Math.floor(101)).toString();
    
    let rgb= 'rgb('+red+', '+green+', '+blue+')';
    let hsl='hsl('+hue+', '+saturation+'%, '+light+'%)';
    console.log(hsl);
    return hsl;
    return rgb;
}
console.log(cellArray);
