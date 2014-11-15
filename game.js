;(function() {
	var Game = function(canvasId) {
		var canvas = document.getElementById(canvasId);
		var screen = canvas.getContext("2d");
		var self = this;

		this.entities = [new Player()];

		var tick = function() {
			self.update();
			self.render(screen);
			requestAnimationFrame(tick);
		}
		tick();
	}

	Game.prototype = {
		update: function() {

		},

		render: function(screen) {
			for(var i = 0; i < this.entities.length; i++) {
				drawRect(screen);
			}
		}
	}

	Player = function() {

	}

	Player.prototype = function() {

	}

	var drawRect = function(screen) {
		screen.fillRect(10, 10, 10, 10);
	}

	window.onload = function() {
		new Game("screen");
	}
})();