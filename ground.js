class Ground{
constructor(x,y,w,h){
this.x=x
this.y=y
this.w=w
this.h=h
var ground_options={
    isStatic:true
}
this.ground=Bodies.rectangle(this.x,this.y,this.w,this.h,ground_options)
World.add(world,this.ground)
}
display(){
rect(this.ground.position.x,this.ground.position.y,this.w,this.h)
}


}