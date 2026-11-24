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

const RAW_PHRASES = [
  "É",
  "É A",
  "AQUI",
  "É ELA",
  "A CARTA",
  "ACHEI A",
  "SUA CARTA",
  "A SUA CARTA",
  "É A SUA CARTA",
  "A CARTA CERTA",
  "ACHEI A CARTA",
  "ESSA É A CARTA",
  "A CARTA PENSADA",
  "ESTA É A SUA CARTA",
  "A CARTA QUE PENSOU",
  "A SUA CARTA PENSADA",
  "A CARTA ESCOLHIDA É",
  "A CARTA QUE ESCOLHEU",
  "A SUA CARTA ESCOLHIDA",
  "ESSA É A SUA CARTA CERTA",
  "A CARTA QUE VOCÊ PENSOU",
  "A CARTA QUE VOCÊ FALOU É",
  "A CARTA QUE VOCÊ PENSOU É",
  "ESTA É A CARTA ESCOLHIDA",
  "A CARTA QUE VOCÊ ESCOLHEU",
  "A CARTA QUE VOCÊ PENSOU FOI",
  "ESTA É A CARTA QUE VOCÊ DISSE",
  "A CARTA QUE VOCÊ PENSOU FOI A",
  "ESTA É A CARTA QUE VOCÊ PENSOU",
  "A CARTA QUE VOCÊ ESCOLHEU FOI A",
  "A CARTA QUE VOCÊ PENSOU ESTÁ AQUI",
  "ESTA É A SUA CARTA LIVREMENTE DITA",
  "ESSA É A CARTA QUE VOCÊ ESCOLHEU",
  "A CARTA QUE VOCÊ PENSOU É ESSA AQUI",
  "ESTA É A CARTA QUE VOCÊ IMAGINOU",
  "A CARTA QUE VOCÊ ESCOLHEU ESTÁ AQUI",
  "ESTA É A CARTA QUE VOCÊ PENSOU HOJE",
  "A CARTA QUE VOCÊ PENSOU EM SEGREDO É",
  "ESSA É A CARTA QUE VOCÊ ESCOLHEU HOJE",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE É",
  "ESTA É A CARTA QUE VOCÊ FALOU AGORA",
  "A CARTA QUE VOCÊ ESCOLHEU EM SEGREDO É",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE FOI",
  "ESTA É A CARTA QUE VOCÊ ESCOLHEU HOJE",
  "A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR",
  "A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE HOJE É",
  "A CARTA QUE VOCÊ PENSOU ANTES DE EMBARALHAR",
  "A CARTA QUE VOCÊ ESCOLHEU ANTES DE EMBARALHAR",
  "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ESTÁ AQUI",
  "A CARTA QUE VOCÊ PENSOU EM SEGREDO ESTÁ BEM AQUI",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE ESTÁ BEM AQUI",
  "ESTA É A CARTA QUE VOCÊ PENSOU ANTES DE EMBARALHAR",
  "ESTA É A CARTA QUE VOCÊ ESCOLHEU ANTES DE EMBARALHAR",
  "A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO É",
  "A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO É",
  "A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO FOI A",
  "A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO FOI A",
  "ESTA É A CARTA QUE VOCÊ PENSOU ANTES DE CORTAR O BARALHO HOJE",
  "ESTA É A CARTA QUE VOCÊ ESCOLHEU ANTES DE CORTAR O BARALHO HOJE",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO É",
  "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO É",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO FOI A",
  "A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO FOI A",
  "ESTA É A CARTA QUE VOCÊ ESCOLHEU LIVREMENTE ANTES DE CORTAR O BARALHO",
  "A CARTA QUE VOCÊ PENSOU LIVREMENTE ANTES DE CORTAR O BARALHO ESTÁ AQUI"
];

function countLetters(text) {
  return text.replace(/[^a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]/g, "").length;
}

const PHRASES_BY_LENGTH = {};
RAW_PHRASES.forEach(phrase => {
  const len = countLetters(phrase);
  if (!PHRASES_BY_LENGTH[len]) PHRASES_BY_LENGTH[len] = [];
  if (!PHRASES_BY_LENGTH[len].includes(phrase)) {
    PHRASES_BY_LENGTH[len].push(phrase);
  }
});

const state = {
  targetVal: null,
  targetSuit: null,
  bottomVal: null,
  bottomSuit: null
};

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
      calculateImmediate();
    };
    el.appendChild(btn);
  });
}

function getPhraseForPos(posTop) {
  const exactList = PHRASES_BY_LENGTH[posTop];
  if (exactList && exactList.length > 0) {
    const text = exactList[0];
    return {
      text,
      letters: countLetters(text),
      sub: `${countLetters(text)} letras — cai EXATO na última letra (${posTop}ª carta pelo topo)`
    };
  }

  if (posTop > 1 && PHRASES_BY_LENGTH[posTop - 1]) {
    const text = PHRASES_BY_LENGTH[posTop - 1][0];
    return {
      text,
      letters: countLetters(text),
      sub: `${countLetters(text)} letras — soletra e vira a PRÓXIMA carta (${posTop}ª pelo topo)`
    };
  }

  const fallback = "A CARTA QUE VOCÊ PENSOU FOI";
  const len = countLetters(fallback);
  return {
    text: fallback,
    letters: len,
    sub: posTop > len
      ? `${len} letras + passe mais ${posTop - len} carta(s) (${posTop}ª pelo topo)`
      : `${len} letras — conte ${posTop} carta(s) do topo`
  };
}

function calculateImmediate() {
  const targetCard = state.targetVal && state.targetSuit ? `${state.targetVal} de ${state.targetSuit}` : null;
  const bottomCard = state.bottomVal && state.bottomSuit ? `${state.bottomVal} de ${state.bottomSuit}` : null;

  document.getElementById("label-target").textContent = targetCard || "—";
  document.getElementById("label-bottom").textContent = bottomCard || "—";

  if (!targetCard || !bottomCard) return;

  const targetIdx = TAMARIZ.indexOf(targetCard);
  const bottomIdx = TAMARIZ.indexOf(bottomCard);
  if (targetIdx === -1 || bottomIdx === -1) return;

  const topIdx = (bottomIdx + 1) % 52;
  const posTop = ((targetIdx - topIdx + 52) % 52) + 1;
  const posBottom = 53 - posTop;

  const phraseObj = getPhraseForPos(posTop);

  document.getElementById("result-panel").classList.remove("hidden");
  document.getElementById("pos-top").textContent = posTop;
  document.getElementById("pos-bottom").textContent = posBottom;
  document.getElementById("phrase-info").textContent = `FRASE PARA SOLETRAR (${phraseObj.letters} LETRAS)`;
  document.getElementById("phrase-main").textContent = `"${phraseObj.text}"`;
  document.getElementById("phrase-sub").textContent = phraseObj.sub;

  document.getElementById("stealth-output").innerHTML = `
    - Topo: <strong>${posTop}ª</strong> | Boca: <strong>${posBottom}ª</strong><br>
    - Frase: "${phraseObj.text}"<br>
    - ${phraseObj.sub}
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
