let count = 5;

for (let i = 1; i <= count; i++) {
  for (let j = 1; j <= count - i; j++) {
    process.stdout.write(" ");
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log();
}
