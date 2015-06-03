Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName: 'li',
	className: 'item border-bottom',
	template: Handlebars.compile($("#song-template").html()),
	render: function(){
		var html = this.template(this.model.toJSON());
		debugger;
		this.$el.html(html);
		return this;
	}
});

window.Sfotipy = Sfotipy;