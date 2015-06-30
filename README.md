###Single-Page Application "Github repo contributors and forks info"

###Description
Tracking repo forks and contributors info.

###Demo
https://github-repo-info.herokuapp.com

###Development
+ Client built on the top of Marionette.js.

+ Server api: Express.js 4, Sequelize ORM 3v, Sqlite3

+ After installing npm and bower dependencies (`npm install`, `bower install`), run `grunt` default task command for client `.coffee` compilation. 

+ Grunt task `grunt nd` starts express server, so just open in your favorite browser `http://localhost:8080`. All api `.js` files under `nodedemon` watch till the development process.

###Structure description
####Client
+ 

####Server
+ Api
| Route                     | METODS        |
| -------------             | ------------- |
| /api/likes                | POST, GET     |
| /api/likes/:ip/:type/:id  | GET           |
| /api/likes/:type/:id      | GET           |


###Browsers compatibility
Tested in Chrome (v42), Safari (v7.0), Firefox (v37).

###Issues
About all found bugs please report [issues](https://github.com/designeng/github-repo-info/issues).