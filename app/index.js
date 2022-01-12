import { card, createCard } from "./card.js";

let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d5cc1aabc64f4477afd898614ca734ba";
const news = (data) => {
  const search = document.getElementById("search");

  search.addEventListener("input", () => {
    let searchData = data.filter((sd) => {
      let title = sd.title.toLowerCase();
      let filter = document.getElementById("search").value.toLowerCase();
      return title.includes(filter);
    });
    card(searchData);
  });
  card(data);
};

function getData(url, news) {
  axios
    .get(url)
    .then((res) => {
      news(res.data.articles);
      console.log(res.data.articles);
    })
    .catch((err) => console.log(err.message));
}

createCard();
getData(url, news);
