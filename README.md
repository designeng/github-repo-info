###Single-Page Application "Github repo contributors and forks info"

###Description
Tracking repo forks and contributors info.

###Demo
SPA deployed as [github-repo-info](https://github-repo-info.herokuapp.com) on heroku.

###Development
+ Client built on the top of Marionette.js `2.4.2v`.

+ Server api: Express.js 4, Sequelize ORM 3v, Sqlite3

+ After installing npm and bower dependencies (`npm install`, `bower install`), run `grunt` default task command for client `.coffee` compilation. 

+ Grunt task `grunt nodemon` starts express server, so just open in your favorite browser `http://localhost:8080`. All api `.js` files under `nodedemon` watch till the development process.

###Structure description
####Client

+ Routes

<table>
<tr>
  <th>Route</th>
  <th>Description</th>
</tr>
<tr>
  <td>contributors </td>
  <td>Contributors info displayed in list component</td>
</tr>
<tr>
  <td>forks</td>
  <td>Forks info displayed in list component</td>
</tr>
</table>

+ Components

<table>
<tr>
  <th>Component name</th>
  <th>Description</th>
  <th>Notes</th>
</tr>
<tr>
  <td>preloader</td>
  <td>Simple preloader with `hide` and `show` methods to display loading process</td>
  <td> - </td>
</tr>
<tr>
  <td>list</td>
  <td>Vertical expandable list. One of the subviews (ContributorItemView, ForkItemView) will be choosed for info depending on the model fields and current route.</td>
  <td>Shared behavior used by ContributorItemView and ForkItemView.</td>
</tr>
<tr>
  <td>swither</td>
  <td>Drop-down vertical control for switching between routes (contributors, forks)</td>
  <td>SwitcherView provide `setSwitcherState` public method for adjustment title text if route (location hash) was changed by hand in the browser address bar.</td>
</tr>
</table>

+ Utils and buisness logic objects

<table>
<tr>
  <th>Object name</th>
  <th>Description</th>
  <th>Notes</th>
</tr>
<tr>
  <td>AjaxRequest</td>
  <td>Wrapper for Jquery.ajax</td>
  <td> - </td>
</tr>
<tr>
  <td>ClientIp</td>
  <td>Client ip for preventing repeated likes/dislikes</td>
  <td>ClientIp is defined on client side for simplicity via <a href="https://api.ipify.org">ipify</a> service (TODO: define it with <a href="https://github.com/un33k/node-ipware">node-ipware</a> middleware on the server side).</td>
</tr>
<tr>
  <td>Storage</td>
  <td>To avoid global vars we store recieved clientIp in storage object.</td>
  <td> - </td>
</tr>
</table>

+ `requireConfig` and `requireEnter` just two parts of `main` file and assembled together with grunt task during the development process. `requireEnter` is logic enter point for our one-page application.

+ Marionette.TemplateCache.prototype.compileTemplate was overridden because Handlebars template engine is used. 

+ Provided implementation for `Marionette.Behaviors.behaviorsLookup` to point Marionette where we stored shared Behaviors.

+ AOP approach provided by [meld.js](https://github.com/cujojs/meld) used for separation of concerns between methods within a class.

+ [TemplateHelpers](http://marionettejs.com/docs/v2.4.2/marionette.view.html#viewtemplatehelpers) used for calculating and rendering fields not presented by item view model.

+ Templates with `.html` extention loaded by [requirejs-hbs](https://github.com/epeli/requirejs-hbs) plugin. It depends on [require-text](https://github.com/requirejs/text) plugin.

+ Routes "contributors", "forks" synchronized with component `list` content.

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