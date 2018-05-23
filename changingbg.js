var r =0 ; 
var p = 1; 
function setup() { 
  createCanvas(600, 400);
   
  
  
} 

function draw() { 
  background(r,0,0)  
//    frameRate(10);
//    r = r +1 
while (r < 255){
       r= r +0.1  
    }
  
////    r = r+p
//   if (r <255 && p == 1){
//      r= r + p   
//       }
//    else if (r == 255){
//        p = 2
//    } else {
//        p--
//    }
    
    
//    if (r==0){
//        p=1
//    }
    console.log(r)
   console.log(p)
   
}