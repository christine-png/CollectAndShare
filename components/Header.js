class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {

      this.style = 

      this.innerHTML = `
        <header>
        <div class="titleGroup">
            <img class="logoImg" src="images/icon.png" alt="">
            <h3 class="logo">Collect and Share</h3>
        </div>

        <div class="menuGroup">
            <nav>
                <h3 class="menu">Menu</h3>
                <div class="menuContent">
                    <a href="index.html">Home</a>
                    <a href="sampleCollection.html">Sample Collection</a>
                    <a class="loginRegister" href="login-register.html">Login/Registrieren</a>
                    <a href="aboutUs.html">Über uns</a>
                    <a href="#contactData">Kontakt</a>
                </div>
            </nav>
        </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  menu()

  function menu() {

  var menu = document.getElementsByClassName("menu");
  var i;

  for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = "250px";
      }
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "grid";
      }
    });
  }

}