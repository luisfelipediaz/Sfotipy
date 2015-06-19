var Sfotipy = {
    Models: {},
    Views: {},
    Collections: {},
    Router: {}
};

window.Sfotipy = Sfotipy;


Sfotipy.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "album/:name": "album",
        "profile/:username": "profile"
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

