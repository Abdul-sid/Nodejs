const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// database connection
require("./mongo")

// models
require("./model/Post")

// middle-ware
app.use(bodyParser.json())
   .use(morgan())

const Post = mongoose.model("Post");

// To obtain post

app.get("/posts", async(require , response) => {
    
    const posts = await Post.find({});
    response.send(posts);

})

// To obtain particular post

app.get("/posts/:postId" , async (require , response) => {
    
     try{
         const post =  await Post.findOne({_id: require.params.postId})
         response.send(post)
     }

     catch(err){
         response.status(500)
     }

})

// To edit post

app.put("/posts/:postId" , async (require,response) => {

    try{
         const post = await Post.findByIdAndUpdate({
             _id: require.params.postId
         },require.body,{
             new : true,
             runvalidators : true
         })

         response.send(post);
    }

    catch(err){
        response.status(500);
    }

})

// To delete post

app.delete("/posts/:postId", async(require,response) => {
    try{
        const post = await Post.findByIdAndRemove({
            _id: require.params.postId
        }
        )
        response.send(post)
    }
    catch(err){
        response.status(500);
    }
})

// To create post

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
         response.status("error while posting");
    }

})

app.listen(3005, () => {
    console.log("listening to the port 3005");
})