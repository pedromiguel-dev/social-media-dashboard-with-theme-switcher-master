var checkbox = document.querySelector("input[name=botao]");

var root = document.querySelector(':root');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});