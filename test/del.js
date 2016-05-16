/**
 * Created by yang on 2016/5/16.
 */
var del = require('../index.js');

describe('del', function() {
    it('del file', function() {
        del('E:/test/test-4.jpg');
    });
    it('del folder', function() {
        del('E:/test/src');
    });
    it('del multi files', function() {
        del(['E:/test/20160403.txt', 'E:/test/20160404.txt', 'E:/test/s1']);
    });

    it.only('empty', function() {
        del.empty('E:/test/s3')
    })
});