class Food{
    constructor(){
        this.foodStock = 0;
        this.image = loadImage("Images/Milk.png");
        this.lastFed;
    }
    
    updateFoodStock(foodStock){
        this.foodStock = foodStock
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    display(wall,wall2,wall3,wall4){
        var x=80, y=80;
        
        imageMode(CENTER);
        
        if(this.foodStock !=0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10==0){
                    x=80;
                    y=y+60;
                }
                image(this.image,x,y,60,60);
                fill("#874312");
                strokeWeight(1);
                stroke("#874312");
                rect(x-20,y+20,50,10);
                x=x+30;
                
            }
            wall = createSprite(60,345,10,485)
            wall.shapeColor = "#874312";

            wall2 = createSprite(220,585,330,10);
            wall2.shapeColor = "#874312";

            wall3 = createSprite(380,340,10,490);
            wall3.shapeColor = "#874312";

            wall4 = createSprite(220,100,330,10);
            wall4.shapeColor = "#874312";
            drawSprites();

            strokeWeight(1);
            stroke("Black");
            fill("Black");
            textSize(24);
            textFont("Lucida Console");
            text("FEED MY       WITH      FROM THIS        ",0,93);
            stroke("Orange");
            fill("Orange");
            text("TIGER",115,93);
            stroke("White");
            fill("White");
            text("MILK",275,93);
            strokeWeight(1.5);
            stroke("#874312");
            fill("#874312");
            text("ALMIRHA",489,93);
            
        }
    }
    
    
}