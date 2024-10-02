import { exec, ChildProcess } from "child_process";

let process: null | ChildProcess;

const start = () => {
  process = exec("pm2 start ./src/app/api/atlas/index.ts", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting Atlas: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }

    console.log(`Atlas output: ${stdout}`);
  });
};

const stop = async () => {
  await exec("pm2 delete all -f");
};

export async function POST() {
  try {
    await stop();
    start();
  } catch (error) {
    console.log(error);
  }

  return Response.json({});
}
