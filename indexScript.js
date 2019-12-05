const container=document.querySelector('#container');
let cellArray=[[]];
let rowArray=[];
container.style.display='grid';
//document.documentElement.style.setProperty('--size','16'); //this doesn't work either
container.style['grid-template-columns']='repeat(16, 1fr)';
container.style['grid-template-rows']='repeat(16, 60px)';


for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        const cell=document.createElement('div');
       // cell.textContent="I'm cell#("+i+'/'+j+')';
        //cellArray[i].push(cell);// this doesn't work I get an error starting at i=1
        cellArray[i]=cell;
        container.appendChild(cell);
        cell.setAttribute('passes',0);
       cell.style.color='white';
       cell.style.backgroundColor='black';
        cell.addEventListener('mouseover',()=>{
            onHover(cell);
        });
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
    //
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

console.log(cellArray);
cellArray.forEach(element => {
    let pass=element.getAttribute('passes');
    console.log(typeof pass);
});