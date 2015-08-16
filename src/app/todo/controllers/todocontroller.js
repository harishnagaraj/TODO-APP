(function () {
    'use strict';
    angular.module('ToDo',[]).
        controller('todoController',['$scope',function ($scope){ 
            $scope.todos =[];
            $scope.validationmessage='';
            //Add Function
            $scope.addTodo = function(){    
                $scope.validationmessage='';      
                if($scope.todos.length > 0 ){
                        angular.forEach($scope.todos, function(item) 
                        {
                        if( item.title.toLowerCase().indexOf($scope.newTodo.toLowerCase()) >= 0 )
                          $scope.validationmessage='Task already exists.'  
                        else
                        {
                            $scope.todos.push({'title':$scope.newTodo,'done':false})
                            $scope.newTodo=''
                        }
                    });}
                else{
                    $scope.todos.push({'title':$scope.newTodo,'done':false})
                    $scope.newTodo='' }}
                // Clear Function
            $scope.finished=function()
            {   $scope.validationmessage='';
                $scope.todos= $scope.todos.filter(function(item){
                return !item.done
                })
            }
        }])
})();
