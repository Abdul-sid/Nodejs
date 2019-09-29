const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// database connection
require("./mongo")

// models
require("./model/Post")

// middle-ware
app.use(bodyParser.json());

const Post = mongoose.model("Post");

app.get("/posts", async(require , response) => {
    
    const posts = await Post.find({});
    response.send(posts);

})

app.post("/posts", async (require , response) => {

    try{
        const post = new Post();
        post.content = require.body.content;
        post.title = require.body.title;
        await post.save();
        response.send(post);
        console.log(post);
         
     }
     catch (err) { 
         response.send("error while posting");
    }

})

app.listen(3005, () => {
    console.log("listening to the port 3005");
})