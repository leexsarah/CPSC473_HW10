var app = angular.module('com', []);
app.controller('ComCtrl', function($scope) {
	$scope.message = "Add your comment: ";
	$scope.one = "Hello!";
	$scope.two = "Is there anyone?";
	$scope.three = "I think I'm talking to myself.";
	
	//Method modified from: https://docs.angularjs.org/guide/controller
	$scope.add = function(added) {
		$scope.a = added;
	}
	
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

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
});