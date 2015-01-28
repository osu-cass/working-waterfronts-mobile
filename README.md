# WorkingWaterfronts

An [Oregon Sea Grant](http://seagrant.oregonstate.edu/) mobile app for exploring visitor-friendly work sites along the Oregon coast.

## Environment Configuration

This list isn't comprehensive currently.

- [Node.js](http://nodejs.org/)
	- [npm](https://www.npmjs.com/)
	- [Phonegap](http://phonegap.com/)
- [Sencha Cmd](http://www.sencha.com/products/sencha-cmd/)
- [Sencha Touch](http://www.sencha.com/products/touch) (included already)

### Windows

Install Sencha Cmd ([further instructions from BSG](https://gist.github.com/jhcarr/c0276b2978b8603c74e3)).

Install Node, then Command Prompt from any folder, do:

    > npm install -g cordova phonegap

### Mac/Unix/Linux

	$ sudo npm install -g cordova phonegap

# Contributing

1. Ensure that your environment is able to access the above required resources.
2. Navigate to your development space and run `git clone` on this repo.
3. Navigate into the new project directory and run commands from here.

## Building/Running Local (web)

	$ sencha app build
    $ sencha web start

## Building Native (iOS)

In order for native device functions to work, plugins must be manually added before building. The plugins are saved in config.xml as *Feature* tags:

```xml
<feature name="Geolocation">
	<param name="id" value="org.apache.cordova.geolocation" />
</feature>
```

**Install the plugins once when you first clone the project.**

	$ cd phonegap/
    $ phonegap restore plugins --experimental
	$ sencha app build native

The directory */phonegap/platforms/...* contains the Android APK and Xcode project for deploying to either platform.

**If there are plugin errors in the app's console log, you may need to delete the */phonegap/platforms/* and */phonegap/plugins/* folders, and repeat the above commands.**

## Linting

To search the javascript feature code for syntax errors, execute:

	$ cd syntax/
    $ npm install
    $ sh criticize-me.sh

# Directory Structure

*/.sencha/*
> Sencha configuration and internal resources. Avoid editing within.

*/app/*
> MVC javascript source that employs Sencha Touch API. Feature code within.

*/app.js*
> The app's entry point. Initializes whole-page views, controllers, etc.

*/index.html*
> The web page template that Sencha loads into.

*/phonegap/*
> Phonegap's config and build folder. Some files generated during builds.

*/resources/*
> Contains app icons, splash screens, images, and SASS.

*/syntax/*
> If your IDE does not have a JS linter, use this one to check your source code.

*/tests/*
> Jasmine unit tests for feature code. Open SpecRunner.html to run.

*/touch/*
> The Sencha Touch API source. Avoid editing within.

# Contributors

- Michael Freeman [@Free-BSG](https://github.com/free-bsg)
- Jacob Broderick [@jabroderick](https://github.com/jabroderick)
- Justin Carr [@jhcarr](https://github.com/jhcarr)
- Rob Mac [@maccelerated](https://github.com/maccelerated)
