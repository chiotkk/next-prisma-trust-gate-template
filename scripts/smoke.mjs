import { spawn } from "node:child_process";

const PORT = "3000";
const BASE = `http://127.0.0.1:${PORT}`;

function run(cmd, args) {
  return spawn(cmd, args, { stdio: "inherit", shell: true });
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const server = run("npm", ["run", "start"]);

  try {
    for (let i = 0; i < 20; i++) {
      try {
        const res = await fetch(`${BASE}/api/health/db`);
        if (res.ok) {
          console.log("✅ Smoke test passed");
          process.exit(0);
        }
      } catch {}
      await wait(500);
    }

    console.error("❌ Smoke test failed");
    process.exit(1);
  } finally {
    server.kill("SIGTERM");
  }
})();

