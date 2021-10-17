// Making a module

var cruzModel = angular.module('cruzModel', []);

// Config runs a code before your application runs

cruzModel.config(function(){


});

// run runs a code after your application runs

cruzModel.run(function(){

    
});

// Making a controller
// Use the model name with the controller keyword then give the controller a name

// ==========//
// CONTROLLER//
//==========// 

cruzModel.controller('cruzController', function($scope){ //scope...

    $scope.message = "Sup Mate"; //Using the scope

    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "Yellow",
            rate: 50
        },
        {
            name: "Crystal",
            belt: "Grenn",
            rate: 80
        },
        {
            name: "Ryu",
            belt: "Black",
            rate: 30
        },
        {
            name: "Shaun",
            belt: "Red",
            rate: 20
        }
    ]

});