var gui = require('nw.gui');
var win = gui.Window.get();
var exec = require('child_process').exec;

//exec("node createwsserver", function (error, stdout, stderr) {
//    
//});

ww = window.screen.width;
hh = window.screen.height;

win.width = 350;
win.height = 250;

//---- Window functions 
$("#close").on('click', function () {
	open(location, '_self').close();
});
$("#minim").on('click', function () {
	win.minimize();
});
$("#shiftapp").hover(function () {
	win.show();
});
//---- Window functions end 

//---- Web fonts 
WebFontConfig = {
	google: {
		families: ['Roboto:400,700,300,400italic:latin']
	}
};
(function () {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
	loadingFinish();
})();
//---- Web fonts end 

//---- Websocket functions 
var peer = new Peer('sushruth', {
	key: '6o2jwg25dwbfbt9'
});
peer.on('open', function (id) {

});
//---- Websocket functions end 
var mask;

function loadingFinish() {
	$("#content").css({
		background: 'none'
	});
	$("#content > div").show(300);
	mask = gui.Window.get(
		window.open('mask.html', {
			toolbar: false,
			frame: false,
			resizable: false,
			transparent: true,
			show_in_taskbar: false
		})
	);
	mask.setTransparent(true);
	mask.setResizable(false);
	mask.setAlwaysOnTop(true);

	mask.width = ww;
	mask.height = hh;
	mask.x = 0;
	mask.y = 0;
	
}

$("#idd").focus();

//---- Shortcut functions

var option = {
	key: "Ctrl+Shift+Z",
	active: function () {
		win.show();
		mask.close();
	},
	failed: function (msg) {
		// :(, fail to register the |key| or couldn't parse the |key|.
		console.log(msg);
	}
};
var shortcut1 = new gui.Shortcut(option);
gui.App.registerGlobalHotKey(shortcut1);

var option = {
	key: "Alt+F4",
	active: function () {
		return
	},
	failed: function (msg) {
		// :(, fail to register the |key| or couldn't parse the |key|.
		console.log(msg);
	}
};
var shortcut2 = new gui.Shortcut(option);
gui.App.registerGlobalHotKey(shortcut2);

//---- Shortcut functions end