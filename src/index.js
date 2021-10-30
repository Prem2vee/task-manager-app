const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('Get requests are disabled')
//     }
//     else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//         res.status(503).send('Website is under maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('617c874710dc1b14dd8d61ae')
//     // await task.populate('author')
//     // console.log(task.author)

//     const user = await User.findById('617ba27c20c5f2ea82c72707')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()


