﻿/// <reference path="lib/jquery/dist/jquery.min.js" />
/// <reference path="lib/requirejs/text.js" />
/// <reference path="lib/knockout/build/output/knockout-latest.debug.js" />


require.config({
    baseUrl: 'js',
    paths: {
        text: "lib/requirejs/text",
        jquery: "lib/jquery/dist/jquery.min",
        knockout: "lib/knockout/build/output/knockout-latest.debug",
        dataService: "services/dataService"
    }
});

// component registration
require(['knockout'], (ko) => {

});

require(["knockout", "viewmodel"], function (ko, vm) {
    //console.log(vm.firstName);

    ko.applyBindings(vm);

});