ig.module('game.entities.player')
.requires('impact.entity')
.defines(function(){

EntityPlayer = ig.Entity.extend({

	size:{x:16, y:32},
	
	maxVel: {x: 200, y: 400},
	friction: {x: 2000, y: 0},
	
	flip: false,
	accelGround: 200,
	accelAir: 600,
	jump: 500,
	
	collides: ig.Entity.COLLIDES.ACTIVE,
	type: ig.Entity.TYPE.A,
	
	animSheet: new ig.AnimationSheet('media/player.png',16,32),
	
	
	
	init: function(x, y, settings){
		this.parent(x, y, settings);
		
		this.addAnim('idle', 1, [0]);
		this.addAnim('run', 0.1, [0,1,2,1]);
		ig.game.player = this;
	},
	update: function(){
	
	
		if (ig.input.pressed('fire')){
		var bullet = ig.game.spawnEntity('EntityBullet', this.pos.x, this.pos.y + this.size.y/2);
		}
		
	
	
	   
		// Handle user input; move left or right
		var accel = this.standing ? this.accelGround : this.accelAir;
		if( ig.input.state('left') ) {
			this.accel.x = -accel;
			this.flip = true;
		}
		else if( ig.input.state('right') ) {
			this.accel.x = accel;
			this.flip = false;
		}
		else {
			this.accel.x = 0;
		}

		// jump
		if( this.standing && ig.input.state('jump') ) {
			this.vel.y = -this.jump;
		}
		
		else if( this.vel.y < 0 ) {
			this.currentAnim = this.anims.idle;
		}
		
		else if( this.vel.y > 0 ) {
			if( this.currentAnim != this.anims.idle || this.currentAnim != this.anims.idlegun) {
			this.currentAnim = this.anims.idle.rewind();
			
			}
		}
		else if( this.vel.x != 0 ) {
		
			this.currentAnim = this.anims.run;
		
		}
		else {
		
		
			this.currentAnim = this.anims.idle;
			
		}
		
		this.currentAnim.flip.x = this.flip;
		
		
		
		
		
		this.parent();
	
	}



    
});

});