"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var index_1 = __importDefault(require("./demo/index"));
var server = (0, http_1.createServer)(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");
    var demo = new index_1.default("zhantao", "chen");
    res.end(demo.greeter());
});
var hostname = "127.0.0.1";
var port = 4000;
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
//# sourceMappingURL=main.js.map