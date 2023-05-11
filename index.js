const express = require("express")
const dotenv=require("dotenv")
dotenv.config()
const { connection } = require("./config/db")
const { defaultData } = require("./default")
const route=require("./route/newsRoute")
const cors=require("cors")
const app = express()
connection()

app.use(cors())
app.use("", route)
defaultData()



app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});
let PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is Running at PORT ${PORT}`))
