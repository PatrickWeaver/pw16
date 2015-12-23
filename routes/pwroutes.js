var express = require('express');

var routes = function(Project){

  var pwRouter = express.Router();

  pwRouter.route('/')

    .post(function(req, res){
      var project = new Project(req.body);

      project.save();
      res.status(201).send(project);

    })
    .get(function(req,res){

        var query = {};
        if(req.query.name)
          {
            query.name = req.query.name;
          }
        Project.find(query, function(err, projects){
          if(err) {
            res.status(500).send(err);
          } else {
            res.json(projects);
          };
        });
    });

  pwRouter.route('/:projectId')
    .get(function(req,res){
      Project.findById(req.params.projectId, function(err,project){
        if(err)
          res.status(500).send(err);
        else
          res.json(project);
      });
    });
  return pwRouter;
};

module.exports = routes;