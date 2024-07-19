// _ _ _ _ _ *
// _ _ _ _ * *
// _ _ _ * * *
// _ _ * * * *
// _ * * * * *

// _ * * * * *
// _ _ * * * *
// _ _ _ * * *
// _ _ _ _ * *
// _ _ _ _ _ *

// _ _ _ _ _ *
// _ _ _ _ * *
// _ _ _ * * *
// _ _ * * * *
// _ * * * * *
// _ _ * * * *
// _ _ _ * * *
// _ _ _ _ * *
// _ _ _ _ _ *

function pattern1() {
  for (let i = 1; i <= 4; i++) {
    for (let j = 5; j >= i; j--) {
      process.stdout.write(' ');
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write('*');
    }
    console.log();
  }
}

function pattern2() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(' ');
    }
    for (let k = 5; k >= i; k--) {
      process.stdout.write('*');
    }
    console.log();
  }
}

pattern1();
pattern2();
