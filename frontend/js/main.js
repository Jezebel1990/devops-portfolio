// =============================
// Rolagem suave para links internos
// =============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80, 
                behavior: "smooth"
            });
        }
    });
});


// =============================
// Carregar footer externo
// =============================
function loadFooter() {
    fetch("footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html;

            // Define o ano automaticamente
            const yearSpan = document.getElementById("year");
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        })
        .catch(err => console.error("Erro ao carregar o footer:", err));
}

// Executa o carregamento do footer
loadFooter();


// Menu hamburguer
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
