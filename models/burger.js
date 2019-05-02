

var orm = require("../config/orm.js");

var burger = {
    displayAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertion: function(burgername, cb) {
        orm.insertOne(burgername, function (res) {
            cb(res);
        })
    },
    devour: function(burgername, cb) {
        orm.updateOne(burgername, function(res) {
            cb(res);
        })
    }

}    

module.exports = burger; 
