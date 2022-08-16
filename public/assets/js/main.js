const detectCel =  /Mobi/i.test(window.navigator.userAgent)
let menuheader = document.getElementsByClassName("menuheader");

if(!detectCel)
{
  menuheader.style = "float: left!important;\
  position: fixed;\
  z-index: 1;\
  height: 100%;\
  background-color: #C0FFA8;\
  transition: 0.5s;\
  overflow-x: hidden;\
  margin-left: -250px;";
}
function abrirSideBar() {
  let elementosidebar = document.getElementById("textosidebar");
  if(elementosidebar.classList.contains("menuaberto"))
  {
    return fecharSidebar();
  }
  if(detectCel == false)
  {
    document.getElementById("menuheader-id").style.marginLeft = "0";
    Array.prototype.filter.call(document.getElementsByClassName("elementoPagInicial"), function(elemento) 
    {
      elemento.style.marginLeft = "10rem";
      elemento.style.fontSize = "calc(var(--textpag-size) - 1rem)";
    });
  }
  else
  {
    document.getElementById("menuheader-id").style.width = "100%";
  }
  elementosidebar.innerHTML = "Fechar menu lateral";
  elementosidebar.classList.add("menuaberto");
}

function fecharSidebar() {
  if(detectCel == false)
  {
    document.getElementById("menuheader-id").style.marginLeft = "-250px";    
    Array.prototype.filter.call(document.getElementsByClassName("elementoPagInicial"),       function(elemento) 
    {
      elemento.style.marginLeft = "0";
      if(elemento.classList.contains("tituloPagInicial"))
      {
       elemento.style.fontSize = "var(--textpag-size)"; 
      }
      else
      {
        elemento.style.fontSize = "calc(var(--textpag-size) - 0.7rem)";
      }
    });
  }
  else
  {
    document.getElementById("menuheader-id").style.width = "0%";
  }
  document.getElementById("textosidebar").classList.remove("menuaberto");
  document.getElementById("textosidebar").innerHTML = "Abrir menu lateral";
}

fetch('./navbar.txt')
  .then(response => response.text())
  .then(text => {
    let elementoPai = document.querySelector(".navbar-buttons");
    elementoPai.innerHTML = text;
  })