const mongoose = require("mongoose");

const post_schema = mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    content : {
        type : String,
        require : true,
    }
})

module.exports = mongoose.model("Post",post_schema)