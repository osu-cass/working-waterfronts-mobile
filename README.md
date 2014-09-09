# SeaGrant_Proto

A prototype mobile app implementing features common to multiple OSU Sea Grant projects.

# Project Requirements

- [Sencha Touch](http://www.sencha.com/products/touch)
- [Sencha Cmd](http://www.sencha.com/products/sencha-cmd/)
- [Phonegap](http://phonegap.com/)
- Android and/or iOS testing platform
- [npm](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)

# Contributors

1. Ensure that your environment is able to access the above required resources.
2. Navigate to your development space and run `git clone` on this repo.
3. Navigate into the new project directory and run `sencha app build` to compile project resources.

## Linting

1. Navigate to the root of the project directory and run `npm install`.
2. Navigate to the ./syntax directory and run criticize-me.sh

# Structure

*./.sencha*  
Sencha configuration and internal resources.

*./app*  
The MVC components of the SeaGrant_Proto project.

*./jasmine-standalone*  
Unit testing resources. Unit tests are currently unimplemented.

*./phonegap*  
Phonegap's app compilation resources. Custom splash screen is configured here instead of ./app.

*./resources*  
Compiled CSS, visual assets.

*./siesta*  
Siesta UI tests and resources.

*./syntax*  
Javascript linting resources.

*./touch*  
Sencha Touch configuration and internal resources.

# Contributors To Date  
Michael Freeman  
Jacob Broderick  
Justin Carr