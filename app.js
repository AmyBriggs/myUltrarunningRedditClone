const redditClone = angular.module("redditClone", [])

redditClone.controller("MainController", ['$scope', function($scope){

$scope.submitForm = function(isValid) {
  if(isValid){
    const newPost = new this.Post()
    newPost.title = this.post.title
    newPost.author = this.post.author
    newPost.image = this.post.image
    newPost.description = this.post.description
    $scope.posts.push(newPost)
    $scope.post = []
  }
}

$scope.createPostView = false
$scope.togglePostView = function() {
  if($scope.createPostView === false){
    $scope.createPostView = true
  } else {
    $scope.createPostView = false
  }
}

$scope.Post = function (){
  this.date = new Date()
  this.votes = 0
  this.upvote = function(){
    this.votes += 1
  }
  this.downvote = function(){
    this.votes -= 1
  }
  this.comments = []
  this.submitCommentForm = function(){
    var newComment = angular.copy(this.formComment)
    newComment.date = new Date()
    this.comments.push(newComment)
  }
}

$scope.posts = [
  {
    title: "This is a test",
    author: "Amy Briggs",
    image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/12dec8938220093eb7f1fdb8a9ce40b8-the-rocky-mountains.jpg?sharp=10&vib=20&w=1200",
    description: "Testing this clone",
    date: new Date(),
    votes: 2,
    upvote: function(){
      this.votes += 1
    },
    downvote: function(){
      this.votes -= 1
    },
    submitCommentForm: function() {
      var newComment = this.formComment
      newComment.date = new Date()
      this.comments.push(newComment)
    },
    comments: [
      {
        author: "Ranjit the cat",
        comment: "I'm hungry!",
        date: new Date()
      },

      {
        author: "Ranjit the cat",
        comment: "I'm hungry!",
        date: new Date()
      },

      {
        author: "Ranjit the cat",
        comment: "I'm hungry!",
        date: new Date()
      }
    ]
  },

  // {},
  // {}
]



}])
