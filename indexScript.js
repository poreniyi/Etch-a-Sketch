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
            cell.addEventListener('click',()=>{
                cell.setAttribute('passes', '0');
                cell.style.backgroundColor='black';
            });
        }
    }    
}

function onHover(item){
    item.style.color='black';
   let passes=item.getAttribute('passes')
   if(passes==0){
    item.style.backgroundColor=randomColor();
    passes++;
    item.setAttribute('passes', passes);
   }
   let color=item.style.backgroundColor;
   passes=Number(passes);
   if(passes!=0 && passes<10){ 
    console.log(passes);
    item.style.backgroundColor=blackness(color);
    passes++;
    item.setAttribute('passes', passes);
   }else{
       item.style.backgroundColor='black';
   }
    console.log(item.style.backgroundColor);
}
function randomColor(){
     let red=Math.floor(Math.random() * Math.floor(256)).toString();
     let green=Math.floor(Math.random() * Math.floor(256)).toString();
     let blue=Math.floor(Math.random() * Math.floor(256)).toString();
    
    
    let hue=Math.floor(Math.random() * Math.floor(361)).toString();
    let saturation=Math.floor(Math.random() * Math.floor(101)).toString();
    let light=Math.floor(Math.random() * Math.floor(101));
        light=light.toString();
    
    let rgb= 'rgb('+red+', '+green+', '+blue+')';
    //console.log(rgb);
    let hsl='hsl('+hue+', '+saturation+'%, '+light+'%)';
    //console.log(hsl);
    light=light.toString();
   // return hsl;
    return rgb;
}
const button=document.querySelector('#button')
button.addEventListener('click',function(){
    do{
     size=prompt("Enter a new Size of rows/columns");
    }while(isNaN(size));
    let child=container.lastChild;
    while(child){
        container.removeChild(child);
        child=container.lastChild;
    } 
    size=Number(size);
    document.documentElement.style.setProperty('--size',size);
    drawGrid();
});
 function blackness(color){
    let reg= /\d+/g;
   let result=color.match(reg);
    let red=parseInt(result[0])*.9.toString();
    let green=parseInt(result[1])*.9.toString();
    let blue=parseInt(result[2])*.9.toString();
    color='rgb('+red+', '+green+', '+blue+')';
    console.log('The Blackness color is:',color);
   return color;
 }
