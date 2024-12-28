
const mongoose = require('mongoose');

const NotToDoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    task: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('NotToDo', NotToDoSchema);

// const mongoose = require('mongoose');

// const notTodoSchema = new mongoose.Schema({
//   task: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('NotTodo', notTodoSchema);