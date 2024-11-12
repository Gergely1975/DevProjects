function changeBorderColor() {
    // Kék árnyalatok kiválasztása a különböző szakaszokhoz
    document.querySelector('.header').style.borderColor = '#1E90FF'; // Középkék
    document.querySelector('.content').style.borderColor = '#6495ED'; // Kukoricakék
    document.querySelector('.footer').style.borderColor = '#4169E1'; // Királykék
  }
  window.addEventListener('scroll', function () {
    const mainHeader = document.querySelector('.header');
    const secondaryHeader = document.querySelector('.header-2');
    const blueBox = document.querySelector('.flex-box[style*="border-color: blue"]');
    const flexContainer = secondaryHeader.querySelector('.flex-container');

    if (window.scrollY > secondaryHeader.offsetTop && !mainHeader.contains(blueBox)) {
        mainHeader.appendChild(blueBox);
    } else if (window.scrollY <= secondaryHeader.offsetTop && !flexContainer.contains(blueBox)) {
        flexContainer.insertBefore(blueBox, flexContainer.firstChild); // Visszahelyezi az első helyre
    }
});

