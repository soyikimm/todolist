const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


//math.random()은 0과 1사이의 랜덤한 숫자를 가져옴.
//math.floor() 정수를 반환합니다.

const quotes = [
    {
      quote: "시작이 반이다. ",
      author: " 아리스토텔레스",
    },
    {
      quote: "인류에게는 정말로 효과적인 무기가 하나있다. 바로 웃음이다. ",
      author: " 마크 트웨인",
    },
    {
      quote:"행복은 성취의 기쁨과 창조적 노력이 주는 쾌감 속에 있다. ",
      author: "프랭클린 D. 루스벨트",
    },
    {
      quote: "무위(無爲)라는 상태는 게으르지만 기분 좋기도 하다. ",
      author: "플라니 2세",
    },
    {
      quote: "어떤 것이 당신이 계획대로 되지 않는 다고 해서 그것이 불필요한 것은 아니다. ",
      author: "토마스 A. 에디슨",
    },
    {
      quote: "신중하지 않으면 찾아온 기회를 놓치기 일쑤이다. ",
      author: "퍼블릴리어스 사이러스",
    },
    {
      quote: "현재가 과거와 다르길 바란다면 과거를 공부하라. ",
      author: "[바뤼흐 스피노자]",
    },
    {
      quote: "너는 네가 길들인 것에 대해 영원히 책임져야 하는거야. ",
      author: " - 생텍쥐페리",
    },
    {
      quote: "글은 사람이다. ",
      author: " - 뷔퐁",
    },
    {
      quote: "최고의 증거는 단연 경험이다. ",
      author: " - 프랜시스 베이컨",
    },
  ];
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
//quotes의 명언을 다 셀수 없어서 length를 적어주면 알아서 세줌.
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;