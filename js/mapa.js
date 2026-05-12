// ============================================================
// LITTO – Mapa de Bibliotecas Públicas de São Paulo
// ============================================================

export const BIBLIOTECAS_SP = [
  { nome: "Biblioteca Mário de Andrade",          endereco: "R. da Consolação, 94 – República",              lat: -23.5445, lng: -46.6438 },
  { nome: "Biblioteca de São Paulo",               endereco: "Av. Cruzeiro do Sul, 2630 – Santana",           lat: -23.4997, lng: -46.6267 },
  { nome: "Centro Cultural São Paulo",             endereco: "R. Vergueiro, 1000 – Paraíso",                  lat: -23.5703, lng: -46.6373 },
  { nome: "Biblioteca Pública Estadual Monteiro Lobato", endereco: "R. Gen. Jardim, 485 – Vila Buarque",      lat: -23.5496, lng: -46.6516 },
  { nome: "Biblioteca Alceu Amoroso Lima – USP",   endereco: "Av. Prof. Luciano Gualberto, 403 – Butantã",   lat: -23.5614, lng: -46.7291 },
  { nome: "Biblioteca Pública Municipal Belmonte", endereco: "Pça. Coronel Custódio, s/n – Jabaquara",       lat: -23.6403, lng: -46.6561 },
  { nome: "Biblioteca Prefeito Prestes Maia",      endereco: "Pça. Cmdt. Eduardo de Oliveira, s/n – Lapa",   lat: -23.5195, lng: -46.7046 },
  { nome: "Biblioteca Pública Municipal Jorge Amado", endereco: "R. Cristóvão Colombo, 567 – Santana",       lat: -23.4882, lng: -46.6265 },
  { nome: "Biblioteca Pública Municipal Érico Veríssimo", endereco: "Av. Eng. Luís Carlos Berrini, 200 – Brooklin", lat: -23.5986, lng: -46.6848 },
  { nome: "SESC Pompeia – Biblioteca",             endereco: "R. Clélia, 93 – Pompeia",                      lat: -23.5254, lng: -46.6842 },
];

// ─── Ícone neo-brutalista ────────────────────────────────────
function criarIcone() {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:34px;height:34px;
      background:#5065ff;
      border:2px solid #1a1b24;
      box-shadow:3px 3px 0 0 #1a1b24;
      display:flex;align-items:center;justify-content:center;
      border-radius:2px;
    ">
      <span class="material-symbols-outlined" style="color:#fff;font-size:17px;line-height:1;">menu_book</span>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -36],
  });
}

function adicionarMarcadores(mapa) {
  const icone = criarIcone();
  BIBLIOTECAS_SP.forEach(bib => {
    L.marker([bib.lat, bib.lng], { icon: icone })
      .addTo(mapa)
      .bindPopup(`<h3>${bib.nome}</h3><p>${bib.endereco}</p>`);
  });
}

// ─── Mapa completo (tela Bibliotecas) ───────────────────────
let mapaCompleto = null;

// Substitua as funções initMap e initMapHome por:

export function initMap() {
  const container = document.getElementById("map");
  if (!container) return;

  if (mapaCompleto) {
    mapaCompleto.remove(); // destrói instância anterior
    mapaCompleto = null;
  }

  mapaCompleto = L.map("map", { center: [-23.5505, -46.6333], zoom: 12 });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(mapaCompleto);
  adicionarMarcadores(mapaCompleto);
}

export function initMapHome() {
  const container = document.getElementById("map-home");
  if (!container) return;

  if (mapaHome) {
    mapaHome.remove();
    mapaHome = null;
  }

  mapaHome = L.map("map-home", {
    center: [-23.5505, -46.6333],
    zoom: 11,
    zoomControl: true,
    scrollWheelZoom: false,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(mapaHome);
  adicionarMarcadores(mapaHome);
}
