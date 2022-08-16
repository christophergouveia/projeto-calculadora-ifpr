

if(/Mobi/i.test(window.navigator.userAgent) == false)
  {
    document.write('\
<div class="menuheader" id="menuheader-id">\
  <div class="p-2 mx-auto align-items-center" style="width: 15rem;">\
    <p class="titulo bordabottom text-center">Ferramentas</p>\
    <ul class="list-unstyled components mb-5">\
      <li class="sidebar-item position-relative borda-botao text-center">\
        <a href="./calculadoras/bhaskara" class="textosidebar stretched-link"> Calculadora de equação resolutiva de segundo grau</a>\
      </li>\
      <li class="sidebar-item position-relative borda-botao text-center">\
        <a class="textosidebar stretched-link">teste</a>\
      </li>\
    </ul>\
  </div>\
</div>');
  }
    else
    {
      document.write('<div class="menuheader" id="menuheader-id">\
  <div>\
    <button type="button" aria-label="Close" onclick="fecharSidebar()" class="botaoFechar btn-close btn-close-white" class="p-2"></button>\
    <div class="mx-auto text-center">\
      <div class="mx-auto text-center">\
        <span class="titulo w-100" style="margin: 0 0 0 0; display: inline-block;">Ferramentas</span>\
        <div class="list-group mx-auto text-center" style="width: 200px;">\
          <a href="calculadoras/bhaskara" class="textosidebar borda-botao" style="text-decoration: none;">Calculadora resolutiva de segundo grau</a>\
          <a href="#" class="textosidebar borda-botao">teste</a>\
          <a href="#" class="textosidebar borda-botao">teste</a>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>')
    }