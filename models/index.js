const User = require('./user');
const Language = require('./Language');
const Post = require('./post');

// associations 
User.hasMany(Post, {
  foreignKey: 'userId'
})

Post.belongsTo(User, {
  foreignKey: 'userId'
})

module.exports = { User, Language, Post };
