# Basekit Kerosene

## Viralbamboo Project Starter Kit

Internal Version 0 / Kerosene


### How to set up this project Basekit

1.  Install MAMP, or any other similar local server environment setup
1.  Install node.js & NPM
1.  Fix NPM's permission
1.  `$ npm install gulp -g` // Install Gulp globally
1.  `$ npm bower -g` // Install Bower globally
1.  In your Terminal, change directory to the project folder // Tip: type in `cd` and then drag the folder from Finder into Terminal - voila, you have the full directory path!
1.  Review settings in `package.json` , `gulpfile.js` , `.bowerrc` , `.bower.json` , `.gitignore` , `.htaccess` and `.editorconfig` to make sure that the settings are suitable for current project.
1.  `$ npm install` // Install project dependencies locally
1.  `$ bower install` // Install bower components
1.  `$ gulp` // And we are all set!

### Installation Notes
- We are building the front-end with PHP so a local server environment is a must. If MAMP's server link is http://localhost:8888/ then you are all set - if not, please modify the following section in gulpfile.js with the link of the program you use:

  ```
  gulp.task('serve',function(){
    browserSync.init({
      proxy: "localhost:8888/Basekit/app"
    });
  });
  ```

### Using the Kit
- `$ npm update` \& `$ bower update`: keep everything up to date
- Starting everything: `$ gulp`
- `Ctrl + C` to stop gulp

### Best Practices
- Please document changes to the project basekit.
- We have added \*.map files to .gitignore to avoid unnecessary conflicts.
- node_modules should always be ignored.

### View Full Documentation for this Basekit

- View [Documentation](docs/TOC.md)
