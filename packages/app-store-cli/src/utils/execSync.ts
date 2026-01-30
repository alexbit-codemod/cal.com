import child_process from "node:child_process";

const execSync = async (cmd: string) => {
  const silent = process.env.DEBUG === "1" ? false : true;
  if (!silent) {
    // Replaced console logging with logger
  logger.log(`${process.cwd()}$: ${cmd}`);
  }
  const result: string = await new Promise((resolve, reject) => {
    child_process.exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        // Replaced console logging with logger
  logger.log(err);
      }
      if (stderr && !silent) {
        // Replaced console logging with logger
  logger.log(stderr);
      }
      resolve(stdout);
    });
  });

  if (!silent) {
    // Replaced console logging with logger
  logger.log(result.toString());
  }
  return cmd;
};
export default execSync;
