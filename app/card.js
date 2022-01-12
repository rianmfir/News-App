const createCard = () => {
  let listNews = document.getElementById("news-content");
  let loading = "";
  let cardLoading = `<div class="col-md-4 mb-5">
                        <div class="card is-loading">
                          <div class="image"></div>
                          <div class="card-body card-loading">
                            <h2></h2>
                            <p id="p-loading-date"></p>
                            <p id="p-loading-content"></p>
                            <a href="" class="btn border btn-loading"></a>
                          </div>
                        </div>
                      </div>`;
  for (let i = 0; i < 6; i++) {
    loading += cardLoading;
  }

  listNews.innerHTML = `<div class="container">
                          <div class="row" id="news">
                            ${loading}
                          </div>
                        </div>`;
};

const card = (data) => {
  let newsCard = "";
  let news = document.getElementById("news");

  let dataNotFound = `<p class="text-center fw-bold fs-2" style="background-color: #f8aeae;">Data Not Found :(</p>`;

  console.log("Datanya " + data.length);

  if (data.length === 0) {
    setTimeout(() => {
      news.innerHTML = dataNotFound;
    }, 300);
  } else {
    setTimeout(() => {
      data.forEach((d) => {
        newsCard += `<div class="col-md-4 mb-5">
                          <div class="card">
                            <img src=${d.urlToImage} class="card-img-top" alt="..." />
                            <div class="card-body">
                              <h5 class="card-title fs-5 fw-bolder">${d.title}</h5>
                              <p class="fs-6 fw-normal">${d.author} - ${d.publishedAt}</p>
                              <p class="card-text" style="overflow: hidden; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;">
                                ${d.content}
                              </p>
                              <a href=${d.url} class="btn btn-dark">Read more..</a>
                            </div>
                          </div>
                        </div>`;
      });
      news.innerHTML = newsCard;
    }, 300);
  }
};

export { card, createCard };
