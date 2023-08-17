initialise the project 'npm init'
INSTALL PACKAGES 
'npm i express dotenv mongoose && npm i nodemon morgan -D'

in package.json we set up 
 "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
In app.js we setup express to run on a PORT from .env