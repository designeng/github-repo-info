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

<table>
<tr>
  <th>Route</th>
  <th>HTTP METODS</th>
  <th>Controller method</th>
</tr>
<tr>
  <td>/api/likes</td>
  <td>POST, GET</td>
  <td>LikeController.get</td>
</tr>
<tr>
  <td>/api/likes/:ip/:type/:id</td>
  <td>GET</td>
  <td>LikeController.isAbleToVoice</td>
</tr>
<tr>
  <td>/api/likes/:type/:id</td>
  <td>GET</td>
  <td>LikeController.getPublicRate</td>
</tr>
</table>

###Browsers compatibility
Tested in Chrome (v42), Safari (v7.0), Firefox (v37).

###Issues
About all found bugs please report [issues](https://github.com/designeng/github-repo-info/issues).