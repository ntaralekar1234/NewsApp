const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(`${process.env.API_KEY}`);


const getNews = (req,res) => {
  if(req.user){
    newsapi.v2.topHeadlines({
      category: req.user.preferences,
    }).then(response => {
      return res.status(200).send({status : true, data : response.articles});
    });
  }
  else {
    return res.status(403).json([{msg: req.message}]);
  }
}

module.exports = {getNews}