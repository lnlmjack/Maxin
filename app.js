// Mnemônica de Tamariz (Posição 1 = Topo, Posição 52 = Base)
const TAMARIZ_STACK = [
  "4 de paus", "2 de copas", "7 de ouros", "3 de paus", "4 de copas",
  "6 de ouros", "ás de espadas", "5 de copas", "9 de espadas", "2 de espadas",
  "dama de copas", "3 de ouros", "dama de paus", "8 de copas", "6 de espadas",
  "5 de espadas", "9 de copas", "rei de paus", "2 de ouros", "valete de copas",
  "3 de espadas", "8 de espadas", "6 de copas", "10 de paus", "5 de ouros",
  "rei de ouros", "2 de paus", "3 de copas", "8 de ouros", "5 de paus",
  "rei de espadas", "valete de ouros", "8 de paus", "10 de espadas", "rei de copas",
  "valete de paus", "7 de espadas", "10 de copas", "ás de ouros", "4 de espadas",
  "7 de copas", "4 de ouros", "ás de paus", "9 de paus", "valete de espadas",
  "dama de ouros", "7 de paus", "dama de espadas", "10 de ouros", "6 de paus",
  "ás de copas", "9 de ouros"
];

const VALUES = [
  { code: "A", label: "ás" },
  { code: "2", label: "2" },
  { code: "3", label: "3" },
  { code: "4", label: "4" },
  { code: "5", label: "5" },
  { code: "6", label: "6" },
  { code: "7", label: "7" },
  { code: "8", label: "8" },
  { code: "9", label: "9" },
  { code: "10", label: "10" },
  { code: "J", label: "valete" },
  { code: "Q", label: "dama" },
  { code: "K", label: "rei" }
];

const SUITS = [
  { symbol: "♣", name: "paus", red: false },
  { symbol: "♥", name: "copas", red: true },
  { symbol: "♠", name: "espadas", red: false },
  { symbol: "♦", name: "ouros", red: true }
];

let selectedValue = null;
let selectedSuit = null;
let cutOffset = 0; // Quantas cartas foram deslocadas do topo original
let lastResultSummary = "";

// Perfis padrão + salvos no navegador
const defaultProfiles = [
  { name: "Dia de Hoje", number: new Date().getDate() },
  { name: "Mês Atual", number: new Date().getMonth() + 1 }
];

let profiles = JSON.parse(localStorage.getItem("maxin_profiles")) || defaultProfiles;

// Inicialização da UI
function init() {
  renderPickers();
  populateCutSelect();
  renderProfiles();
  bindEvents();
}

function renderPickers() {
  const valGrid = document.getElementById("values-grid");
  VALUES.forEach(v => {
    const btn = document.createElement("button");
    btn.className = "val-btn";
    btn.textContent = v.code;
    btn.onclick = () => {
      document.querySelectorAll(".val-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedValue = v.label;
      tryCalculate();
    };
    valGrid.appendChild(btn);
  });

  const suitGrid = document.getElementById("suits-grid");
  SUITS.forEach(s => {
    const btn = document.createElement("button");
    btn.className = `suit-btn ${s.red ? "red" : ""}`;
    btn.textContent = s.symbol;
    btn.onclick = () => {
      document.querySelectorAll(".suit-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSuit = s.name;
      tryCalculate();
    };
    suitGrid.appendChild(btn);
  });
}

function populateCutSelect() {
  const select = document.getElementById("cut-card-select");
  TAMARIZ_STACK.forEach((card, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${idx + 1}. ${card}`;
    select.appendChild(opt);
  });
}

function tryCalculate() {
  if (!selectedValue || !selectedSuit) return;

  const cardName = `${selectedValue} de ${selectedSuit}`;
  const originalIndex = TAMARIZ_STACK.indexOf(cardName); // 0 a 51
  if (originalIndex === -1) return;

  // Posição real considerando o corte (1 a 52)
  const realIndex = (originalIndex - cutOffset + 52) % 52;
  const realPos = realIndex + 1;
  const fromBottom = 53 - realPos;

  document.getElementById("result-panel").classList.remove("hidden");
  document.getElementById("selected-card-name").textContent = cardName;
  document.getElementById("selected-card-sub").textContent = `Stack original: #${originalIndex + 1}`;
  document.getElementById("real-position").textContent = realPos;

  const outs = generateOuts(cardName, realPos, fromBottom);
  const outsList = document.getElementById("outs-list");
  outsList.innerHTML = "";

  outs.forEach(text => {
    const div = document.createElement("div");
    div.className = "out-item";
    div.innerHTML = text;
    outsList.appendChild(div);
  });

  // Atualiza texto discreto do modo Stealth
  lastResultSummary = `${cardName.toUpperCase()} -> Pos #${realPos} (Base: #${fromBottom})`;
  document.getElementById("stealth-output").innerHTML = `
    - Revisar item <strong>${realPos}</strong> da pauta<br>
    - Conferir anexo ${fromBottom} no arquivo<br>
    - ${outs[0].replace(/<[^>]*>/g, "")}
  `;
}

// Gera saídas (Outs) práticas para ACAAN
function generateOuts(cardName, pos, fromBottom) {
  const list = [];

  // 1. Contagem direta / reversa
  list.push(`<strong>Contagem Direta:</strong> ${pos}ª carta do topo (ou ${fromBottom}ª da base).`);

  // 2. Corte necessário para bater com algum perfil/data salvo
  profiles.forEach(p => {
    const target = Number(p.number);
    if (target >= 1 && target <= 52) {
      const diff = (pos - target + 52) % 52;
      if (diff === 0) {
        list.push(`<strong>Bate Exato (${p.name} = ${target}):</strong> Não corte nada! Já está na posição ${target}.`);
      } else {
        const cutCard = TAMARIZ_STACK[(cutOffset + diff - 1) % 52];
        list.push(`<strong>Para bater com ${p.name} (${target}):</strong> Corte <strong>${diff}</strong> cartas do topo (deixe <em>${cutCard}</em> na base).`);
      }
    }
  });

  // 3. Soletração em português (contando apenas letras)
  const spellCard = spellOutCard(cardName);
  const lettersCount = spellCard.replace(/[^a-zA-Záéíóúâêôãõç]/g, "").length;
  const spellDiff = (pos - lettersCount + 52) % 52;

  if (spellDiff === 0) {
    list.push(`<strong>Soletração Exata ("${spellCard}" = ${lettersCount} letras):</strong> Soletrar direto do topo cai na carta!`);
  } else if (spellDiff === 1) {
    list.push(`<strong>Soletração ("${spellCard}" = ${lettersCount} letras):</strong> Soletrar e virar a <strong>próxima</strong> carta.`);
  } else {
    list.push(`<strong>Soletração ("${spellCard}" = ${lettersCount} letras):</strong> Passe ${spellDiff} cartas antes (ou corte ${spellDiff} do topo).`);
  }

  return list;
}

// Converte números da carta para escrita por extenso na soletração
function spellOutCard(cardName) {
  return cardName
    .replace(/^2 /, "dois ")
    .replace(/^3 /, "tres ")
    .replace(/^4 /, "quatro ")
    .replace(/^5 /, "cinco ")
    .replace(/^6 /, "seis ")
    .replace(/^7 /, "sete ")
    .replace(/^8 /, "oito ")
    .replace(/^9 /, "nove ")
    .replace(/^10 /, "dez ")
    .replace(/^ás /, "as ");
}

function renderProfiles() {
  const container = document.getElementById("profiles-list");
  container.innerHTML = "";
  profiles.forEach((p, idx) => {
    const chip = document.createElement("button");
    chip.className = "profile-chip";
    chip.textContent = `${p.name}: ${p.number}`;
    chip.title = "Toque para remover";
    chip.onclick = () => {
      if (idx >= 2 && confirm(`Remover perfil "${p.name}"?`)) {
        profiles.splice(idx, 1);
        localStorage.setItem("maxin_profiles", JSON.stringify(profiles));
        renderProfiles();
        tryCalculate();
      }
    };
    container.appendChild(chip);
  });
}

function bindEvents() {
  // Modal Corte
  const modalCut = document.getElementById("modal-cut");
  document.getElementById("btn-cut").onclick = () => modalCut.classList.remove("hidden");

  document.getElementById("btn-reset-cut").onclick = () => {
    cutOffset = 0;
    document.getElementById("cut-label").textContent = "0";
    modalCut.classList.add("hidden");
    tryCalculate();
  };

  document.getElementById("btn-save-cut").onclick = () => {
    const ref = document.getElementById("cut-ref").value;
    const idx = Number(document.getElementById("cut-card-select").value);
    // Se a carta idx está na base, a nova carta de topo é (idx + 1) % 52
    cutOffset = ref === "bottom" ? (idx + 1) % 52 : idx;
    document.getElementById("cut-label").textContent = cutOffset;
    modalCut.classList.add("hidden");
    tryCalculate();
  };

  // Modal Perfil
  const modalProf = document.getElementById("modal-profile");
  document.getElementById("btn-add-profile").onclick = () => modalProf.classList.remove("hidden");
  document.getElementById("btn-cancel-profile").onclick = () => modalProf.classList.add("hidden");

  document.getElementById("btn-save-profile").onclick = () => {
    const name = document.getElementById("prof-name").value.trim();
    const number = Number(document.getElementById("prof-number").value);
    if (name && number >= 1 && number <= 52) {
      profiles.push({ name, number });
      localStorage.setItem("maxin_profiles", JSON.stringify(profiles));
      document.getElementById("prof-name").value = "";
      document.getElementById("prof-number").value = "";
      modalProf.classList.add("hidden");
      renderProfiles();
      tryCalculate();
    }
  };

  // Modo Stealth
  const stealth = document.getElementById("stealth-overlay");
  document.getElementById("btn-stealth").onclick = () => stealth.classList.remove("hidden");
  document.getElementById("btn-exit-stealth").onclick = () => stealth.classList.add("hidden");
}

init();
