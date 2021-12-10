app.controller('ToDoController',['$scope', 'ToDoService', 'PriorityService', function ($scope, toDoService, priorityService) {
    
    $scope.priority = 3;
    
    $scope.items = [
        [],[],[],[]
    ];
    
    $scope.priorities = priorityService;
    
    $scope.setPriority = function (priority) {
        $scope.priority = priority;
    };
    
    $scope.getPriorityClass = function () {
        var classes = ['danger', 'warning', 'info', 'success'];
        return "btn-" + classes[$scope.priority];
    };
    
    $scope.query = function () {
        var allItems = toDoService.query(function () {
            allItems.forEach(function (e, i) {
               $scope.items[e.priority].push(e);
            });
        });

    };
    
    $scope.onFocus = function(showRow){
        $scope.isRowShowing = showRow;
    }
    
    $scope.save = function () {
        if($scope.form.$valid){
            var newItem = {
                priority: $scope.priority,
                text: $scope.newItemText
            };
            toDoService.save(newItem, function () {
                $scope.newItemText = "";
                $scope.items[newItem.priority].push(newItem);
            });
        }
    };
    
    $scope.delete = function (item) {
        toDoService.delete({id: item._id});
        $scope.items[item.priority].forEach(function (e, i, array) {
            if(e._id === item._id){
                array.splice(i, 1);
            }
        });
    };
    
    $scope.query();
}]);