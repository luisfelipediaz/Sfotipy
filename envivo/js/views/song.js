Sfotipy.Song = Backbone.View.extend({
    events:
	{
	    //'EVENTO SELECTOR': 'FUNCTION'
	    'click .action.icon-add': 'add'
	},
    tagName: 'li',
    className: 'item border-bottom',
    template: Handlebars.compile($("#song-template").html()),

    initialize: function () {
        this.listenTo(this.model, "change", this.render, this);
    },

    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },
    add: function (e) {
        alert(this.model.get("name"));
    }
});