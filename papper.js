class papper {
constructor(x,y,r) {

var op = {
  'restitution':0.3,
 'friction':0.5,
 'density':1.2
  

}
this.body=Bodies.circle(x,y,r,op);
this.r = r;
World.add(world,this.body)
}

display() {
  
  ellipse(this.body.position.x, this.body.position.y,this.r)
  console.log(this.body.position.x)





}






}