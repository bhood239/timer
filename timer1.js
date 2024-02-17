const args = process.argv.slice(2);

for (const num of args) {
  const time = num * 1000;

  if (num > 0) {
    setTimeout(() => {
    process.stdout.write(`\x07`);
  }, time)
  }
}
