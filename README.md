# CITS3200 Conversations App [![Build Status](https://travis-ci.org/jackrobertscott/cits3200-conversation-app.svg?branch=stage)](https://travis-ci.org/jackrobertscott/cits3200-conversation-app)

### Team

![Team](https://raw.githubusercontent.com/jackrobertscott/cits3200-conversation-app/stage/TEAM.jpg)

[photo] From left to right:

- Alasdair Penman
- Simon de Sancha
- Ancil Thomas
- Daniel Cocks
- Jack Scott
- Simone Jennings

### About

This is an mobile application aimed at helping people cope with difficult conversations and avoid escalating their situations.

### Repository

The application is run on an angular ionic framework. The app is wrapped in a browser shell (Cordova), when installed on the mobile. This not only allows us to write the application using web based languages (JavaScript, HMTL, CSS) but also allows use to write only one implementation of the app and have it work on both IOS and Android phones.

The main code is located in the `app/main` folder.

There you will find the following folders:
* `templates`: The app's visuals, these include buttons and inputs etc.
* `controllers`: These give the templates functionality!
* `services`: These interact with the database and are injected to controllers.

To start the app (after you have installed the `npm` and `bower` dependencies) type: `gulp watch` in your command line.

### Server/Database

The server for the application is hosted and maintained by Google's Firebase. We decided to use this technology because of the limited extend of necessary server requirements, as well as the limited time period we had to develop the application. Firebase has provided us with a quick, easy to setup database hosted on a remote, secure server.
