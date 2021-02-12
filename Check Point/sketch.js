var form;
var table,workDesk;

var rule;

var approved,denied,next;

var date;

var action,wrong=0,right = 0;

var dayOfWork = "STARTOUT";

var money = 0;

var bribe,Caught = 0;


var finaltime,counter=0,timeleft = 180;

var nextVisible = 0;

var stress = 0;

var frames = 75;


function preload()
{
  deskIMg = loadImage("Desk/table.png");
  upperIMG = loadImage("Desk/table3.png");
  workIMG = loadImage("Desk/table2.png");
  Pfont = loadFont("Font/pixelated.ttf");
  theme = loadSound("Sounds/Theme.ogg");
}
function setup() {
  createCanvas(1400,800);
  table = createSprite(350,645);
  table.addImage(deskIMg);
  table.scale = 0.35;
  workDesk = createSprite(1050,505,710,600);
  workDesk.scale = 1.2;
  workDesk.shapeColor = rgb(62,46,28);
  workDesk.addImage(workIMG);

  upper = createSprite(700,78,710,600);
  upper.addImage(upperIMG);
  upper.scale = 0.8;
  upper.shapeColor = rgb(62,46,28);
  form = new Passport(70,550);
  form.decide();

  denied = createButton("DENIED");
  accept = createButton("APPROVED");
  next = createButton("NEXT");
  setInterval(timer,1000);
  book = new Book(100,750);

  bribe = new Bribe(400,400);

  face = new Face(350,340,0.25);
  face.face();

  title1 = new title(700,-100);
  theme.play();
}

function draw() {
  console.log(dayOfWork);
  Accept_Denied();

  title1.display();
  if(dayOfWork === "STARTOUT")
  {
    background(0);  
    title1.display();
    var down = 0;
    if(frameCount % frames === 0 && title1.y < 400 && down === 0)
    {
      title1.y += 50;
      console.log("aage");
      if(title1.y === 400)
      {
        down = 1;
      }
    }

    if(title1.y === 400)
    {
      console.log("uparniche");
      down = 1;
      console.log(down)
    }
  }
  if(dayOfWork === "DAY1")
  {
    background(30);  
    textFont(Pfont);
    date = "13th NOVEMBER,1983"
    rule = "1.Passport should be correct.\n(check the letter)\n2.They should be only from \nfollowing country -\n 1.BURYAT\n2.KHAKASS\n3.DAGESTAN"

    if(keyWentDown("space"))
    {
      form.decide();
      form.state = 0;
    }
    bribe.display();
    drawSprites();
    nextF()
    fill("black");
    push();
    textSize(25);
    text("$"+ money,1250,50);
    text(convert(timeleft - counter),1250,100);
    text("Caught: " + Caught,1250,150);
    pop();
    push();
    textSize(40);
    text(date,40,100);
    pop();
    face.display();
    if(form.fstate === 0)
    {
      form.display();
    }
    book.display();
    if((counter -timeleft) >= 0)
    {
      text("gameOver",40,40);
    }

    if(form.state === 1)
    {
      if(form.x < 400 && form.x > 300 && form.y < 500 && form.y > 200)
      {
        nextVisible = 0;
        form.fstate = 1;
      }
    }
  }
}

function mouseClicked()
{
  if(title1.state === 1)
  {
    dayOfWork = "DAY1";
    timeleft = 180;
  }
}


function mouseDragged(){
  if(mouseX <= form.x + 50 && mouseX >= form.x - 50 && mouseY <= form.y + 50 && mouseY >= form.y - 50)
  {
    if(mouseY >220)
   {
    form.x = mouseX;
    form.y = mouseY;
   }
  }
  else if(mouseX <= book.x + 100 && mouseX >= book.x - 100 && mouseY <= book.y + 100 && mouseY >= book.y - 100)
  {
    if(mouseY >220)
   {
    book.x = mouseX;
    book.y = mouseY;
   }
  }
  
}

function Accept_Denied()
{
  denied.position(1500,810);
  denied.style('background-color',"red");
  denied.style('font-size','20px');
  accept.position(1300,810);
  accept.style('background-color',"green");
  accept.style('font-size','20px');

  if(form.x < 700)
  {
    accept.hide();
    denied.hide();
  }
  else
  {
    if(form.state === 1)
    {
      denied.hide();
      accept.hide();
    }
  
    if(form.state === 0)
    {
      denied.show();
      accept.show();
    }
  
    console.log("Wrong" + wrong)
    console.log("Right"+right);
  
    accept.mousePressed(()=>{
      action = "Approved"
      nextVisible = 1;
      if(form.state === 0)
      {
        if(form.result != "Approved")
        {
          wrong += 1;
          form.state = 1;
          if(wrong >2)
          {
            money-=4
          }
        }
        if(form.result === "Approved")
        {
          right += 1;
          form.state = 1;
          money += 2;
        }
      }
    })
  
    denied.mousePressed(()=>{
      action = "Approved"
      nextVisible = 1;
      if(form.state === 0)
      {
        if(form.result != "Denied")
        {
          wrong += 1;
          form.state = 1;
          if(wrong >2)
          {
            money-=4
          }
          bribe.convince();
        }
        if(form.result === "Denied")
        {
          right += 1;
          form.state = 1;
          money += 2;
          bribe.convince();
        }
      }
    })
  }
}

function timer()
{
  counter ++;
}
function convert(s)
{
  min = floor(s/60);
  sec = s % 60;
  return nf(min,2) + ":" + nf(sec,2) ;
}

function nextF()
{
  next.position(1400,810);
  next.style('background-color',"blue");
  next.style('font-size','20px');

  if(nextVisible === 1)
  {
    next.hide();
  }
  else 
  {
    next.mousePressed(()=>
    {
      form.decide();
      form.state = 0;
      face.face();
      form.fstate = 0;
      form.x = 70;
      form.y = 550;
    });
  
    if(form.state === 0)
    {
      next.hide();
    }
  
    if(form.state === 1)
    {
      next.show();
    }
  }
}