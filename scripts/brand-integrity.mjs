import fs from "node:fs";
import crypto from "node:crypto";

const expected = {
  "public/brand/istriade/01-istriade-symbol-color.svg": "ee77438825d6fbb171e83da1b04a2c4d9ae1e8d880b878a42e5740ab325843d6",
  "public/brand/istriade/04-istriade-lockup-horizontal-outlined.svg": "353505dc1a2f44482caf19e47977f42db1ea5089d386f19b154107843056f7fd",
  "public/brand/istriade/09-istriade-lockup-horizontal-ink-outlined.svg": "9923e7113835943ca518d4c002fcb5c693714b84a81977fd8b9191abc94a350d",
  "public/brand/istriade/07-istriade-favicon.svg": "5be4dd4d8a07fd2fc00b5e86369d05a68f58fb2613b26a7dc1ccbccc3e29073e",
};

for (const [file, expectedHash] of Object.entries(expected)) {
  const actual = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
  if (actual !== expectedHash) {
    console.error(`Brand integrity failed for ${file}\nexpected ${expectedHash}\nactual   ${actual}`);
    process.exit(1);
  }
}
console.log("Canonical ISTRIADE brand integrity check passed.");
