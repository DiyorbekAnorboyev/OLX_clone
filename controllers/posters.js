const Post = require("../models/postModel");

//Get* All Posts
const getAllPost = async (req, res) => {
  const posters = await Post.find().lean();
  res.render("posts/posts", { title: "Posts", posters: posters.reverse() });
};

//Get* One Post
const getOnePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {$inc: {views: 1}}, {new: true}).lean();
  res.render("posts/one-post", { title: post.title, post });
  } catch (error) {
    console.log(error.message );
  }
};

// Get* Add Post Page
const getAddPost = (req, res) => {
  res.render("posts/add-post", { title: "Posts" });
};

// Post* Add Post
const postAddPost = async (req, res) => {
  const newPost = req.body;
  await Post.create(newPost);
  res.redirect("/posts");
};

///////////////////////*858979856446444444444444//////////--------------

// Get* Edit Post Page
const getEditPost = async(req, res) => {
  const post = await Post.findById(req.params.id).lean();
    res.render("posts/one-edit-post", { title: post.title, post });
  };

// Post* Edit Post
const postEditPost = async (req, res) => {
  try {
    const editPost = req.body;
    const newPost = await Post.findByIdAndUpdate(req.params.id, editPost);
    newPost.save()
    res.redirect("/posts");
  } catch (error) {
    console.log(error.message);
  }
  };

  // Post* Delete post
  const postDelete = async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.redirect("/posts");
    } catch (error) {
      console.log(error.message);
    }
    };


module.exports = { getAllPost, getAddPost, postAddPost, getEditPost, postEditPost, getOnePost, postDelete };
