const canvas = document.getElementById('canvas1')
const ctx= canvas.getContext('2d')
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;
const colors=[
'white',
'rgba(9,9,9,0.3)',
'rgba(90,90,90,0.3',
'rgba(200,199,100,0.3',
'rgba(100,200,150,0.3'

]
let particleArray=[];
const maxSize=40;
const minSize=0;
const mouseRadius=60;
let mouse={
    x:null,
    y:null
}



function particle(x,y,directionX,directionY,size,color){
    this.x=x;
    this.y=y;
    this.directionX=directionX;
    this.directionY=directionY;
    this.size=size;
    this.color=color;
}

particle.prototype.draw=function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ctx.fillStyle=this.color;
    ctx.fill();
}
particle.prototype.update=function(){
    // if(this.size< maxSize){
    //     this.size+=5
    // }if(this.size > minSize){
    //     this.size-=2
    // }
    this.x+=this.directionX;
    this.y+=this.directionY;
 
    this.draw()
}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0;i<particleArray.length;i++)
    {
        particleArray[i].update();
    }
}
window.addEventListener('mousemove',function(e){
    mouse.x=e.x;
    mouse.y=e.y;
    let x= mouse.x;
    let y = mouse.y;
    let directionX=(Math.random() * 0.2) -0.1;
    let directionY= (Math.random() * 0.2) - 0.1;
    let size = Math.random()*40;
    let color = colors[Math.floor(Math.random()*colors.length)];
    particleArray.push(new particle(x,y,directionX,directionY,size,color))
})
animate()









