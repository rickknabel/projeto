const user = require("./userRoute")
const workout = require("./workoutRoute")
const bodyParser = require("body-parser")

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(user)
    app.use(workout)

}
