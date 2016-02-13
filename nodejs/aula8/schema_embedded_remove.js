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

const _id = '56bf763b0afe826d2fcd18ec';
const comment_id = '56bf763b0afe826d2fcd18ed';

BlogPostModel.findById(_id,function(err,post){
   if(err) return console.log(err);
   console.log('Comments',post.comments); // exibe todos os comentarios
   console.log('Comment By ID',post.comments.id(comment_id)); // exibe o comentario pelo id informado
   post.comments[0].remove(); // remove o primeiro id
   post.save(function(err,data){ // salva novamente o post com o comentario excluido
     if(err) return console.log(err);
     console.log(data);
   });
});
