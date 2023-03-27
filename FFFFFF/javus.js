  const filterSelect = document.querySelector('#filterSelect');
  const filterRange = document.querySelector('#filter-range');
  const image = document.querySelector('#imagePreview');
  const imageUpload = document.querySelector('#imageUpload');
  const circleContainer = document.querySelector('#circleContainer');
  const toggleButton = document.getElementById('mode-toggle');
  const fontSwitch = document.querySelector('#fontBtn');
  const body = document.querySelector('body');

  function applyFilter() { // Funktion för att tillämpa filter på bilden
    const filter = filterSelect.value;
    const intensity = filterRange.value;
    image.style.filter = `${filter}(${intensity}%)`;
    
    localStorage.setItem('filter', filter); // Sparar filter i webbläsarens lokala lagring
    localStorage.setItem('intensity', intensity); // Sparar filter-intensitet i webbläsarens lokala lagring

  }

  const savedFilter = localStorage.getItem('filter'); // Hämtar tidigare sparat filter från webbläsarens lokala lagring
  const savedIntensity = localStorage.getItem('intensity'); // Hämtar tidigare sparat filter-intensitet från webbläsarens lokala lagring
  if (savedFilter && savedIntensity) {
  filterSelect.value = savedFilter;
  filterRange.value = savedIntensity;
  applyFilter();
  }

  filterSelect.addEventListener('change', applyFilter);
  filterRange.addEventListener('input', applyFilter);

  imageUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        imagePreview.src = reader.result;
        circleContainer.style.display = "block";

        
        localStorage.setItem('image', reader.result); // Sparar bild i webbläsarens lokala lagring
      }
      reader.readAsDataURL(file);
    } else {
      imagePreview.src = "";
      circleContainer.style.display = "none";
      localStorage.removeItem('image');  // Tar bort bild från webbläsarens lokala lagring
    
    }
  });

  const savedImage = localStorage.getItem('image'); // Hämtar tidigare sparad bild från webbläsarens lokala lagring
  if (savedImage) {
    imagePreview.src = savedImage;
    circleContainer.style.display = "block";
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');  // Växla mellan ljus och mörk bakgrund
    if (document.body.classList.contains('dark')) {
      toggleButton.innerText = 'Switch to Light Mode';
      localStorage.setItem('mode', 'dark'); // Spara temaläge i webben
    } else {
      toggleButton.innerText = 'Switch to Dark Mode';
      localStorage.setItem('mode', 'light');
    }
  });

  //Hämta sparat läge från lokal lagring och växla kroppsklassen 
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
    document.body.classList.toggle(savedMode);
    if (savedMode === 'dark') {
      toggleButton.innerText = 'Switch to Light Mode';
    } else {
      toggleButton.innerText = 'Switch to Dark Mode';
    }
  }

  // för teckensnittsväxling och växla teckensnittsstil
  fontSwitch.addEventListener('click', function() {
    if (body.style.fontFamily === 'Cambria, serif') {
      body.style.fontFamily = '';
      localStorage.setItem('font', '');
    } else {
      body.style.fontFamily = 'Cambria, serif';
      localStorage.setItem('font', 'Cambria, serif');
    }
  });
  // Hämtar det sparade teckensnittet från lokal lagring och tillämpar den till brödtexten
  const savedFont = localStorage.getItem('font');
  if (savedFont) {
    body.style.fontFamily = savedFont;
  }
 
  const resetBtn = document.querySelector('#resetBtn');
  // Adderar add event listener till reset knappen för att ta bort all sparad data i lokal lagringen
  resetBtn.addEventListener('click', function() {
    localStorage.removeItem('filter');
    localStorage.removeItem('intensity');
    localStorage.removeItem('image');

    //  Resetar filtrerna och bilden 
    filterSelect.value = 'none';
    filterRange.value = 0;
    image.style.filter = '';
    imagePreview.src = '';
    circleContainer.style.display = 'none';

    // resetar "darmode" och font stillen
    document.body.classList.remove('dark');
    toggleButton.innerText = 'Switch to Dark Mode';
    localStorage.removeItem('mode');
    body.style.fontFamily = '';
    localStorage.removeItem('font');
  });


  

