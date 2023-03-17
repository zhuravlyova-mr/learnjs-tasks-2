function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve("Done"), ms);
  });
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));