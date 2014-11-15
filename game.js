;(function() {
	var Game = function(canvasId) {
		var canvas = document.getElementById(canvasId);
		var screen = canvas.getContext("2d");
		var gameSize = {
			width: canvas.width,
			height: canvas.height
		}
		var self = this;

		this.entities = [new Player(gameSize)];

		var tick = function() {
			self.update();
			self.render(screen);
			requestAnimationFrame(tick);
		}
		tick();
	}

	Game.prototype = {
		update: function() {
			for(var i = 0; i < this.entities.length; i++) {
				this.entities[i].update();
			}
		},

		render: function(screen) {
			for(var i = 0; i < this.entities.length; i++) {
				drawRect(screen, this.entities[i]);
			}
		}
	}

	Player = function(gameSize) {
		this.size = {
			width: 32,
			height: 32
		}
		this.position = {
			x: gameSize.width/2-this.size.width/2,
			y: gameSize.height/2
		}
	}

	Player.prototype = {
		update: function() {

		},
	}

	var drawRect = function(screen, entity) {
		screen.fillRect(entity.position.x, entity.position.y, entity.size.width, entity.size.height);
	}

	window.onload = function() {
		new Game("screen");
	}
})();