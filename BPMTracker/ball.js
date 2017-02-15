function Ball(_x,_y){
	this.x=_x,
	this.y=_y,
	this.r=20,

	this.show = function(_amp){
		this.r=_amp
		noStroke();
		fill(random(255),10,random(255),100);
  		ellipse(this.x,this.y,this.r,this.r);

	},


	this.move=function(){
		this.x=this.x+random(-5,5);
		this.y=this.y+random(-5,5);
		if (this.x>=width) {this.x=_x}
		if (this.y>=height) {this.y=_y}
	}


}