var controller = {
	init: function(){
		this.model = new Model();
		this.view = new View();
	}
}

function Model(){

}

function View(){
	var self = this

	this.elems = {}
	this.elems.audio = document.createElement('audio');

	this.elems.audio.src = "media/DOt_-_05_-_IMF.mp3"
	this.elems.audio.play();
}

controller.init();