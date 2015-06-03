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
	
}

controller.init();