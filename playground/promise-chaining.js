require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6168f3bfe962237baf189aa2', { age: 22 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 22 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('6168f3bfe962237baf189aa2', 26).then((count) => {
console.log(count)
}).catch((err) => {
    console.log(err)
})