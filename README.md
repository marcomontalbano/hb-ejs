# Harp Boilerplate • ejs

A Harp boilerplate that uses `.ejs` instead of `.jade`.


## Node.js

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Node.js can be downloaded for Windows, Mac and Linux at [nodejs.org/en/download/](https://nodejs.org/en/download/).

> [nodejs.org](https://nodejs.org/)


## Bower

Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

> [bower.io](http://bower.io/)

#### Getting started with Bower

```sh
sudo npm install -g bower
```

Bower is useful to load 3rd party libraries like jQuery, AngularJS and every other frontend frameworks.

`jQuery` and `uikit` are imported in this boilerplate just for the demo.
You are free to import your prefered framework changing the configuration in `bower.json`.

After done it just run:

```sh
bower install
```


## Get started with harp

Harp is the static web server with built-in preprocessing. [Get started with Harp](http://harpjs.com/docs/quick-start).

```sh
sudo npm install -g harp
harp init -b mmontalbano/hb-ejs myproject
harp server myproject
```

Now visit [localhost:9000](http://localhost:9000) in your browser.


## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 [Marco Montalbano](http://marcomontalbano.com)
