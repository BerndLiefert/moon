ig.module('game.entities.gun')
.requires('impact.entity')
.defines(function(){

EntityGun = ig.Entity.extend({
	
	size:{x:16, y:16},
	animSheet: new ig.AnimationSheet('media/gun.png', 16, 16),
	
	checkAgainst: ig.Entity.TYPE.A,
	
	gravityFactor: 0,
	
	init: function(x, y, settings){
	this.parent(x, y, settings);
	this.addAnim('gun', 1, [0]);
	},
	
	update: function(){
	this.parent();	
	this.currentAnim = this.anims.gun;
	},
	
	check: function(other){
		this.kill();
		
	}
	
	

});

});
