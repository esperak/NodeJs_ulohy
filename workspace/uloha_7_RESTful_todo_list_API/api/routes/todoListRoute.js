
let router = require('express').Router();
var todoList = require('../controllers/todoListController');

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to ToDoListREST!',
    });
});

// Contact routes
router.route('/tasks')
    //reuising the tasks route for get and post http method
    .get(todoList.list_all_tasks)  //calling function list_all_tasks in the controller
    .post(todoList.create_a_task);
router.route('/tasks/:taskId')
    //reuising the tasks/taskId route for get and put and delete http method
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

// Export API routes
module.exports = router;
