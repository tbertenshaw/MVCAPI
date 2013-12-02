MVCAPI
======

MVCAPI

UPDATE: following suggestions from http://stackoverflow.com/a/20151805/600188  i've modified the app.js to reflect.

Project to show issues with using a webAPI controller within a MVC project to service clientside requests (angular.js)

If run via IIS the app/app.js the baseurl variable needs commenting out.

The Filters/APIAuthorizeFilter shows one suggestion with commented out code.

The App_Start/Startup.Auth.cs doesn't detect if its a ajax method or not. (Brock Allen suggestion) I think this method may be depricated by upgrades to the webapi functionality?



