const categories = document.querySelectorAll("#categories .item");


categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("ul li").length;
  console.log("Category:", title);
  console.log("Elements:", elements);
});