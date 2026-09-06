import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const key = "54b3b5449cab247db222bc6347df4bc3";
const keyFileName = `${key}.txt`;
const keyFile = path.join(root, "public", keyFileName);

if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
  throw new Error("IndexNow key does not satisfy protocol format requirements");
}

if (!fs.existsSync(keyFile)) {
  throw new Error(`Missing IndexNow verification file: public/${keyFileName}`);
}

const keyContents = fs.readFileSync(keyFile, "utf8").trim();
if (keyContents !== key) {
  throw new Error("IndexNow verification file content must exactly match its key filename");
}

console.log("IndexNow source guard PASS");
