const filterSelect = document.querySelector('#filterSelect');
const filterRange = document.querySelector('#filter-range');
const image = document.querySelector('#imagePreview');

function applyFilter() {
  const filter = filterSelect.value;
  const intensity = filterRange.value;
  image.style.filter = `${filter}(${intensity}%)`;
}

filterSelect.addEventListener('change', applyFilter);
filterRange.addEventListener('input', applyFilter);


const imageUpload = document.querySelector('#imageUpload');
const circleContainer = document.querySelector('#circleContainer');
const imagePreview = document.querySelector('#imagePreview');

imageUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      imagePreview.src = reader.result;
      circleContainer.style.display = "block";
    }
    reader.readAsDataURL(file);
  } else {
    imagePreview.src = "";
    circleContainer.style.display = "none";
  }
});

const toggleButton = document.getElementById('mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    toggleButton.innerText = 'Switch to Light Mode';
  } else {
    toggleButton.innerText = 'Switch to Dark Mode';
  }
});

const fontSwitch = document.querySelector('#fontBtn');
const body = document.querySelector('body');

fontSwitch.addEventListener('click', function() {
  if (body.style.fontFamily === 'Cambria, serif') {
    body.style.fontFamily = '';
  } else {
    body.style.fontFamily = 'Cambria, serif';
  }
});

