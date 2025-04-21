function Mybullet(x,y) 
	{
	this.x=x+40;
	this.y=y;
	this.h=10;
	this.w=8;
	this.image = new Image();
	this.image.src = "img/player_bullet.png";
	}

	
Mybullet.prototype.draw=function()
		{
			ctx.drawImage(this.image, this.x, this.y,this.w,this.h);
		}
Mybullet.prototype.update=function()
		{
			this.y=this.y - 5;
		}

