const body = document.body;
const toggleBtn = document.getElementById("themeToggle");

// Lista de conversão Bootstrap (claro → escuro)
const lightToDark = {
  "bg-light": "bg-dark",
  "text-dark": "text-light",
  "navbar-light": "navbar-dark",
  "btn-light": "btn-dark",
  "border-dark": "border-light"
};

// Conversão reversa (escuro → claro)
const darkToLight = {
  "bg-dark": "bg-light",
  "text-light": "text-dark",
  "navbar-dark": "navbar-light",
  "btn-dark": "btn-light",
  "border-light": "border-dark"
};

// Função que aplica substituição de classes
function swapClasses(map) {
  Object.keys(map).forEach(lightClass => {
    const darkClass = map[lightClass];

    document.querySelectorAll("." + lightClass).forEach(el => {
      el.classList.remove(lightClass);
      el.classList.add(darkClass);
    });
  });
}

// Aplicar tema salvo ao carregar a página
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  swapClasses(lightToDark);
  toggleBtn.textContent = "☀️";
}

// Clique no botão → trocar tema
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-theme");

  if (isDark) {
    swapClasses(lightToDark);
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    swapClasses(darkToLight);
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});
