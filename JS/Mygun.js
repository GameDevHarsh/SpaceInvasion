// function Mygun(x,y) 
// 	{
// 	this.x=x;
// 	this.y=y;
// 	this.h=55;
// 	this.w=55;
// 	this.fires=[];

// 	}

	
// Mygun.prototype.draw=function()
// 		{
// 			ctx.fillStyle = 'red'; 
// 			ctx.fillRect(this.x, this.y,this.h, this.w); 
			
// 			for(var i=0; i<this.fires.length;i++)
// 			{
// 			this.fires[i].draw();
// 			}
// 		}

//************************************************
function Mygun(x, y) {
  this.x = x;
  this.y = y;
  this.h=90;
  this.w=90;
  this.fires = [];
  this.image = new Image();
  this.image.src = "img/player.png";
}

Mygun.prototype.draw = function() {
  ctx.drawImage(this.image, this.x,this.y,this.w,this.h);

  for (var i = 0; i < this.fires.length; i++) {
    this.fires[i].draw();
  }
};

//********************************************

Mygun.prototype.update=function(x)
		{
				this.x= x;
			for(var i=0; i<this.fires.length;i++)
			{
				this.fires[i].update();
			}
		}

Mygun.prototype.Fire=function()
		{
			var f = new Mybullet(this.x,this.y);
				this.fires.push(f);
		}
		
		
		
Mygun.prototype.Collision=function(r0,r1)
		{
			
			
			if((Math.max(r0.x,r0.x+r0.w)) >= (Math.min(r1.x, r1.x+ r1.w)) && (Math.min(r0.x, r0.x+ r0.w))<= (Math.max(r1.x, r1.x+ r1.w))
				&& (Math.max(r0.y,r0.y+r0.h)) >= (Math.min(r1.y, r1.y+ r1.h)) && (Math.min(r0.y, r0.y+ r0.h))<= (Math.max(r1.y, r1.y+ r1.h)))
				{
					return true;
				}
			else

			{
				return false;
			}
		}


