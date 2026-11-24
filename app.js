const BUILTIN_STACKS = [
  {
    id: "tamariz",
    name: "Tamariz",
    builtin: true,
    cards: [
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
    ]
  },
  {
    id: "aronson",
    name: "Aronson",
    builtin: true,
    cards: [
      "valete de espadas", "rei de copas", "5 de paus", "2 de copas", "9 de espadas",
      "ás de espadas", "3 de copas", "6 de paus", "8 de ouros", "ás de paus",
      "10 de espadas", "5 de copas", "2 de ouros", "rei de ouros", "7 de ouros",
      "8 de paus", "3 de espadas", "ás de ouros", "7 de espadas", "5 de espadas",
      "dama de ouros", "ás de copas", "8 de espadas", "3 de ouros", "7 de copas",
      "dama de espadas", "5 de ouros", "7 de paus", "4 de ouros", "rei de paus",
      "4 de paus", "10 de ouros", "valete de copas", "dama de copas", "10 de paus",
      "dama de paus", "4 de copas", "rei de espadas", "4 de espadas", "10 de copas",
      "valete de paus", "3 de paus", "valete de ouros", "6 de ouros", "9 de paus",
      "2 de espadas", "9 de copas", "8 de copas", "6 de copas", "6 de espadas",
      "2 de paus", "9 de ouros"
    ]
  },
  {
    id: "si_stebbins",
    name: "Si Stebbins",
    builtin: true,
    cards: [
      "ás de paus", "4 de copas", "7 de espadas", "10 de ouros",
      "rei de paus", "3 de copas", "6 de espadas", "9 de ouros",
      "dama de paus", "2 de copas", "5 de espadas", "8 de ouros",
      "valete de paus", "ás de copas", "4 de espadas", "7 de ouros",
      "10 de paus", "rei de copas", "3 de espadas", "6 de ouros",
      "9 de paus", "dama de copas", "2 de espadas", "5 de ouros",
      "8 de paus", "valete de copas", "ás de espadas", "4 de ouros",
      "7 de paus", "10 de copas", "rei de espadas", "3 de ouros",
      "6 de paus", "9 de copas", "dama de espadas", "2 de ouros",
      "5 de paus", "8 de copas", "valete de espadas", "ás de ouros",
      "4 de paus", "7 de copas", "10 de espadas", "rei de ouros",
      "3 de paus", "6 de copas", "9 de espadas", "dama de ouros",
      "2 de paus", "5 de copas", "8 de espadas", "valete de ouros"
    ]
  }
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

const BASE_PHRASES = [
  "É", "É A", "AQUI", "É ELA", "A CARTA", "ACHEI A", "SUA CARTA", "A SUA CARTA",
  "É A SUA CARTA", "A CARTA CERTA", "ACHEI A CARTA", "ESSA É A CARTA",
  "A CARTA PENSADA", "ESTA É A SUA CARTA", "A CARTA QUE PENSOU", "A SUA CARTA PENSADA",
  "A CARTA ESCOLHIDA É", "A CARTA QUE ESCOLHEU", "A SUA CARTA ESCOLHIDA",
  "ESSA É A SUA CARTA CERTA", "A CARTA QUE VOCÊ PENSOU", "A CARTA QUE VOCÊ FALOU É",
  "A CARTA QUE VOCÊ PENSOU É", "ESTA É A CARTA ESCOLHIDA", "A CARTA QUE VOCÊ ESCOLHEU",
  "A CARTA QUE VOCÊ PENSOU FOI", "ESTA É A CARTA QUE VOCÊ DISSE",
  "A CARTA QUE VOCÊ PENSOU FOI A", "ESTA É A CARTA QUE VOCÊ PENSOU",
  "A CARTA QUE VOCÊ ESCOLHEU FOI A", "A CARTA QUE VOCÊ PENSOU ESTÁ AQUI",
  "ESTA É A SUA CARTA LIVREMENTE DITA", "ESSA É A CARTA QUE VOCÊ ESCOLHEU",
  "A CARTA QUE VOCÊ PENSOU É ESSA AQUI", "ESTA É A CARTA QUE VOCÊ IMAGINOU",
  "A CARTA QUE VOCÊ ESCOLHEU ESTÁ AQUI", "ESTA É A CARTA QUE VOCÊ PENSOU HOJE",
  "A CARTA QUE VOCÊ PENSOU EM SEGREDO É", "ESSA É A CARTA QUE VOCÊ ESCOLHEU HOJE",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE É", "ESTA É A CARTA QUE VOCÊ FALOU AGORA",
  "A CARTA QUE VOCÊ ESCOLHEU EM SEGREDO É", "A CARTA QUE VOCÊ PENSOU LIVREMENTE FOI",
  "ESTA É A CARTA QUE VOCÊ ESCOLHEU HOJE", "A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR",
  "A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR", "A CARTA QUE VOCÊ PENSOU LIVREMENTE HOJE É",
  "A CARTA QUE VOCÊ PENSOU ANTES DE EMBARALHAR", "A CARTA QUE VOCÊ ESCOLHEU ANTES DE EMBARALHAR",
  "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ESTÁ AQUI", "A CARTA QUE VOCÊ PENSOU EM SEGREDO ESTÁ BEM AQUI",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE ESTÁ BEM AQUI", "ESTA É A CARTA QUE VOCÊ PENSOU ANTES DE EMBARALHAR",
  "ESTA É A CARTA QUE VOCÊ ESCOLHEU ANTES DE EMBARALHAR", "A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO É",
  "A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO É", "A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO FOI A",
  "A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO FOI A", "ESTA É A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO HOJE",
  "ESTA É A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO HOJE", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO É",
  "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO É", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO FOI A",
  "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO FOI A", "ESTA É A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO ESTÁ AQUI"
];

function countLetters(text) {
  return text.replace(/[^a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]/g, "").length;
}

const PHRASES_BY_LEN = {};
BASE_PHRASES.forEach(p => {
  const n = countLetters(p);
  if (!PHRASES_BY_LEN[n]) PHRASES_BY_LEN[n] = p;
});

function getPhraseForPos(pos, sideLabel) {
  if (PHRASES_BY_LEN[pos]) {
    const text = PHRASES_BY_LEN[pos];
    return {
      text,
      letters: pos,
      sub: `${pos} letras — cai EXATO na última letra (${pos}ª ${sideLabel})`
    };
  }

  if (pos > 1 && PHRASES_BY_LEN[pos - 1]) {
    const text = PHRASES_BY_LEN[pos - 1];
    return {
      text,
      letters: pos - 1,
      sub: `${pos - 1} letras — soletra e vira a PRÓXIMA carta (${pos}ª ${sideLabel})`
    };
  }

  const fallback = "A CARTA QUE VOCÊ PENSOU FOI";
  const len = countLetters(fallback);
  if (pos > len) {
    return {
      text: fallback,
      letters: len,
      sub: `${len} letras + passe mais ${pos - len} carta(s) para chegar na ${pos}ª ${sideLabel}`
    };
  }
  return {
    text: fallback,
    letters: len,
    sub: `${len} letras — conte ${pos} carta(s) (${sideLabel})`
  };
}

let customStacks = [];
try {
  const raw = JSON.parse(localStorage.getItem("maxin_custom_stacks") || "[]");
  if (Array.isArray(raw)) customStacks = raw;
} catch (e) {}

let activeStackId = "tamariz";
try {
  activeStackId = localStorage.getItem("maxin_active_stack") || "tamariz";
} catch (e) {}

const state = {
  targetVal: null,
  targetSuit: null,
  bottomVal: null,
  bottomSuit: null
};

function getAllStacks() {
  return [...BUILTIN_STACKS, ...customStacks];
}

function getActiveStack() {
  const all = getAllStacks();
  return all.find(s => s.id === activeStackId) || all[0];
}

function syncSelectors() {
  const all = getAllStacks();
  ["stack-selector", "panel-stack-select"].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = "";
    all.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.name;
      if (s.id === activeStackId) opt.selected = true;
      sel.appendChild(opt);
    });
  });

  const delBtn = document.getElementById("btn-delete-stack");
  if (delBtn) {
    if (getActiveStack().builtin) delBtn.classList.add("hidden");
    else delBtn.classList.remove("hidden");
  }
}

function renderOrderList() {
  const listEl = document.getElementById("stack-order-list");
  if (!listEl) return;
  listEl.innerHTML = "";
  getActiveStack().cards.forEach((card, idx) => {
    const isRed = card.includes("copas") || card.includes("ouros");
    const div = document.createElement("div");
    div.className = `order-item ${isRed ? "red-suit" : ""}`;
    div.innerHTML = `<span class="order-num">#${idx + 1}</span><span>${card}</span>`;
    listEl.appendChild(div);
  });
}

function toggleStacksPanel(forceOpen) {
  const panel = document.getElementById("stacks-panel");
  if (!panel) return;
  if (typeof forceOpen === "boolean") {
    panel.classList.toggle("hidden", !forceOpen);
  } else {
    panel.classList.toggle("hidden");
  }
  syncSelectors();
  renderOrderList();
}

function changeStack(newId) {
  activeStackId = newId;
  try {
    localStorage.setItem("maxin_active_stack", activeStackId);
  } catch (e) {}
  syncSelectors();
  renderOrderList();
  calculateImmediate();
}

function parseCardLine(raw) {
  let clean = raw.trim().toLowerCase().replace(/^\d+[\.\)\-\s]+/, "").trim();
  if (!clean) return null;

  const shortMatch = clean.match(/^(10|[a2-9jqk]|ás|as)\s*(?:de\s*)?([♣♥♠♦pceo]|paus|copas|espadas|ouros)$/);
  if (shortMatch) {
    const vMap = {
      "a": "ás", "ás": "ás", "as": "ás",
      "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10",
      "j": "valete", "q": "dama", "k": "rei"
    };
    const sMap = {
      "♣": "paus", "p": "paus", "paus": "paus",
      "♥": "copas", "c": "copas", "copas": "copas",
      "♠": "espadas", "e": "espadas", "espadas": "espadas",
      "♦": "ouros", "o": "ouros", "ouros": "ouros"
    };
    const v = vMap[shortMatch[1]];
    const s = sMap[shortMatch[2]];
    if (v && s) return `${v} de ${s}`;
  }

  clean = clean
    .replace(/^as(?=\s|$)/, "ás")
    .replace(/^um(?=\s|$)/, "ás")
    .replace(/^dois(?=\s|$)/, "2")
    .replace(/^(três|tres)(?=\s|$)/, "3")
    .replace(/^quatro(?=\s|$)/, "4")
    .replace(/^cinco(?=\s|$)/, "5")
    .replace(/^seis(?=\s|$)/, "6")
    .replace(/^sete(?=\s|$)/, "7")
    .replace(/^oito(?=\s|$)/, "8")
    .replace(/^nove(?=\s|$)/, "9")
    .replace(/^dez(?=\s|$)/, "10");

  return BUILTIN_STACKS[0].cards.includes(clean) ? clean : null;
}

function showFeedback(type, msg) {
  const fb = document.getElementById("new-stack-feedback");
  if (!fb) return;
  fb.className = `feedback ${type}`;
  fb.textContent = msg;
  fb.classList.remove("hidden");
}

function saveCustomStack() {
  const nameInput = document.getElementById("new-stack-name");
  const cardsInput = document.getElementById("new-stack-cards");
  const fb = document.getElementById("new-stack-feedback");
  if (fb) fb.classList.add("hidden");

  const name = nameInput ? nameInput.value.trim() : "";
  const rawLines = cardsInput ? cardsInput.value.split(/\r?\n/).map(l => l.trim()).filter(Boolean) : [];

  if (!name) {
    showFeedback("error", "Informe um nome para o stack.");
    return;
  }

  if (rawLines.length !== 52) {
    showFeedback("error", `É preciso colar 52 cartas (você colocou ${rawLines.length}).`);
    return;
  }

  const parsed = [];
  for (let i = 0; i < rawLines.length; i++) {
    const card = parseCardLine(rawLines[i]);
    if (!card) {
      showFeedback("error", `Carta inválida na linha ${i + 1}: "${rawLines[i]}".`);
      return;
    }
    if (parsed.includes(card)) {
      showFeedback("error", `Carta repetida na linha ${i + 1}: "${card}".`);
      return;
    }
    parsed.push(card);
  }

  const newId = "custom_" + Date.now();
  customStacks.push({ id: newId, name, builtin: false, cards: parsed });
  try {
    localStorage.setItem("maxin_custom_stacks", JSON.stringify(customStacks));
  } catch (e) {}

  if (nameInput) nameInput.value = "";
  if (cardsInput) cardsInput.value = "";
  changeStack(newId);
  showFeedback("ok", `Stack "${name}" salvo e selecionado.`);
}

function deleteCurrentStack() {
  const current = getActiveStack();
  if (current.builtin) return;
  customStacks = customStacks.filter(s => s.id !== current.id);
  try {
    localStorage.setItem("maxin_custom_stacks", JSON.stringify(customStacks));
  } catch (e) {}
  changeStack("tamariz");
}

function renderGrid(containerId, items, type, group) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = "";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = type === "val" ? "val-btn" : `suit-btn ${item.red ? "red" : ""}`;
    btn.textContent = type === "val" ? item.code : item.symbol;

    btn.onclick = () => {
      el.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (group === "target") {
        if (type === "val") state.targetVal = item.label;
        else state.targetSuit = item.name;
      } else {
        if (type === "val") state.bottomVal = item.label;
        else state.bottomSuit = item.name;
      }
      calculateImmediate();
    };
    el.appendChild(btn);
  });
}

function calculateImmediate() {
  const targetCard = state.targetVal && state.targetSuit ? `${state.targetVal} de ${state.targetSuit}` : null;
  const bottomCard = state.bottomVal && state.bottomSuit ? `${state.bottomVal} de ${state.bottomSuit}` : null;

  document.getElementById("label-target").textContent = targetCard || "—";
  document.getElementById("label-bottom").textContent = bottomCard || "—";

  if (!targetCard || !bottomCard) return;

  const stack = getActiveStack().cards;
  const targetIdx = stack.indexOf(targetCard);
  const bottomIdx = stack.indexOf(bottomCard);
  if (targetIdx === -1 || bottomIdx === -1) return;

  const topIdx = (bottomIdx + 1) % 52;
  const posTop = ((targetIdx - topIdx + 52) % 52) + 1;
  const posBottom = 53 - posTop;

  const topPhrase = getPhraseForPos(posTop, "pelo topo");
  const bottomPhrase = getPhraseForPos(posBottom, "pela boca");

  document.getElementById("result-panel").classList.remove("hidden");
  document.getElementById("pos-top").textContent = posTop;
  document.getElementById("pos-bottom").textContent = posBottom;

  document.getElementById("phrase-top-info").textContent = `FRASE CONTANDO PELO TOPO (${topPhrase.letters} LETRAS)`;
  document.getElementById("phrase-top-main").textContent = `"${topPhrase.text}"`;
  document.getElementById("phrase-top-sub").textContent = topPhrase.sub;

  document.getElementById("phrase-bottom-info").textContent = `FRASE CONTANDO PELA BOCA (${bottomPhrase.letters} LETRAS)`;
  document.getElementById("phrase-bottom-main").textContent = `"${bottomPhrase.text}"`;
  document.getElementById("phrase-bottom-sub").textContent = bottomPhrase.sub;

  document.getElementById("stealth-output").innerHTML = `
    - Stack: <strong>${getActiveStack().name}</strong><br>
    - Topo: <strong>${posTop}ª</strong> ("${topPhrase.text}")<br>
    - Boca: <strong>${posBottom}ª</strong> ("${bottomPhrase.text}")
  `;
}

function resetAll() {
  state.targetVal = null;
  state.targetSuit = null;
  state.bottomVal = null;
  state.bottomSuit = null;
  document.querySelectorAll(".val-btn, .suit-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("label-target").textContent = "—";
  document.getElementById("label-bottom").textContent = "—";
  document.getElementById("result-panel").classList.add("hidden");
}

function openStealth() {
  const el = document.getElementById("stealth-overlay");
  if (el) el.classList.remove("hidden");
}

function closeStealth() {
  const el = document.getElementById("stealth-overlay");
  if (el) el.classList.add("hidden");
}

function init() {
  syncSelectors();
  renderOrderList();
  renderGrid("target-values", VALUES, "val", "target");
  renderGrid("target-suits", SUITS, "suit", "target");
  renderGrid("bottom-values", VALUES, "val", "bottom");
  renderGrid("bottom-suits", SUITS, "suit", "bottom");
}

init();
