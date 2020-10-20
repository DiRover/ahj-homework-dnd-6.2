/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
//получаем нужные эл-ты
const fileElem = document.querySelector('[data-id="file"]');
const overlap = document.querySelector('[data-id="overlap"]');
const previewContainer = document.querySelector('[data-id="preview"]');
//передаём клик с перекрывающего элемента на нижележащий инпут
overlap.addEventListener('click', () => {
  fileElem.dispatchEvent(new MouseEvent('click'));
});
//функция, которая рисует превью картинок
function getImgs(arr) {
  const files = Array.from(arr);
  files.forEach((element) => {
    //чтобы загружать подряд две одинаковые картинки
    fileElem.value = null;
    const img = document.createElement('img');
    img.src = URL.createObjectURL(element);
    previewContainer.appendChild(img);
  });
}

fileElem.addEventListener('change', (e) => {
  console.log(e.target.files);
  getImgs(e.target.files);
  // второй способ
  // const reader = new FileReader();
  /* reader.onload = (event) => {
    img.src = event.target.result;
  };
  reader.readAsDataURL(data); */
});

overlap.addEventListener('dragover', (e) => {
  e.preventDefault();
});

overlap.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files);
  getImgs(e.dataTransfer.files);
});
