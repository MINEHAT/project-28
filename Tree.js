class Tree{

    constructor(x,y,width,height){

        var options ={

            isSratic:true
            //'restitution': 0.7,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/tree.png");
       // this.image = this.body;

        World.add(world,this.body);
    }

    display(){
        
       
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        image(this.image,606,315,200,this.height);
        pop()
    }
}