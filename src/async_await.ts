const sleepAsyncAwait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const greetAsyncAwait = async () => {
  console.log("おやすみ");

  try {
    await sleepAsyncAwait(2000);
    console.log("起きた");
    console.log("おはよう！");
  } catch (err) {
    console.error("睡眠例外です：", err);
  }
};

greetAsyncAwait();
