const mongoose = require("mongoose");

const connect = () => {
   try {
mongoose.connect(process.env.MONGO_URI!)
   } catch (error) {
      console.log(error)
   }
}
export default connect;