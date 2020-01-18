# Udacity's Evaluate News Articles NLP project.

## About
This project uses Aylien's API to evaluate articles using Natural Language Processing. In this app were are using the API to determine the polarity and Subjectivity of an article.

## Setup
In order to use this API you must have your own `API_ID` and `API_KEY` from Aylien. Check here for to sign up to receive your creds [Aylien signup](https://developer.aylien.com/signup)

Once you have your creds from Aylien create a `.env` file in your root directory and add your creds in the following format:
```
API_ID='********'
API_KEY='********************************'
```

## How to use
First we have to create a `dist` folder. This can be done be running the command `npm run build-prod`. Once the `dist` folder has been created run the command `npm run start`. This app runs on localhost:8000, navigate to http://localhost:8000/ in your browser.

##UI
!['UI'](/pics/ui.png)
To use enter an article/blog URL in the form input and click submit. The url will first go through a URL checker to ensure the URL is valid and is in the proper format, if not alert will pop up on screen "invalid url". If the URL is valid the UI will update with the info provided by the API.
!['UI API response'](/pics/ui_response.png)

##Testing
All function have been tested using `jest`.
To run your own text run the command `npm run test`
!['Jest Test'](/pics/test.png)
