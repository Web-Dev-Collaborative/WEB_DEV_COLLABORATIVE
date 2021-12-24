app.factory('ToDoService',['$resource', function($resource) {
    var url = '/api/items';
    var todo = $resource(url, null);
    
    return todo;
}]);