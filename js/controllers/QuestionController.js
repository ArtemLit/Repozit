questApp.controller('QuestionController',
    function QuestionController($scope, $http){
     
        /*$http({method: 'GET', url: 'question.json'}).
         success(function(data, status, headers, config) {
            $scope.question=data.question;
        }).
        error(function(data, status, headers, config) {
            console.log(status);
        });*/
		
		$scope.loaded=false;
     
		$scope.load = function (){
            $http.get('question.json').
			 success(function(data) {
				$scope.question=data.question;
				$scope.loaded=true;
			})
        };
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)