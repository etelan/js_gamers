var StartController = {
  Index: function(req, res) {
    res.render('start/index'), {title: 'Moving game'};
  },
  Play: function(req, res) {
    res.render('start/play'),  {title: 'Moving game'};
  },
  Leaderboard: function(req, res) {
    res.render('start/leaderboard'), {title: 'Moving game'};
  },
  Death: function(req, res) {
    res.render('start/game_over'), {title: 'Moving game'};
  },
  Level2: function(req, res) {
    res.render('start/level2'), {title: 'Moving game'};
  },
  Level3: function(req, res) {
   res.render('start/level3'),  {title: 'Moving game'};
  },
  Level4: function(req, res) {
    res.render('start/level4'),  {title: 'Moving game'};
  }

};

module.exports = StartController;
