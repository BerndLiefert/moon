ig.module('game.entities.acid')
.requires('impact.entity')
.defines(function(){

EntityAcid = ig.Entity.extend({
	
	animSheet: new ig.AnimationSheet('media/acid.png', 16, 16),
	
	init: function(x, y, settings){
	this.parent(x, y, settings);
	this.addAnim('acid', 0.1, [0,1,2,3]);
	},
	
	update: function(){
	this.parent();
	this.currentAnim = this.anims.acid;
	}

});

});
