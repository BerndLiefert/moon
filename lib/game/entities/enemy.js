﻿ig.module('game.entities.enemy')
.requires('impact.entity')
.defines(function(){

EntityEnemy = ig.Entity.extend({
	
	size:{x:16, y:32},
	maxVel:{x: 32, y:0},
	
	animSheet: new ig.AnimationSheet('media/enemy.png', 16, 32),
	
	flip: false,
	
	speed:36,
	
	
	type: ig.Entity.TYPE.B, // Evil enemy group
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	//collides: ig.Entity.COLLIDES.PASSIVE,
	
	
	
	
	
	init: function(x, y, settings){
	this.parent(x, y, settings);
	this.addAnim('enemy', 0.1, [0,1,2,1]);
	},
	
	update: function(){
	
		// Near an edge? return!
		if( !ig.game.collisionMap.getTile(
				this.pos.x + (this.flip ? -4 : this.size.x +4),
				this.pos.y + this.size.y+1
			)
		) {
			this.flip = !this.flip;
		}
		
		var xdir = this.flip ? 1 : -1;
		this.vel.x = this.speed * xdir;
		this.currentAnim.flip.x = !this.flip;
		
		this.parent();
		
		},
		
		
		
	handleMovementTrace: function( res ) {
		this.parent( res );
		
		// Collision with a wall? return!
		if( res.collision.x ) {
			this.flip = !this.flip;
		}
	},

		check: function(other){
		//other.kill();
		
		var player = other;
		if(player){
		player.pos.x = 16;
		player.pos.y = 16;
		
		
		}
		
		lives--;
		},
	
	});

});
