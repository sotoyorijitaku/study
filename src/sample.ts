type Greeting = {
  greeting: string;
};

const greetings: Greeting[] = [
  {
    greeting: "Greeting",
  },
  {
    greeting: "あいさつ",
  },
];

greetings.forEach((element) => {
  console.log(element.greeting);
});
