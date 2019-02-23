"use strict";
exports.__esModule = true;
var child = require("child_process");
var cmd = "ffmpeg";
var args = ["-i", "video.mp4", "-vf", "scale=320:240", "output.mp4"];
var proc = child.spawn(cmd, args);
proc.on("close", function () {
    console.log("finished");
});
