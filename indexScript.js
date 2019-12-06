const container=document.querySelector('#container');
 document.documentElement.style.setProperty('--size','16');
let size=document.documentElement.style.getPropertyValue('--size');
size=parseInt(size);

drawGrid();

function drawGrid(){
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            const cell=document.createElement('div');
            container.appendChild(cell);
            cell.setAttribute('passes',0);
           cell.style.color='white';
           cell.style.backgroundColor='black';
            cell.addEventListener('mouseover',()=>{
                onHover(cell);
            });
        }
    }    
}

function onHover(item){
    item.style.color='black';
   // item.style.backgroundColor='white';
   let passes=item.getAttribute('passes')
   passes=Number(passes);
   if(passes!=0){
    console.log(passes);
    passes++;
   }else{
    item.style.backgroundColor=randomColor();
    passes++;
    console.log('Else loop',passes);
    item.setAttribute('passes', passes);
   }
    //console.log(item.style.backgroundColor);
}
function onExit(item){

}
function randomColor(passes){
     let red=Math.floor(Math.random() * Math.floor(256)).toString();
     let green=Math.floor(Math.random() * Math.floor(256)).toString();
     let blue=Math.floor(Math.random() * Math.floor(256)).toString();
    
    
    let hue=Math.floor(Math.random() * Math.floor(361)).toString();
    let saturation=Math.floor(Math.random() * Math.floor(101)).toString();
    let light=Math.floor(Math.random() * Math.floor(101));//add blackness here
        light=light.toString();
    
    let rgb= 'rgb('+red+', '+green+', '+blue+')';
    //console.log(rgb);
    let hsl='hsl('+hue+', '+saturation+'%, '+light+'%)';
    //console.log(hsl);
    //light=blackness+Number(light);
    light=light.toString();
    return hsl;
   // return rgb;
}
const button=document.querySelector('#button')
button.addEventListener('click',function(){
     size=prompt("Size of rows/columns");
    let child=container.lastChild;
    while(child){
        container.removeChild(child);
        child=container.lastChild;
    } 
    size=Number(size);
    document.documentElement.style.setProperty('--size',size);
    drawGrid();
});

