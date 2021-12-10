var T = require('timbre');

    var sines = []; //T("sin", {freq:440}), T("sin", {freq:660})];

    for (var i = 0; i < 10; i++) {
        sines.push(T("sin", {freq:220*(Math.floor(50 * Math.random())), mul:0.5}));
    }


    sines.forEach(function(sine){
        T("perc", {r:500}, sine).on("ended", function() {
            this.pause();
        }).bang().play();
    });
