//setup:
//step1: install bach-code: npm i express
//step2: npm init -y,
//step3: "type":"module", ---json
//step4: node file-name



import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
