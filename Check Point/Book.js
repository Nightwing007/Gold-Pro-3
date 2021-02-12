class Book
{
    constructor(x,y)
    {
        this.bookOnDeskImage = loadImage("Guide/book.png");
        this.bookIMG = loadImage("Guide/bookoopen2.png");

        this.x = x;
        this.y = y;

        this.font = loadFont("Font/pixelated.ttf");
    }
    display()
    {
        var offsety = 135;
        var offsetx = 180;
        if(book.x > 700)
        {
            push();
            textFont(this.font);
            translate(this.x,this.y);
            imageMode(RIGHT);
            image(this.bookIMG,0,-offsety,400,525);
            textSize();
            fill("black");
            text(rule,0+offsetx,10);
            pop();
        }
        else{
            push();
            translate(this.x,this.y)
            imageMode(CENTER);
            image(this.bookOnDeskImage,0,0,200,200)
            pop();
        }

    }
}