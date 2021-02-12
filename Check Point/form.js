class Passport
{
    constructor(x,y)
    {
        this.name = "";
        this.surname = "";
        this.age;
        this.gender = "";
        this.literacy = "";
        this.country = "";
        this.dateOfBirthY;
        this.x = x;
        this.y = y;
        this.dateOfBirthD;
        this.dateOfBirthM;
        this.ExpiryYear;
        this.iss = "";


        this.passportID = "";
        this.passportOnDeskImage = loadImage("PassPort/Passportdesk.png");
        this.passportIMG = loadImage("PassPort/PassPort.png");

        this.font = loadFont("Font/pixelated.ttf");

        this.faceIndex;

        this.result;
        this.state = 0;

        this.fstate = 0;

    }

    decide()
    {
        var gender = Math.round(random(1,5));
        switch(gender)
        {
            case 1 : this.male();
            break;
            case 2 : this.female();
            break;
            case 3 : this.male();
            break;
            case 4 : this.female();
            break;
            case 5 : this.male();
            break;
        }

        this.age = Math.round(random(17,60));
        var country = Math.round(random(1,9));

        switch(country)
        {
            case 1 : this.country = "BURYAT";
            break;
            case 2 : this.country = "CHUVASH";
            break;
            case 3 : this.country = "KHAKASS";
            break;
            case 4 : this.country = "MORDOVIA";
            break;
            case 5 : this.country = "LATVIA";
            break;
            case 6 : this.country = "UKRAINE";
            break;
            case 7 : this.country = "KYRGYZSTAN";
            break;
            case 8 : this.country = "DAGESTAN";
            break;
            case 9 : this.country = "";
        }

        var surname  = Math.round(random(1,25));
            switch(surname)
            {
                case 1 : this.surname = "TURGENEV";
                break;
                case 2 : this.surname = "LEBEDEV";
                break;
                case 3 : this.surname = "IVANOV";
                break;
                case 4 : this.surname = "PREOBRAZHENSKY";
                break;
                case 5 : this.surname = "LEGASOV";
                break;
                case 6 : this.surname = "SHCHERBINA";
                break;
                case 7 : this.surname = "TUPTONOV";
                break;
                case 8 : this.surname = "AKIRMOV";
                break;
                case 9 : this.surname = "PUTIN";
                break;
                case 10 : this.surname = "KHOMYUK";
                break;
                case 11 : this.surname = "MOROZOV";
                break;
                case 12 : this.surname = "FROLOV";
                break;
                case 13 : this.surname = "STEPANOV";
                break;
                case 14 : this.surname = "MOROZOV";
                break;
                case 15 : this.surname = "ORLOV";
                break;
                case 16 : this.surname = "VOROBEV";
                break;
                case 17 : this.surname = "PAVLOV";
                break;
                case 18 : this.surname = "NIKITIN";
                break;
                case 19 : this.surname = "KUZNETSOV";
                break;
                case 20 : this.surname = "EGOROV";
                break;
                case 21 : this.surname = "STEPANOV";
                break;
                case 22 : this.surname = "FEDOROV";
                break;
                case 23 : this.surname = "PUSHKIN";
                break;
                case 24 : this.surname = "KISELEV";
                break;
                case 25 : this.surname = "MIKHAILOV";
                break;
            }

        this.dateOfBirthY = 1983 - this.age;
        this.dateOfBirthD = Math.round(random(1,30));
        this.dateOfBirthM = Math.round(random(1,12));

        var expiry = Math.round(random(1,6));
        switch(expiry)
        {
            case 1 : this.ExpiryYear = Math.round(random(1983,1986));
            break;
            case 2 : this.ExpiryYear = Math.round(random(1983,1986));
            break;
            case 3 : this.ExpiryYear = Math.round(random(1983,1986));
            break;
            case 4 : this.ExpiryYear = Math.round(random(1983,1986));
            break;
            case 5 : this.ExpiryYear = Math.round(random(1979,1982));
            break;
            case 6 : this.ExpiryYear = "";
            break;
        }

        var iss = Math.round(random(1,50));
        switch(iss)
        {
            case 1 : this.iss = "Ulyalsk";
            break;
            case 2 : this.iss = "Vsevobirsk";
            break;
            case 3 : this.iss = "Kurkassk";
            break;
            case 4 : this.iss = "Timaprudny";
            break;
            case 5 : this.iss = "Neryutov";
            break;
            case 6 : this.iss = "Chelyapeysk";
            break;
            case 7 : this.iss = "Novomopyevsk";
            break;
            case 8 : this.iss = "Arzayarsk";
            break;
            case 9 : this.iss = "Zhukoprudny";
            break;
            case 10 : this.iss = "Yekagodonsk";
            break;
            case 11 : this.iss = "Nizhneski";
            break;
            case 12 : this.iss = "Grosinsk";
            break;
            case 13 : this.iss = "Khababirsk";
            break;
            case 14 : this.iss = "Yessekhtinsk";
            break;
            case 15 : this.iss = "Uzlopovets";
            break;
            case 16 : this.iss = "Zhelebirsk";
            break;
            case 17 : this.iss = "Blagondzhik";
            break;
            case 18 : this.iss = "Novokuksin";
            break;
            case 19 : this.iss = "Zelenorino";
            break;
            case 20 : this.iss = "Liperilsk";
            break;
            case 21 : this.iss = "Slalyovsk";
            break;
            case 22 : this.iss = "Chelyapetsk";
            break;
            case 23 : this.iss = "Movir";
            break;
            case 24 : this.iss = "Belerbent";
            break;
            case 25 : this.iss = "Svobosnovy";
            break;
            case 26 : this.iss = "Domodergut";
            break;
            case 27 : this.iss = "Groshin";
            break;
            case 28 : this.iss = "Lidimir";
            break;
            case 29 : this.iss = "Dulsk";
            break;
            case 30 : this.iss = "Blagovetamak";
            break;
            case 31 : this.iss = "Birobishma";
            break;
            case 32 : this.iss = "Mumas";
            break;
            case 33 : this.iss = "Kaspilma";
            break;
            case 34 : this.iss = "Novotroivir";
            break;
            case 35 : this.iss = "Birobiryol";
            break;
            case 36 : this.iss = "Deromorsk";
            break;
            case 37 : this.iss = "Dushny";
            break;
            case 38 : this.iss = "Zhelerapul";
            break;
            case 39 : this.iss = "Marino";
            break;
            case 40 : this.iss = "Tuntsy";
            break;
            case 41 : this.iss = "Gavrov";
            break;
            case 42 : this.iss = "Belorevichi";
            break;
            case 43 : this.iss = "Tuymashikha";
            break;
            case 44 : this.iss = "Novochechensk";
            break;
            case 45 : this.iss = "Tvelitamak";
            break;
            case 46 : this.iss = "Belesnoy";
            break;
            case 47 : this.iss = "Vsekiye";
            break;
            case 48 : this.iss = "Domovostok";
            break;
            case 49 : this.iss = "Chaykoslavl";
            break;
            case 50 : this.iss = "Nefteyudorozhny";
            break;
        }


        const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var rand =  int(random(0, letter.length-1));
        var rand1 =  int(random(0, letter.length-1));
        var rand2 =  int(random(0, letter.length-1));
        var rand3 =  int(random(0, letter.length-1));
        var rand4 =  int(random(0, letter.length-1));
        var l1 = letter[rand] + letter[rand3] + letter[rand4];
        var l2 = Math.round(random(0,9));
        var l3 = letter[rand1];
        var l4 = Math.round(random(1111,9999));
        var l5 = letter[rand2];

        this.passportID = l1 + l2 + l3 + "-" +  l4 + l5;
    }

    male()
    {
        this.gender = "M"
            var name = Math.round(random(1,25));

            switch(name)
            {
                case 1 : this.name = "ADRIAN";
                break;
                case 2 : this.name = "DIMITRI";
                break;
                case 3 : this.name = "IGOR";
                break;
                case 4 : this.name = "LEONID";
                break;
                case 5 : this.name = "MICHAIL";
                break;
                case 6 : this.name = "NICHOLIA";
                break;
                case 7 : this.name = "BORIS";
                break;
                case 8 : this.name = "VIKTOR";
                break;
                case 9 : this.name = "OLEG";
                break;
                case 10 : this.name = "MAKSIMILIAN";
                break;
                case 11 : this.name = "VAUGHN";
                break;
                case 12 : this.name = "LUDMIL";
                break;
                case 13 : this.name = "TIMUR";
                break;
                case 14 : this.name = "STANISLAV";
                break;
                case 15 : this.name = "NAZARIY";
                break;
                case 16 : this.name = "ANTON";
                break;
                case 17 : this.name = "ARTEM";
                break;
                case 18 : this.name = "FEDIR";
                break;
                case 19 : this.name = "GEDEON";
                break;
                case 20 : this.name = "ALEKSEI";
                break;
                case 21 : this.name = "SACHAR";
                break;
                case 22 : this.name = "STANISLAV";
                break;
                case 23 : this.name = "MATVEI";
                break;
                case 24 : this.name = "AGRIPIN";
                break;
                case 25 : this.name = "AVGUSTIN";
                break;
            }

            var literacy = Math.round(random(1,2));
            switch(literacy)
            {
                case 1 : this.literacy = "Illiterate";
                break;
                case 2 : this.literacy = "Literate";
                break;
            }
    }

    female()
    {
        this.gender = "F"
            var name = Math.round(random(1,25));

            switch(name)
            {
                case 1 : this.name = "IRINA";
                break;
                case 2 : this.name = "ANGELINA";
                break;
                case 3 : this.name = "DASHA";
                break;
                case 4 : this.name = "KATE";
                break;
                case 5 : this.name = "DIANA";
                break;
                case 6 : this.name = "IRIS";
                break;
                case 7 : this.name = "IZABELLE";
                break;
                case 8 : this.name = "MARINA";
                break;
                case 9 : this.name = "VALENTINA";
                break;
                case 10 : this.name = "ULYANA";
                break;
                case 11 : this.name = "ISADORA";
                break;
                case 12 : this.name = "TOMA";
                break;
                case 13 : this.name = "IRINA";
                break;
                case 14 : this.name = "RADINKA";
                break;
                case 15 : this.name = "SASHA";
                break;
                case 16 : this.name = "ARISHA";
                break;
                case 17 : this.name = "LANA";
                break;
                case 18 : this.name = "VERONIKA";
                break;
                case 19 : this.name = "MARIANNA";
                break;
                case 20 : this.name = "VALERIYA";
                break;
                case 21 : this.name = "NATALYA";
                break;
                case 22 : this.name = "KATIA";
                break;
                case 23 : this.name = "YELENA";
                break;
                case 24 : this.name = "FÉDORA";
                break;
                case 25 : this.name = "NATASHA";
                break;
            }

            var literacy = Math.round(random(1,2));
            switch(literacy)
            {
                case 1 : this.literacy = "Illiterate";
                break;
                case 2 : this.literacy = "Literate";
                break;
            }
    }
    display()
    {
        var offset = 210;
        if(form.x > 700)
        {
            push();
            textFont(this.font);
            var ISS = this.iss.toUpperCase()
            translate(this.x,this.y);
            imageMode(TOP);
            image(this.passportIMG,0,0,300,395);
            textSize(15)
            fill(60);
            text(this.surname + "," + this.name,25,20 + offset);
            text(this.dateOfBirthD + "-"+this.dateOfBirthM+ "-" +this.dateOfBirthY,165,40 + offset);
            text(this.gender,165,60 + offset);
            push();
            textSize(22)
            text(this.country,150,130 + offset);
            pop();
            text(this.ExpiryYear,165,100 + offset);
            text(ISS,165,80 + offset);
            text(this.passportID,20,165+offset);
            pop();
        }
        else{
            push();
            translate(this.x,this.y)
            imageMode(CENTER);
            image(this.passportOnDeskImage,0,0,200,200)
            pop();
        }

        if(this.country === "" || this.ExpiryYear === "")
        {
            this.result = "Denied";
        }
        else{
            if(this.country === "BURYAT"||this.country === "KHAKASS"||this.country === "DAGESTAN")
            {
                if(this.ExpiryYear >= 1983)
                {
                    this.result = "Approved";
                }
                else
                {
                    this.result = "Denied";
                }
            }
            else
            {
                this.result = "Denied";
            }
        }
        console.log(this.result);
        console.log(this.passportID);
        console.log(this.state);
    }
}