# Phonegap

## Platforms
This folder contains the built platform(s) specified by the build files. To add our splash screen we went into the res\drawable folder and saved our splash screen image there as a .png. Then we went into the src\com\domain\SeaGrant_Proto\SeaGrant_Proto.java file and added the line:   super.setIntegerProperty("splashscreen", R.drawable.splash);   as well as updated the loadUrl from:   super.loadUrl("file:///android_asset/www/index.html");   to: super.loadUrl("file:///android_asset/www/index.html", 4000);