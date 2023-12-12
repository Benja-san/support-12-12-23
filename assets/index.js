const mainSection = document.getElementById("mainSection")

const articles = document.querySelectorAll("article")

console.log(articles)

function popMyalert(articleId) {
  alert(`You clicked my article ${articleId}, buy it now!`) // "you clicked on " + articleId
}

articles.forEach((article, key) => {
  article.addEventListener("click", (e) => {
    e.preventDefault()
    article.innerHTML = `<h2 class="articleTitle">Article ${key + 1}</h2>`
  })
})
