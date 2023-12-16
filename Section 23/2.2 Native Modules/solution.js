import { writeFile, readFile } from "fs";

writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
