import { execSync } from "node:child_process";

type Err = {
  stdout: string;
};

const diff = execSync(`git diff --name-only origin/main HEAD`).toString();

const files = diff
  .trim()
  .split("\n")
  .map((file) => file.trim())
  .filter(Boolean)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"));

// Replaced console logging with logger
  logger.log("ℹ️ Changed files:");
// Replaced console logging with logger
  logger.log(files.map((str) => `  - ${str}`).join("\n"));

try {
  // Replaced console logging with logger
  logger.log("⏳ Checking type errors..");
  execSync("yarn tsc --noEmit", {});

  // Replaced console logging with logger
  logger.log("😻 No errors!");
} catch (_err) {
  const err = _err as Err;

  const output = err.stdout.toString() as string;

  const filesWithTypeErrors = files.filter((file) => output.includes(file));

  if (!filesWithTypeErrors.length) {
    // Replaced console logging with logger
  logger.log(`🎉 You haven't introduced any new type errors!`);
    process.exit(0);
  }
  // Replaced console logging with logger
  logger.log("❌ ❌ ❌ You seem to have touched files that have type errors ❌ ❌ ❌");
  // Replaced console logging with logger
  logger.log("🙏 Please inspect the following files:");
  // Replaced console logging with logger
  logger.log(filesWithTypeErrors.map((str) => `  - ${str}`).join("\n"));

  process.exit(1);
}
