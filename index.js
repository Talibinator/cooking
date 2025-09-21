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
  emailjs.init({
    publicKey: "ZVrnj4EmmbvDURr6j",
  });
})();

// E-Mail nur einmal pro Session senden
window.addEventListener("load", () => {
  console.log("🚀 Page loaded, checking email tracking...");
  
  if (!sessionStorage.getItem('visitTracked')) {
    console.log("📧 Attempting to send email...");
    
    emailjs.send("service_441zkgv", "template_rxg7ae4", {
      message: "Jemand hat deine Kochseite besucht!",
      from_name: "Cooking Website",
      reply_to: "noreply@cookingsite.com"
    }).then(
      (response) => {
        console.log("✅ Mail erfolgreich geschickt!", response.status, response.text);
        sessionStorage.setItem('visitTracked', 'true');
      },
      (error) => {
        console.error("❌ Fehler beim Senden der E-Mail:", error);
        console.error("Error details:", JSON.stringify(error, null, 2));
      }
    );
  } else {
    console.log("ℹ️ Email already sent this session");
  }
});