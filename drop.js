class Drop{

    constructor(x,y)
    {
        var options = {
            'friction' : 0.1,
            'isStatic' : false
        }
        this.x = x;
        this.y= y;
        this.radius = 5;
        this.rain = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.rain);






    }

    display()
    {

        var position = this.rain.position;

        noStroke();
        fill(0,0,255);
        //fill(random(0,255),random(0,100),random(255));
        
        ellipse(position.x,position.y,5);


    }

        
    update()
    {
        if(this.rain.position.y > height)
        {
            Matter.Body.setPosition(this.rain,{x : random(0,400), y : random(0,400)});
        }

    }















}