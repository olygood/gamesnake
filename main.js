console.log('hello le snake');

window.onload = function(){
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "4px solid black";
    canvas.className = "canva1"; 
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#EB3630"; 
    ctx.fillRect(30,30,100,50);
}
