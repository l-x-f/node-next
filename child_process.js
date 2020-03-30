var { exec, execFile } = require("child_process");
var path = ";user input";
exec("node -v", function(error, stdout, stderr) {
  console.log("stdout: " + stdout);
  console.log("stderr: " + stderr);
  if (error !== null) {
    console.log("exec error: " + error);
  }
});

exec("ls -l " + path, function(err, data) {
  console.log(data);
});
