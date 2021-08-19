import { app } from './app';

async function main() {
  try {
    await app.listen(1444, '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();

if (process.env.TS_NODE_DEV) {
  process.on('SIGTERM', () => {
    process.exit(1);
  });
}
