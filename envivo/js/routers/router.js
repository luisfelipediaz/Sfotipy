Sfotipy.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "album/:name": "album",
        "profile/:username": "profile"
    },

    initialize: function(){
        Backbone.history.start();
    },

    index: function () {
        console.log("Estoy en el index");
    },
    album: function (name) {
        console.log("Album: " + name)
    },
    profile: function (username) {
        console.log("Username: " + username);
    }
});