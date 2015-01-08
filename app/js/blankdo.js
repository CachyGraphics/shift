//---- Shortcut functions

var gui = require('nw.gui');

var option = {
	key: "Ctrl+Alt+T",
	active: function () {
		global.handler.show();
		global.blank.close();
	},
	failed: function (msg) {
		console.log(msg);
	}
};
var shortcut1 = new gui.Shortcut(option);
gui.App.registerGlobalHotKey(shortcut1);


//---- Silencing system wide shortcuts

$.getJSON("shortcuts.json", function (data) {
	$.each(data, function (index, value) {
		var gui = require('nw.gui');

		var option = {
			key: value,
			active: function () {
				return
			},
			failed: function (msg) {
				console.log(msg);
			}
		};
		var shortcut1 = new gui.Shortcut(option);
		gui.App.registerGlobalHotKey(shortcut1);
	});
});

//---- Shortcut functions end
