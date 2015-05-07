// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
 
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var app = angular.module('com', []);
app.controller('ComCtrl', function($scope) {
	$scope.message = "Add your comment: ";
	$scope.one = "Hello!";
	$scope.two = "Is there anyone?";
	$scope.three = "I think I'm talking to myself.";
	
	//Method modified from: https://docs.angularjs.org/guide/controller
	$scope.add = function(added) {
		$scope.a = added;
	};
	
	var addCommentFromInputBox = function () {
        var $new_comment;
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function () {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
});