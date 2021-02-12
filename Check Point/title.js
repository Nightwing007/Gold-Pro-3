class title{
    constructor(x,y)
    {
        this.img = loadImage("Start/title.png");

        this.x = x;
        this.y = y;


        this.state = 0;
    }
    
    over() {
        if(mouseX > this.x -400 && mouseX < this.x +400 && mouseY > this.y -150 && mouseY  < this.y + 200) {
          return true;
        } 
        else {
          return false;
        }
      }
    
    display()
    {
        push();
        imageMode(CENTER);
        image(this.img,this.x,this.y,1980/2,1080/2);
        pop();

        if(dayOfWork === "STARTOUT")
        {
            if (this.over()) 
            {
                tint(204, 0, 128);
                this.state = 1;
              } 
            else {
                noTint();
                this.state = 0;
            }
        }
    }
}