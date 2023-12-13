const categoriesEl = document.querySelector('#categories');
const itemList = categoriesEl.querySelectorAll('li.item');
console.log(`Number of categories: ${itemList.length}`);
itemList.forEach(itemListCb);

function itemListCb(item) {
  const title = item.querySelector('h2');
  const titleText = title.textContent;
  console.log(`Category: ${titleText}`);
  const liList = item.querySelectorAll('li');
  console.log(`Elements: ${liList.length}`);
}
