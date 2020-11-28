class Plinko
{
    constructor(x,y,r)
    {
        var options={
            isStatic:true
         }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }
    display()
    {
    var paperpos=this.body.position;

    push()
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill("white");
    ellipse(paperpos.x,paperpos.y,this.r,this.r);
    pop()

    }
   
    
    
    
}
