class Bribe
{
    constructor(x,y){
        this.result = "";
        this.convincer = "";
        this.convincerIndex = 0;
        this.yes = createButton("yes");
        this.no = createButton("no");


        this.yes.position(800,300);
        this.no.position(850,300);
        this.state = 0;

        this.yes.hide();
        this.no.hide();
    }

    convince()
    {
        var chance = Math.round(random(1,8));
        switch(chance)
        {
            case 1 : this.result = "go away";
            break;
            case 2 : this.result = "bribe";
            break;
            case 3 : this.result = "go away";
            break;
            case 4 : this.result = "bribe";
            break;
            case 5 : this.result = "bribe";
            break;
            case 6 : this.result = "go away";
            break;
            case 7 : this.result = "go away";
            break;
            case 8 : this.result = "go away";
            break;
        }

        if(this.result === "go away")
        {
            this.convincer = "";
        }

        if(this.result === "bribe")
        {
            // if(form.gender = "M" && form.age <= 45 && form.age >= 20)
            // {
                var convincerp1 = Math.round(random(1,7));
                switch(convincerp1)
                {
                    case 1 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
                    break;
                    case 2 : this.convincer = "Please, don't I have to meet my\n family.";this.convincerIndex = 2;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
                    break;
                    case 3 : this.convincer = "Please, don't I have to meet my\n family.";this.convincerIndex = 2;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
                    break;
                    case 4 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
                    break;
                    case 5 : this.convincer = "Don't you dare I will kill you."; this.convincerIndex = 3;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
                    break;
                    case 6 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
                    break;
                    case 7 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
                    break;
                }
            // }

            // if(form.gender = "F" && form.age <= 45 && form.age >= 20)
            // {
            //     var convincerp2 = Math.round(random(1,7));
            //     switch(convincerp2)
            //     {
            //         case 1 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
            //         break;
            //         case 2 : this.convincer = "Please, don't I have to meet my\n family.";this.convincerIndex = 2;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
            //         break;
            //         case 3 : this.convincer = "Please, don't I have to meet my\n family.";this.convincerIndex = 2;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
            //         break;
            //         case 4 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
            //         break;
            //         case 5 : this.convincer = "PLease, let me through I have \n to meet my husband."; this.convincerIndex = 3;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
            //         break;
            //         case 6 : this.convincer = "Please, I am being treated badly \nby my land lords. I have to cross\n the border";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
            //         break;
            //         case 7 : this.convincer = "Please, my father's health has \ngot worst there no one with \nhim. ";this.convincerIndex = 1;this.yes.show();this.no.show();this.state = 0;nextVisible = 1;
            //         break;
            //     }
            // }
        }
    }

    display()
    {
        console.log("bribe"+this.result);
        console.log("bribe" + this.convincer);
        if(this.state === 0)
        {
            push();
            fill("white");
            textSize(15);
            text(this.convincer,450,240);
            pop();
        }
        
        if(this.convincerIndex === 1)
        {
            this.yes.mousePressed(()=>
            {
                var bribe = Math.round(random(4,10));
                money += bribe;
                this.yes.hide();
                this.no.hide();
                var chance = Math.round(random(1,3));
                switch(chance)
                {
                    case 1 : Caught += 1;
                    break;
                    case 2 : Caught = Caught;
                    break;
                    case 3 : Caught += 1;
                }
                this.state = 1;
            });
            this.no.mousePressed(()=>
            {
                this.yes.hide();
                this.no.hide();
                this.state = 1;
            });
        }


        if(this.convincerIndex === 2|| this.convincerIndex === 3)
        {
            this.yes.mousePressed(()=>
            {
                this.yes.hide();
                this.no.hide();
                this.state = 1;
            });
            this.no.mousePressed(()=>
            {
                this.yes.hide();
                this.no.hide();
                var stressI = Math.round(random(7,20));
                var chance = Math.round(random(1,3));
                switch(chance)
                {
                    case 1 : stress += stressI;
                    break;
                    case 2 : stress = stress;
                    break;
                    case 3 : stress += stress;
                    break;
                }
                this.state = 1;
            });
        }
        console.log("next " + nextVisible);
        console.log("stress " + stress);
    }
}