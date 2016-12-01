var browserSync = require('browser-sync');

browserSync({
    open: false,
    port: 9000,
    server: {
        baseDir: ['.'],
        middleware: function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
        }
    }
});
