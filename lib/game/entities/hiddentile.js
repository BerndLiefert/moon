var col = false;

ig.module('game.entities.hiddentile')
.requires('impact.entity')
.defines(function(){

EntityHiddentile = ig.Entity.extend({
	
	checkAgainst: ig.Entity.TYPE.BOTH,
	size:{x:16, y:16},
	animSheet: new ig.AnimationSheet('media/tileset.png', 16, 16),
	
	init: function(x, y, settings){
	this.parent(x, y, settings);
	this.addAnim('tile', 1, [0]);
	},	
	
	
	
	
	update: function(){
		this.parent();
	if(col == true){
	this.currentAnim = this.anims.tile;
	}
	},
	
	check: function(other){
	if(other){
	col = true;
	}
		
	}
	
	

});

});
