ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.levels.level1', 
	'game.entities.player',
	'game.entities.acid', 
	'game.entities.coin',
	'game.entities.enemy',
	'game.entities.bullet',
	'game.entities.worm',
	
	'plugins.impact-splash-loader'
	
	
	
)
.defines(function(){



MyGame = ig.Game.extend({



	gravity:800,
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	//HUD icons
	heartFull: new ig.Image('media/heart-full.png'),
	heartEmpty: new ig.Image('media/heart-empty.png'),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		
	
		
	this.loadLevel(LevelLevel1);
	
	ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
	ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
	ig.input.bind(ig.KEY.X, 'jump');
	ig.input.bind(ig.KEY.C, 'fire');
	
	
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		
		this.parent();
		
		
		
		var player = this.getEntitiesByType(EntityPlayer)[0];
		var gameviewport = ig.game.screen;
		var gamecanvas = ig.system;
		
		if(player){
		gameviewport.x = player.pos.x - gamecanvas.width/2;
		//gameviewport.y = player.pos.y - gamecanvas.width/2;
		}
		
		
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
	
	}
});



StartScreen = ig.Game.extend({
	instructText: new ig.Font( 'media/04b03.font.png' ),
	background: new ig.Image('media/screen.png'),

	init: function() {
		ig.input.bind( ig.KEY.SPACE, 'start');
	},
	
	update: function() {
		if(ig.input.pressed ('start')){
		ig.system.setGame(MyGame)
	}
	
	this.parent();
	},
	
	draw: function() {
		this.parent();
		this.background.draw(0,0);
		var x = ig.system.width/2,
			y = ig.system.height - 10;
		this.instructText.draw( 'Press Spacebar To Start', x, y, ig.Font.ALIGN.CENTER );
}
});

ig.main( '#canvas', StartScreen, 60, 320, 240, 2, ig.ImpactSplashLoader);

});
