const redditClone = angular.module("redditClone", ['ngAnimate'])

redditClone.controller("MainController", ['$scope', '$log', function($scope, $log) {

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

  $scope.toggleComments = function(post) {
    $log.info('post================', post);
    post.commentView = !post.commentView

  }

  function createId() {
    let id = $scope.view.posts.length
    return id
  }

  $scope.upvote = function(post) {
    $log.info('post============', post)
    post.votes++
  }
  $scope.downvote = function(post) {
    $log.info('post============', post)
    post.votes--
  }

  $scope.newComment = {}
  $scope.submitComment = function(post) {
    console.log(post.id);
    let id = post.id
    var comment = angular.copy(post.newComment)
    $scope.view.posts[id].comments.push(comment)
    post.newComment = {}
    $scope.toggleComments()
  }

  $scope.clearForm = function() {
    document.getElementById('by').value = ''
    document.getElementById('content').value = ''
  }

  $scope.dropdown = '-votes'
  $scope.view = {}
  $scope.view.search = ''


  $scope.view.posts = [{
    id: 0,
    title: "Western States 100",
    author: "Amy Briggs",
    image: "http://www.dirtproof.co.uk/wp-content/uploads/2014/07/Western-States-100M-2014-135.jpg",
    description: "The Western States ® 100-Mile Endurance Run is the world’s oldest 100-mile trail race. Starting in Squaw Valley, California near the site of the 1960 Winter Olympics and ending 100.2 miles later in Auburn, California, Western States, in the decades since its inception in 1974, has come to represent one of the ultimate endurance tests in the world.",
    date: new Date('October 15, 2016'),

    momentDate: moment().subtract(2, 'days').calendar(),
    votes: 8,
    commentView: false,
    comments: [{
      author: "Anton K",
      comment: "Crushed that!",

    }, {
      author: "Scotty K",
      comment: "Listen to Ten Junk Miles for updates on last year's race!",

    }]

  }, {
    id: 1,
    title: "Zion 100",
    author: "Ethan Matyas",
    image: "https://www.ultrarunning.com/wp-content/uploads/2014/04/Zion-12-600x336.jpg",
    description: "A challenging, scenic run through the southern Utah desert adjacent to Zion National Park. 4 distances will be offered in 2015- a Half Marathon, 50k, 100k, and a 100 miler. The 100 miler and 100k will be run on Friday, with the half marathon and 50k on Saturday. The 100 mile course includes 4 steep climbs onto mesas that offer incredible views of the varied geological features of the area.",
    date: new Date('October 23, 2016'),
    momentDate: moment().subtract(1, 'day').calendar(),
    votes: 3,
    commentView: false,
    comments: [{
      author: "Haleyur",
      comment: "You've got to be kidding me.",

    }, {
      author: "Sam T",
      comment: "Beautiful!  Want to do that one.",

    }]
  }, {
    id: 2,
    title: "Vermont 100",
    author: "Diane Eastman",
    image: "http://levelrenner.com/wp-content/uploads/2015/07/emily-levan-vt-100k-ben-kimball-7.29.151.jpg",
    description: "The Vermont 100 Endurance Race is one of the original 100 mile runs in the USA and a part of the Grand Slam Series of Ultrarunning. Each year, 300 runners attempt to finish this hilly race over beautiful Vermont back roads and trails under the 30 hour cutoff point, and a well-trained few finish in under 24 hours. The race proceeds support Vermont Adaptive.",
    date: new Date('September 12, 2016'),
    momentDate: moment().subtract(1, 'day').calendar(),
    votes: 6,
    commentView: false,
    comments: [{
        author: "Skip",
        comment: "Thatta girl!",

      }

    ]


  }, {
    id: 3,
    title: "Ultra Trail Mont Blanc",
    author: "Matt Menacher",
    image: "http://jogging.lavenir.net/wp-content/uploads/2013/12/UTMB9.jpg",
    description: "Mountain race, with numerous passages in high altitude (>2500m), in difficult weather conditions (night, wind, cold, rain or snow), that needs a very good training, adapted equipment and a real capacity of personal autonomy.",
    date: new Date('October 26, 2016'),
    momentDate: moment().subtract(1, 'day').calendar(),
    votes: 15,
    commentView: false,
    comments: [{
      author: "Amy",
      comment: "Amazeballs.",

    }, {
      author: "Sam T",
      comment: "Holy Moly!"

    }]


  }]






}])
