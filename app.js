const redditClone = angular.module("redditClone", [])

redditClone.controller("MainController", ['$scope', function($scope) {
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
    console.log($scope.newPost);
    var post = angular.copy($scope.newPost)
    $scope.posts.push(post)
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

  $scope.commentView = false
  $scope.toggleComments = function() {
    if($scope.commentView === false) {
      $scope.commentView = true
    } else {
      $scope.commentView = false
    }
  }

  // $scope.clearComments =function() {
  //   this.formComment.author = ''
  //   this.formComment.comment = ''
  // }

  function createId() {
    let id = $scope.posts.length
    return id
  }

  $scope.upvote = function(post) {
    post.votes++
  }
  $scope.downvote = function(post) {
    post.votes--
  }

  $scope.Post = function() {
    this.id = createId()
    this.date = new Date()
    this.votes = 0
    this.upvote = function() {
      this.votes += 1
    }
    this.downvote = function() {
      this.votes -= 1
    }
    this.comments = []
    this.submitCommentForm = function() {
      var newComment = angular.copy(this.formComment)
      // newComment.date = moment().calendar(referenceTime);
      newComment.date = new Date()
      this.comments.push(newComment)


      // $scope.clearComments()
      $scope.toggleComments()


    }
  }

  $scope.newComment = {}
  $scope.submitComment = function(post) {
    console.log(post.id);
    let id = post.id
    var comment = angular.copy($scope.newComment)
    $scope.posts[id].comments.push(comment)
    $scope.newComment = {}
  }

  // $scope.clearComments = function(){
  //   formComment = null
  // }

  $scope.posts = [{
      id: 0,
      title: "I love Boulder",
      author: "Amy Briggs",
      image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/12dec8938220093eb7f1fdb8a9ce40b8-the-rocky-mountains.jpg?sharp=10&vib=20&w=1200",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.",
      date: new Date(),
      // date: moment().calendar(referenceTime)
      votes: 2,
      comments: [
        {
        author: "Ranjit the cat",
        comment: "I'm hungry!",
        date: new Date()
      },
      {
        author: "Reena",
        comment: "Meow",
        date: new Date()
      }
      ]

    },
      {
        id: 1,
        title: "Let's go for a run!",
        author: "Amy Briggs",
        image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/12dec8938220093eb7f1fdb8a9ce40b8-the-rocky-mountains.jpg?sharp=10&vib=20&w=1200",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image.",
        date: new Date(),
        // date: moment().calendar(referenceTime)
        votes: 2,
        comments: [
          {
            author: "Haleyur",
            comment: "You've got to be kidding me.",
            date: new Date()
          },
          {
            author: "James",
            comment: "Word.",
            date: new Date()
          }
        ]


    }]



      $scope.submitCommentForm = function() {
        var newComment = this.formComment
        newComment.date = new Date()
        // newComment.date = moment().calendar(referenceTime);
        this.comments.push(newComment)

        // this.formComment.author = ''
        // this.formComment.comment = ''


        // $scope.clearComments()
        // $scope.toggleComments()
        // $scope.post.commentForm.$setPristine()
      }
      // comments: [{
      //     author: "Ranjit the cat",
      //     comment: "I'm hungry!",
      //     date: new Date()
      //   },
      //
      //   {
      //     author: "Ranjit the cat",
      //     comment: "I'm hungry!",
      //     date: new Date()
      //   },
      //
      //   {
      //     author: "Ranjit the cat",
      //     comment: "I'm hungry!",
      //     date: new Date()
      //   }
      // ]
    // },

    // {},
    // {}




}])
