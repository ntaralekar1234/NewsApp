const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(`${process.env.API_KEY}`);


const getNews = (req,res) => {
    newsapi.v2.topHeadlines({
        category: req.user.preferences,
      }).then(response => {
        res.status(200).send({status : true, data : response.articles});
      });
}

module.exports = {getNews}