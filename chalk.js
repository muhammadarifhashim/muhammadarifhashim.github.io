
function Chalk(x,y){
    this.x = x 
    this.y = y
    this.show = function(){
        image(chalkbulletimg, 
              this.x, 
              this.y, 
              chalkbulletimg.width/40, chalkbulletimg.height/40)
    }
    this.move = function(){
        this.x = this.x+1
    }
}