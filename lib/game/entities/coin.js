ig.module('game.entities.coin')
.requires('impact.entity')
.defines(function(){

EntityCoin = ig.Entity.extend({
	
	checkAgainst: ig.Entity.TYPE.BOTH,
	size:{x:16, y:16},
	animSheet: new ig.AnimationSheet('media/coin.png', 16, 16),
	
	init: function(x, y, settings){
	this.parent(x, y, settings);
	this.addAnim('heart', 1, [0]);
	},	
	
	
	
	
	update: function(){	
	this.currentAnim = this.anims.heart;
	},
	
	check: function(other){
		this.kill();
		
	}
	
	

});

});
