var StartController = {
  Index: function(req, res) {
    res.render('start/index'), {title: 'Moving game'};
  },
  Play: function(req, res) {
    res.render('start/play'),  {title: 'Moving game'};
  },
  Leaderboard: function(req, res) {
    res.render('start/leaderboard'), {title: 'Moving game'};
  }

};

module.exports = StartController;
