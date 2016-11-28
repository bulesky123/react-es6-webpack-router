/**
 * Created by zhoufei on 2016/11/28.
 */
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var webpack=require('webpack');
var config=require('./webpack.config');
var app = express();
var compiler=webpack(config);
//生成文件在内存中
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

var COMMENTS_FILE = path.join(__dirname+'/src/assets/mockCtrl', 'data.json');
//path.join将多个路径结合在一起，并转换为标准化的路径：
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/getdata', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/sentdata', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var comments = JSON.parse(data);
        var newComment = {};
        comments.push(newComment);
        fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(comments);
        });
    });
});
app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
//图片
app.get(/^(\/\w+)*\/(\w+)\.(png|gif|jpg)(\?\S*)?$/, function(req, res) {
    var url = req.url;
    res.sendFile(path.join(__dirname,url ));
});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port'));
});
