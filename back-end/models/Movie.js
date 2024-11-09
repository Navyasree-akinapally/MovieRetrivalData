const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    movie: String,
    actor: String,
    actress: String,
    rating: Number

});

const Movie=mongoose.model('Movie',userSchema);
module.exports=Movie;

