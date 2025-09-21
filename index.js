function searchDesserts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      if (title.includes(input)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

(function(){
  emailjs.init("ZVrnj4EmmbvDURr6j");
})();

// E-Mail nur einmal pro Session senden
window.addEventListener("load", () => {
  if (!sessionStorage.getItem('visitTracked')) {
    emailjs.send("service_441zkgv", "template_rxg7ae4", {
      message: "Jemand hat deine Kochseite besucht!"
    }).then(
      (response) => {
        console.log("✅ Mail geschickt!", response.status, response.text);
        sessionStorage.setItem('visitTracked', 'true');
      },
      (error) => console.error("❌ Fehler beim Senden", error)
    );
  }
});