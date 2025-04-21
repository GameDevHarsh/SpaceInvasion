function Enemy(x,y) 
	{
	this.x=x;
	this.y=y;
	this.h=70;
	this.w=70;
	this.check=0;
	this.efires=[];
	var ef;
	this.image = new Image();
	}

	
Enemy.prototype.draw=function(img)
		{
			this.image.src=img;

			ctx.drawImage(this.image, this.x, this.y,this.h,this.w);
				   				
				for (var i = 0; i <this.efires.length; i++) 
				{
					this.efires[i].draw();
				
				}
		
		}

Enemy.prototype.update=function(enemy)
 {
			for (var i = 0; i <enemy.length; i++) 
				{
					var py=0.5;//Math.random();

					enemy[i].y=enemy[i].y+py;


					if(enemy[i].y>=700)
					{

						enemy.splice(pos, 1);
												
					}

					
				}

				for (var i = 0; i <this.efires.length; i++) 
				{
					this.efires[i].update();
				
				}

			
				
 }



Enemy.prototype.checkEnd=function()
{
	return check; 
}


Enemy.prototype.eFire=function()
{
		ef = new Ebullet(this.x,this.y);
		this.efires.push(ef);
}
