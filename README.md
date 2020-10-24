# Note-Taker-Server
A collection of scripts needed to run a note taking server. Intended use on a heroku hosted server.

## Description

I wanted a website I could host separate from my own computer. That I could access remotely when away from home or on a mobile device. The website stores notes with a title and leaves them server side. I needed the server to be live and dynamically append and delete its information.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i

npm i express

npm i -g nodemon 

npm i fs
```
I install nodemon for local live testing. fs just in case it failed to install.
## Usage

This is set of server scripts to run on a heroku hosted server for note taking purposes. 
You are welcomed by the homepage by default to prevent pocket editting. Editing is done on the center of the page. Once text is added a save icon will appear on the upper right to save your work. Pushing the pencil icon will create a new note and or empty any unsaved work. The side bar stores links the notes by title and moves the to main of the page as read only. The trash can icon will delete said note. 

  
## Contributing

A live version is hosted here demo here https://note-taker-server.herokuapp.com or visit the repo https://github.com/violettaval/Note-Taker-Server

## Tests

To run tests, run the following command:

```
npm run test
```

## Questions

If you have any questions about the repo, open an issue or contact me directly at violetvalencia@gmail.com. You can find more of my work at [violettaval](https://github.com/violettaval/).

