const categories = document.querySelectorAll("#categories .item");

const numberOfCategories = categories("Number of categories:", categories.length);

categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("ul li").length;
});
