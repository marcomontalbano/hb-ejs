Harp Boilerplate • ejs
======================

A Harp boilerplate that uses `.ejs` instead of `.jade`.

It also include a test suite with Jasmine.


Get started
-----------

Harp is the static web server with built-in preprocessing. [Get started with Harp](http://harpjs.com/docs/quick-start).

```sh
# install harp
sudo npm install -g harp

# then initialize the boilerplate
harp init -b marcomontalbano/hb-ejs myproject

# run server
harp server myproject
```

Now visit [localhost:9000](http://localhost:9000) in your browser.



Full installation
-----------------

```sh
# install needed packages
sudo npm install -g harp
#sudo npm install -g bower
sudo npm install -g gulp

# then initialize the boilerplate
harp init -b marcomontalbano/hb-ejs myproject
cd myproject

# install dependencies
npm install
#bower install

# run tests
gulp test

# run server
harp server

```


Further Reading
---------------

### Node.js

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Node.js can be downloaded for Windows, Mac and Linux at [nodejs.org/en/download/](https://nodejs.org/en/download/).

> [nodejs.org](https://nodejs.org/)

### Bower

**At the moment Bower doesn't work with the command `harp compile`. Do not use it.**

Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

> [bower.io](http://bower.io/)

##### Getting started with Bower

```sh
sudo npm install -g bower
```

Bower is useful to load 3rd party libraries like jQuery, AngularJS and every other frontend frameworks.

`jQuery` and `uikit` are imported in this boilerplate just for the demo.
You are free to use your prefered framework changing the configuration in `bower.json`.

After done it just run:

```sh
bower install
```

### gulp.js

Gulp is a task runner which uses Node.js.

I have chosen `gulp` instead of `Grunt`. Some reasons are clearly explained [here](http://slides.com/contra/gulp#).

> [gulpjs.com](http://gulpjs.com/)

##### Getting started with gulp.js

Gulp is used in this boilerplate for testing reasons.

If you don't want to test your javascript code (you should do it), just do not install it.

```sh
sudo npm install -g gulp

gulp test
```


License
-------

[The MIT License (MIT)](LICENSE.md)

Copyright © [Marco Montalbano](https://marcomontalbano.com)
