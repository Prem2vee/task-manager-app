const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    // The author helps links the user who created the task.
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref attribute allows us to create a reference from this model to
        //  another model which in this case is the User model
        ref: 'User'
    }
}, {
    timestamps: true
})


const Task = mongoose.model('Task', taskSchema)

module.exports = Task