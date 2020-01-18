
function apiRes(urlInput, res) {

  //Remember to create a .env file with your API Creds. Refer to README for more info
  const dotenv = require('dotenv');
  dotenv.config();
  var aylien = require('aylien_textapi');
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });


    textapi.sentiment({
      'url': urlInput.body.url
    }, function(error, response) {
        res.send(response)
    });
}

exports.apiRes = apiRes;
