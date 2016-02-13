'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/teste');

const CommentSchema = new Schema({
    title: String,
    body: String,
    date: Date
});

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: Date,
    comments: [CommentSchema]
})

const post = {
      title: 'Primeiro Post',
      body: 'Post Inicial do Blog',
      date: Date.now()
};

const comment = {
      title: 'Comentei Aqui!',
      body: 'Esta comentado aquiiiiii hahaha',
      date: Date.now()
}

const BlogPostModel = mongoose.model('BlogPost',BlogPostSchema);
const BlogPost = new BlogPostModel(post);

BlogPost.comments.push(comment);

BlogPost.save(function(err,data){
    if(err) return console.log('Erro',err);
    return console.log('Sucesso', data);
});
