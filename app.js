// Mnemônica de Tamariz (1 = Topo, 52 = Boca/Base)
const TAMARIZ = [
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

// Banco de frases naturais em português indexadas pelo número exato de letras (sem espaços)
const PHRASES_BY_LENGTH = {
  1: ["A"],
  2: ["É A", "VAI"],
  3: ["ELA É", "CARTA"],
  4: ["AQUI É", "PAREI"],
  5: ["A CARTA", "ACHEI A"],
  6: ["É ESSA A", "A SUA É A"],
  7: ["ACHEI ELA", "ESSA CARTA"],
  8: ["A SUA CARTA", "CARTA CERTA"],
  9: ["É A SUA CARTA", "CARTA PENSADA"],
  10: ["ACHEI A CARTA", "A CARTA PENSADA"],
  11: ["ESSA É A CARTA", "A CARTA ESCOLHIDA"],
  12: ["A CARTA QUE PENSOU", "ESTA É A SUA CARTA"],
  13: ["A CARTA QUE ESCOLHEU", "SUA CARTA ESTÁ AQUI"],
  14: ["A SUA CARTA PENSADA", "A CARTA QUE VOCÊ DISSE"],
  15: ["ESSA É A CARTA CERTA", "A CARTA QUE VOCÊ FALOU"],
  16: ["A CARTA QUE VOCÊ PENSOU", "ESTA É A CARTA ESCOLHIDA"],
  17: ["A SUA CARTA ESCOLHIDA", "A CARTA QUE VOCÊ ESCOLHEU"],
  18: ["ESSA É A SUA CARTA CERTA", "A CARTA LIVREMENTE PENSADA"],
  19: ["A CARTA QUE VOCÊ PENSOU É", "ESTA É A CARTA QUE ESCOLHEU"],
  20: ["ESSA É A CARTA QUE PENSOU", "A SUA CARTA ESTÁ BEM AQUI"],
  21: ["A CARTA QUE VOCÊ PENSOU FOI", "ESTA É A CARTA QUE VOCÊ DISSE"],
  22: ["A CARTA QUE VOCÊ PENSOU FOI A", "ESSA É A CARTA QUE VOCÊ PENSOU"],
  23: ["ESTA É A CARTA QUE VOCÊ PENSOU", "A CARTA QUE VOCÊ ESCOLHEU FOI A"],
  24: ["A CARTA QUE VOCÊ PENSOU ESTÁ AQUI", "ESTA É A SUA CARTA LIVREMENTE DITA"],
  25: ["ESSA É A CARTA QUE VOCÊ ESCOLHEU", "A CARTA QUE VOCÊ FALOU ESTÁ AQUI"],
  26: ["A CARTA QUE VOCÊ PENSOU É ESSA AQUI", "ESTA É A CARTA QUE VOCÊ IMAGINOU"],
  27: ["A CARTA QUE VOCÊ ESCOLHEU ESTÁ AQUI", "ESTA É A CARTA QUE VOCÊ PENSOU HOJE"],
  28: ["A CARTA QUE VOCÊ PENSOU EM SEGREDO É", "ESSA É A CARTA QUE VOCÊ ESCOLHEU HOJE"],
  29: ["A CARTA QUE VOCÊ PENSOU LIVREMENTE É", "ESTA É A CARTA QUE VOCÊ FALOU AGORA"],
  30: ["A CARTA QUE VOCÊ ESCOLHEU EM SEGREDO É", "ESSA É A CARTA QUE VOCÊ PENSOU AGORA"],
  31: ["A CARTA QUE VOCÊ PENSOU LIVREMENTE FOI", "ESTA É A CARTA QUE VOCÊ ESCOLHEU HOJE"],
  32: ["A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR", "ESTA É A CARTA QUE VOCÊ PENSOU EM MENTE"],
  33: ["A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR", "ESSA É A CARTA QUE VOCÊ PENSOU LIVREMENTE"],
  34: ["A CARTA QUE VOCÊ PENSOU LIVREMENTE HOJE É", "ESTA É A CARTA QUE VOCÊ ESCOLHEU EM MENTE"],
  35: ["A CARTA QUE VOCÊ PENSOU ANTES DE EMBARALHAR", "ESTA É A CARTA QUE VOCÊ PENSOU EM SEGREDO HOJE"],
  36: ["A CARTA QUE VOCÊ ESCOLHEU ANTES DE EMBARALHAR", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ESTÁ AQUI"],
  37: ["A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ESTÁ AQUI", "ESTA É A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR"],
  38: ["A CARTA QUE VOCÊ PENSOU EM SEGREDO ESTÁ BEM AQUI", "ESTA É A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR"],
  39: ["A CARTA QUE VOCÊ PENSOU LIVREMENTE ESTÁ BEM AQUI", "A CARTA QUE VOCÊ ESCOLHEU EM SEGREDO ESTÁ BEM AQUI"],
  40: ["ESTA É A CARTA QUE VOCÊ PENSOU ANTES DE EMBARALHAR", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR"],
  41: ["ESTA É A CARTA QUE VOCÊ ESCOLHEU ANTES DE EMBARALHAR", "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR"],
  42: ["A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO É", "ESTA É A CARTA QUE VOCÊ PENSOU LIVREMENTE EM SEGREDO"],
  43: ["A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO É", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR HOJE"],
  44: ["A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO FOI A", "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR HOJE"],
  45: ["A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO FOI A", "ESTA É A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR"],
  46: ["ESTA É A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO HOJE", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE EMBARALHAR HOJE"],
  47: ["ESTA É A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO HOJE", "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE EMBARALHAR HOJE"],
  48: ["A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO É", "ESTA É A CARTA QUE VOCÊ PENSOU EM SEGREDO ANTES DE EMBARALHAR"],
  49: ["A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO É", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO FOI"],
  50: ["A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO FOI A", "ESTA É A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE EMBARALHAR"],
  51: ["A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO FOI A", "ESTA É A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO"],
  52: ["ESTA É A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO", "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO ESTÁ AQUI"]
};

const state = {
  targetVal: null,
  targetSuit: null,
  bottomVal: null,
  bottomSuit: null
};

function countLetters(text) {
  return text.replace(/[^a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]/g, "").length;
}

function spellCardName(cardName) {
  return cardName
    .replace(/^2 /, "DOIS ")
    .replace(/^3 /, "TRÊS ")
    .replace(/^4 /, "QUATRO ")
    .replace(/^5 /, "CINCO ")
    .replace(/^6 /, "SEIS ")
    .replace(/^7 /, "SETE ")
    .replace(/^8 /, "OITO ")
    .replace(/^9 /, "NOVE ")
    .replace(/^10 /, "DEZ ")
    .replace(/^ás /, "ÁS ")
    .toUpperCase();
}

function renderGrid(containerId, items, type, group) {
  const el = document.getElementById(containerId);
  items.forEach(item => {
    const btn = document.createElement("button");
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
      updateLabelsAndCalculate();
    };
    el.appendChild(btn);
  });
}

function updateLabelsAndCalculate() {
  const targetCard = state.targetVal && state.targetSuit ? `${state.targetVal} de ${state.targetSuit}` : null;
  const bottomCard = state.bottomVal && state.bottomSuit ? `${state.bottomVal} de ${state.bottomSuit}` : null;

  document.getElementById("label-target").textContent = targetCard || "—";
  document.getElementById("label-bottom").textContent = bottomCard || "—";

  if (!targetCard || !bottomCard) return;

  const targetIdx = TAMARIZ.indexOf(targetCard); // 0 a 51
  const bottomIdx = TAMARIZ.indexOf(bottomCard); // 0 a 51
  if (targetIdx === -1 || bottomIdx === -1) return;

  // Se bottomIdx está na boca (52ª posição), a carta do topo é (bottomIdx + 1) % 52
  const topIdx = (bottomIdx + 1) % 52;

  // Posição pelo topo (1 a 52)
  const posFromTop = ((targetIdx - topIdx + 52) % 52) + 1;
  // Posição pela boca/base (1 a 52)
  const posFromBottom = 53 - posFromTop;

  document.getElementById("result-panel").classList.remove("hidden");
  document.getElementById("pos-top").textContent = posFromTop;
  document.getElementById("pos-bottom").textContent = posFromBottom;

  const phrases = buildPhrases(targetCard, posFromTop, posFromBottom);
  const listEl = document.getElementById("phrases-list");
  listEl.innerHTML = "";

  phrases.forEach(item => {
    const div = document.createElement("div");
    div.className = "phrase-item";
    div.innerHTML = `
      <div class="phrase-text">"${item.text}"</div>
      <div class="phrase-meta">${item.note}</div>
    `;
    listEl.appendChild(div);
  });

  // Atualiza Stealth
  document.getElementById("stealth-output").innerHTML = `
    - Topo: <strong>${posFromTop}</strong> | Boca: <strong>${posFromBottom}</strong><br>
    - Frase (${phrases[0].letters} letras):<br>
    "${phrases[0].text}"<br>
    - ${phrases[0].note}
  `;
}

function buildPhrases(targetCard, posTop, posBottom) {
  const results = [];
  const spelledCard = spellCardName(targetCard);
  const cardLetters = countLetters(spelledCard);

  // 1. Frase com a própria carta incluida se bater exato com posTop
  const directTemplates = [
    `O ${spelledCard}`,
    `A CARTA É O ${spelledCard}`,
    `VOCÊ PENSOU NO ${spelledCard}`,
    `A SUA CARTA É O ${spelledCard}`,
    `A CARTA ESCOLHIDA É O ${spelledCard}`,
    `A CARTA QUE VOCÊ PENSOU É O ${spelledCard}`,
    `A CARTA QUE VOCÊ ESCOLHEU É O ${spelledCard}`
  ];

  directTemplates.forEach(tpl => {
    if (countLetters(tpl) === posTop) {
      results.push({
        text: tpl,
        letters: posTop,
        note: `Cai EXATO na última letra (${posTop}ª carta pelo topo)`
      });
    }
  });

  // 2. Frase genérica do banco cujo número exato de letras = posTop (cai na última letra)
  const exactPool = PHRASES_BY_LENGTH[posTop] || [];
  exactPool.forEach(phrase => {
    results.push({
      text: phrase,
      letters: countLetters(phrase),
      note: `Cai EXATO na última letra (${posTop}ª carta pelo topo)`
    });
  });

  // 3. Frase com (posTop - 1) letras: soletra a frase e vira a PRÓXIMA carta
  if (posTop > 1 && PHRASES_BY_LENGTH[posTop - 1]) {
    const nextPhrase = PHRASES_BY_LENGTH[posTop - 1][0];
    results.push({
      text: nextPhrase,
      letters: countLetters(nextPhrase),
      note: `Soletra ${posTop - 1} letras e vira a PRÓXIMA carta (${posTop}ª do topo)`
    });
  }

  // 4. Opção pela BOCA (caso seja mais curta e rápida)
  if (posBottom < posTop && PHRASES_BY_LENGTH[posBottom]) {
    const bottomPhrase = PHRASES_BY_LENGTH[posBottom][0];
    results.push({
      text: bottomPhrase,
      letters: countLetters(bottomPhrase),
      note: `PELA BOCA: soletra ${posBottom} letras virando o baralho de face para cima`
    });
  }

  return results;
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

function init() {
  renderGrid("target-values", VALUES, "val", "target");
  renderGrid("target-suits", SUITS, "suit", "target");
  renderGrid("bottom-values", VALUES, "val", "bottom");
  renderGrid("bottom-suits", SUITS, "suit", "bottom");

  document.getElementById("btn-clear").onclick = resetAll;
  document.getElementById("btn-stealth").onclick = () => {
    document.getElementById("stealth-overlay").classList.remove("hidden");
  };
  document.getElementById("btn-exit-stealth").onclick = () => {
    document.getElementById("stealth-overlay").classList.add("hidden");
  };
}

init();
