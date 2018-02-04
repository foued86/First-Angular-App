function todoController($scope)
{
    $scope.todos = [
        {taskName : 'Acheter du pain', done : true},
        {taskName : 'Réparer le PC', done : true},
        {taskName : 'Louer un DVD', done : false},
        {taskName : 'Faire le sport', done : false},
        {taskName : 'Apprendre AngularJs', done : true}
    ];
    
    $scope.remaining = function(){
        var undone = $scope.todos.length;
        
        $scope.todos.forEach(function(el){
            if(el.done)
                undone--;
        });
        
        return undone;
    };
    
    $scope.add = function(){
        $scope.todos.unshift({
            taskName : $scope.newTask,
            done : false
            });
        $scope.newTask = '';
    };
}

angular.module("app", [])
        .controller("todoController", ["$scope", todoController]);