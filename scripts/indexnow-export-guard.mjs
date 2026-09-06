import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const key = "54b3b5449cab247db222bc6347df4bc3";
const relative = `${key}.txt`;
const exported = path.join(root, "out", relative);

if (!fs.existsSync(exported)) {
  throw new Error(`Static export missing IndexNow verification file: ${relative}`);
}

const contents = fs.readFileSync(exported, "utf8").trim();
if (contents !== key) {
  throw new Error("Exported IndexNow verification file content does not match the configured key");
}

console.log("IndexNow export guard PASS");
