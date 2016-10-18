# CITS3200 Conversation App

![Team](https://raw.githubusercontent.com/jackrobertscott/cits3200-conversation-app/stage/TEAM.jpg)

### Front-end (Client) Development

99% of all the code to develop is in the `client/app/main` folder.

There you will find the following folders:
* `templates`: The app's visuals, these include buttons and inputs etc.
* `controllers`: These give the templates functionality!
* `services`: These interact with the database and are injected to controllers.

To start the app (after you have installed the npm and bower dependencies) type: `gulp watch` in your command line.

### Back-end (Server) Development

The back-end is an API so does NOT have any *view* files (like you might see on some internet examples).

99% of all code to develop is in the `server/app` folder.

There are the following folders:
* `models`: These are the schema for the database objects.
* `controllers`: These receive api calls, manipulate the models and return data.

To run the server, you will need to have MongoDB installed and running. Once it is installed, you can run MongoDB with `mongod` in your command line. Then you can start the server, in a separate terminal window, with `npm start`.
