const imageInput = document.getElementById('image-input');
const imageUploadBtn = document.getElementById('image-upload-btn');
const imagePreview = document.getElementById('image-preview');

imageUploadBtn.addEventListener('click', function() {
  imageInput.click();
});

imageInput.addEventListener('change', function() {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      const image = new Image();
      image.src = reader.result;
      image.onload = function() {
        imagePreview.innerHTML = '';
        imagePreview.appendChild(image);
      }
    });
    reader.readAsDataURL(file);
  }
});
