import { execSync } from "child_process";
import fs from "fs";

const date = process.argv[2];
let folderPath;

if (date) {
  folderPath = `tasks/${date}`;
} else {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  folderPath = `tasks/${year}-${month}-${day}`;
}

if (!fs.existsSync(`${folderPath}`)) {
  console.log(`Nie znaleziono folderu ${folderPath} 🤔`);
} else {
  execSync(`jest ${folderPath}/index.test.ts`, { stdio: "inherit" });
}
