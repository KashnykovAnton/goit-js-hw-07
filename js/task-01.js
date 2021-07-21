const categoriesListRef = document.querySelector('#categories');

console.log(`В списке ${categoriesListRef.children.length} категории`);

[...categoriesListRef.children].map(item => {
    console.log(`Категория: ${item.children[0].textContent}`)
    console.log(`Количество элементов: ${item.children[1].children.length}`)
});