/**
 * Created by yang on 2016/5/16.
 */
var path = require('path');
var fs = require('fs');
var util = require('util');

var del = function(files) {
    if (!files) {
        return;
    }

    if (!util.isArray(files)) {
        files = [files];
    }

    files.forEach(function(f) {
        _remove(f);
    });
};

del.empty = function(dirs) {
    if (!dirs) {
        return;
    }

    if (!util.isArray(dirs)) {
        dirs = [dirs];
    }

    dirs.forEach(function(f) {
        _remove(f, true);
    });
};

module.exports = del;

function _remove(file, empty) {
    if (!fs.existsSync(file)) {
        return;
    }
    var stat = fs.statSync(file);
    if (stat.isDirectory()) {
        var subs = fs.readdirSync(file) || [];
        subs.forEach(function(sub) {
            var s = path.join(file, sub);
            _remove(s);
        });

        if (!empty) {
            fs.rmdirSync(file);
        }
    } else {
        fs.unlinkSync(file);
    }
}
