function Ebullet(x,y) 
	{
	this.x=x+30;
	this.y=y+50;
	this.h=10;
	this.w=10;
	this.image = new Image();
	this.image.src = "img/enemy_bullet.png";
	}


	Ebullet.prototype.draw=function()
	{
		ctx.drawImage(this.image, this.x, this.y,this.h,this.w);	
	}


	Ebullet.prototype.update=function() 
	{
		this.y=this.y + 5;
	}
	
