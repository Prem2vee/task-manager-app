require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6169d234941f2689614d61a4').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((tasks) => {
//     console.log(tasks)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deleteTask = await Task.findByIdAndDelete(id)
    const countTasks = await Task.countDocuments({ completed: false })
    return countTasks
}

deleteTaskAndCount('6169d2b6941f2689614d61a6').then((countTasks) => {
    console.log(countTasks)
}).catch((e) => {
    console.log(e)
})