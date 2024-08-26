const API_KEY = "98a6acc0cc3843488af761c76292167e";
const url = "https://newsapi.org/v2/everything?q=";

// Define categories
const categories = {
    "Pollution": "pollution",
    "Environment": "environment",
    "CarbonEmission": "carbon emission",
    "Wildlife": "wildlife",
    "Agriculture": "agriculture"
};

window.addEventListener("load", () => fetchNews("pollution"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

 function bindData(articles) {
            const cardsContainer = document.getElementById("cards-container");
            const newsCardTemplate = document.getElementById("template-news-card");

            cardsContainer.innerHTML = "";

            articles.forEach((article) => {
                if (!article.urlToImage) return;

                const cardClone = newsCardTemplate.content.cloneNode(true);
                fillDataInCard(cardClone, article);
                cardsContainer.appendChild(cardClone);
            });
        }

        function fillDataInCard(cardClone, article) {
            const imgElement = cardClone.querySelector('.news-image');
            const titleElement = cardClone.querySelector('.news-title');
            const descriptionElement = cardClone.querySelector('.news-description');

            imgElement.src = article.urlToImage;
            imgElement.onerror = () => {
                imgElement.src = 'path/to/fallback-image.png'; // Fallback image URL
            };
            titleElement.textContent = article.title;
            descriptionElement.textContent = article.description;
        }


function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title.slice(0, 60);
    newsDesc.innerHTML = article.description.slice(0, 150);

    const date = new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;

function onNavItemClick(id) {
    const query = categories[id];
    if (query) {
        fetchNews(query);
        const navItem = document.getElementById(id);
        if (curSelectedNav) {
            curSelectedNav.classList.remove("active");
        }
        curSelectedNav = navItem;
        curSelectedNav.classList.add("active");
    }
}

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
