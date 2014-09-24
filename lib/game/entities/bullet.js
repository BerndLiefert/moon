ig.module('game.entities.bullet')
.requires('impact.entity')
.defines(function(){

EntityBullet = ig.Entity.extend({
	
	size:{x:16, y:16},
	animSheet: new ig.AnimationSheet('media/shoot.png', 16, 16),
	
	gravityFactor: 0,
	maxVel:{x:300, y:0},
	
	checkAgainst: ig.Entity.TYPE.B,
	
	init: function(x, y, settings){
	var player = ig.game.getEntitiesByType( EntityPlayer )[0];
	this.addAnim('shoot', 1, [0]);
	this.parent( x, y, settings );
	if(player){
		if(player.flip == false){
			this.vel.x = this.accel.x = this.maxVel.x;
	}else {
	this.vel.x = this.accel.x = -this.maxVel.x;
	}
	}
	},
	
	update: function(){
	this.parent();
	this.currentAnim = this.anims.shoot;
	},
	
	check: function(other){
	other.kill();
	this.parent;
	this.kill();
	},
	
		handleMovementTrace: function( res ) {
		this.parent( res );
		
	
		if( res.collision.x) {
		
			
				this.kill();
			
		}
	}

});

});
