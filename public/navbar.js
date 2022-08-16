fetch('./navbar.txt')
  .then(response => response.text())
  .then(text => {
    let elementoPai = document.getElementsByClassName("navbar-buttons");
    console.log(elementoPai);
    elementoPai.innerHTML = text;
  })