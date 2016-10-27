const redditClone = angular.module("redditClone", [])

redditClone.controller("MainController", ['$scope','$log', function($scope,$log) {
  // $scope.date = moment().hour(8).minute(0).second(0).toDate()



  $scope.createPostForm = false
  $scope.togglePostForm = function() {
    if ($scope.createPostForm === false) {
      $scope.createPostForm = true
    } else {
      $scope.createPostForm = false
    }
  }

  $scope.newPost = {}
  $scope.submitPost = function() {
    $scope.newPost.id = createId()
    $scope.newPost.comments = []
    $scope.newPost.date = new Date()
    $scope.newPost.momentDate = moment().calendar()
    $scope.newPost.votes = 0
    console.log($scope.newPost);
    var post = angular.copy($scope.newPost)
    $scope.view.posts.push(post)
    $scope.togglePostForm()
    $scope.newPost = {}
  }

  // $scope.submitForm = function(isValid) {
  //   if (isValid) {
  //     const newPost = new this.Post()
  //     newPost.title = this.post.title
  //     newPost.author = this.post.author
  //     newPost.image = this.post.image
  //     newPost.description = this.post.description
  //     $scope.posts.push(newPost)
  //     $scope.post = []
  //     $scope.togglePostForm()
  //   }
  // }

  // $scope.commentView = false
  $scope.toggleComments = function(post) {
    $log.info('post================',post);
    post.commentView = !post.commentView
    // if($scope.post.commentView === false) {
    //   $scope.post.commentView = true
    // } else {
    //   $scope.post.commentView = false
    // }
  }

  // $scope.clearComments =function() {
  //   this.formComment.author = ''
  //   this.formComment.comment = ''
  // }
  // $scope.setCommentView = function(post) {
  //   $scope.post.commentView = true
  // }


  function createId() {
    let id = $scope.view.posts.length
    return id
  }

  $scope.upvote = function(post) {
    $log.info('post============',post)
    post.votes++
  }
  $scope.downvote = function(post) {
    $log.info('post============',post)
    post.votes--
  }




  $scope.newComment = {}
  $scope.submitComment = function(post) {
    console.log(post.id);
    let id = post.id
    var comment = angular.copy($scope.newComment)
    $scope.view.posts[id].comments.push(comment)
    // document.getElementById('by').value = ''
    // document.getElementById('content').value = ''
    $scope.toggleComments()
  }

 $scope.clearForm = function(){
   document.getElementById('by').value = ''
   document.getElementById('content').value = ''
 }



  $scope.dropdown = '-votes'
  $scope.view = {}
  $scope.view.search = ''


  $scope.view.posts = [{
      id: 0,
      title: "I love Boulder",
      author: "Amy Briggs",
      image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/12dec8938220093eb7f1fdb8a9ce40b8-the-rocky-mountains.jpg?sharp=10&vib=20&w=1200",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.",
      date: new Date('October 15, 2016'),

      momentDate: moment().subtract(2, 'days').calendar(),
      votes: 2,
      commentView: false,
      comments: [
        {
        author: "Ranjit the cat",
        comment: "I'm hungry!",

      },
      {
        author: "Reena",
        comment: "Meow",

      }
      ]

    },
      {
        id: 1,
        title: "Let's go for a run!",
        author: "Amy Briggs",
        image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/12dec8938220093eb7f1fdb8a9ce40b8-the-rocky-mountains.jpg?sharp=10&vib=20&w=1200",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image.",
        date: new Date('October 23, 2016'),
        momentDate: moment().subtract(1, 'day').calendar(),
        votes: 2,
        commentView: false,
        comments: [
          {
            author: "Haleyur",
            comment: "You've got to be kidding me.",

          },
          {
            author: "James",
            comment: "Word.",

          }
        ]


    }]






}])
