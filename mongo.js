const mongoose = require("mongoose");

//Url de mongoAtlas
const uri = "mongodb+srv://lechonmin:5Lechones@cluster0.job5v.mongodb.net/LechonBBDD?retryWrites=true&w=majority";

const  options = {
  useNewUrlParser:  true,
  useUnifiedTopology:  true
};

//Conexión a la BBDD mongoAtlas
mongoose.connect(uri, options)
  .then(() => {
    console.log("MongoDB Connected…")
  })
  .catch(err => console.log(err))


//Foncion randomUser
function randomUser(){
    
}