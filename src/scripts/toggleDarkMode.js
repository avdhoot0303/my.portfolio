function toggleDarkMode() {
    const root = document.documentElement;
    const isDarkMode = getComputedStyle(root).getPropertyValue('--sky-color').trim() === '#020107';
  
    if (isDarkMode) {
      root.style.setProperty('--sky-color', '#ffffff');
      root.style.setProperty('--star-color', '#000000');
    } else {
      root.style.setProperty('--sky-color', '#020107');
      root.style.setProperty('--star-color', '#ffffff');
    }
  }
  