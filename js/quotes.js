const quotes = [
  {
    quote: "강렬한 사랑은 판단하지 않는다. 주기만 할 뿐이다",
    author: "-마더 테레사-",
  },
  {
    quote: "중요한 것은 사랑을 받는 것이 아니라 사랑을 하는 것이었다.",
    author: "-윌리엄 서머셋 모옴-",
  },
  {
    quote: "겁쟁이는 사랑을 드러낼 능력이 없다. 사랑은 용기있는 자의 특권이다.",
    author: "-마하트마 간디-",
  },
  {
    quote:
      "당신을 만나는 모든 사람이 당신과 헤어질 때는 더 나아지고 더 행복해질 수 있도록 하라.",
    author: "-마더 테레사-",
  },
  {
    quote:
      "인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.",
    author: "-장 폴 리히터-",
  },
  {
    quote: "사랑은 눈으로 보는 것이 아니라 마음으로 보는 것이다.",
    author: "-윌리엄 셰익스피어-",
  },
  {
    quote:
      "긴 인생은 충분히 좋지 않을 수도 있다. 그러나 좋은 인생은 충분히 길다.",
    author: "-벤자민 프랭클린-",
  },
  {
    quote: "나이가 성숙을 보장하지는 않는다.",
    author: "-라와나 블랙웰-",
  },
  {
    quote: "모래가 손가락 사이로 흘러내리듯 시간은 나로부터 달아난다.",
    author: "-불경-",
  },
  {
    quote:
      "과거에 매달리지 말고 미래를 원망하지도 말라. 과거는 이미 사라졌고 미래는 아직 오지 않았다.",
    author: "-불경-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
