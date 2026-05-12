// ============================================================
// LITTO – Configuração do Firebase
// ============================================================
// INSTRUÇÕES:
// 1. Acesse https://console.firebase.google.com
// 2. Crie um projeto ou use um existente
// 3. Em "Configurações do projeto" → "Seus aplicativos" → escolha Web (</>)
// 4. Copie o objeto firebaseConfig e substitua os valores abaixo
// 5. Em "Authentication" → "Método de login" → habilite "E-mail/senha"
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyCQQ-EqBv7XwmGX4FzIikMv4yd2UN_xKTc",
  authDomain:        "litto-stitch.firebaseapp.com",
  projectId:         "litto-stitch",
  storageBucket:     "litto-stitch.firebasestorage.app",
  messagingSenderId: "S420322820288",
  appId:             "1:420322820288:web:a25fb17b7e6a9223126d25"
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
export const db = getFirestore(app);
