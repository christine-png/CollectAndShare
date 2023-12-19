class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {

      this.style = 

      this.innerHTML = `
        <footer id="contactData">
            <div class="impressum">
                <h2>Impressum</h2>
                Christine Bell
                <br>
                Urstein Süd 5
                <br>
                5412 Puch bei Hallein
                <br>
                Austria
            </div>
            <div>
                <h2>Kontakt</h2>
                fhs50537@fh-salzburg.ac.at
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);

