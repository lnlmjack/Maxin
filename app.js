const DEFAULT_STACKS = [
  {
    id: "tamariz",
    name: "Tamariz",
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
      sub: `${len} letras + passe mais ${pos - len} cartas para chegar na ${pos}ª ${sideLabel}`
    };
  }
  return {
    text: fallback,
    letters: len,
    sub: `${len} letras — conte ${pos} cartas (${sideLabel})`
  };
}

let stacks = DEFAULT_STACKS.map(s => ({ id: s.id, name: s.name, cards: [...s.cards] }));
try {
  const savedStacks = JSON.parse(localStorage.getItem("maxin_stacks") || "null");
  if (Array.isArray(savedStacks)) {
    stacks = savedStacks;
  } else {
    const legacyCustom = JSON.parse(localStorage.getItem("maxin_custom_stacks") || "[]");
    if (Array.isArray(legacyCustom) && legacyCustom.length > 0) {
      stacks = [...stacks, ...legacyCustom.map(s => ({ id: s.id, name: s.name, cards: [...s.cards] }))];
    }
  }
} catch (e) {}

function persistStacks() {
  try {
    localStorage.setItem("maxin_stacks", JSON.stringify(stacks));
  } catch (e) {}
}

let activeStackId = stacks[0] ? stacks[0].id : "tamariz";
try {
  const savedActive = localStorage.getItem("maxin_active_stack");
  if (savedActive && stacks.some(s => s.id === savedActive)) {
    activeStackId = savedActive;
  }
} catch (e) {}

let editingStackId = null;

const state = {
  targetVal: null,
  targetSuit: null,
  bottomVal: null,
  bottomSuit: null
};

/* TIMER + SOMALARME.MP3 */
const PICKER_ITEM_HEIGHT = 36;

let selectedHours = 0;
let selectedMinutes = 0;
let selectedSeconds = 37;
let timerInitialTotal = 37;
let timerRemaining = 37;
let timerInterval = null;
let timerRunning = false;
let timerMode = "picker"; // "picker" | "running" | "paused"
let alarmPlaying = false;
let holdingAlarmStealth = false;

function formatIphoneClock(totalSec) {
  const safe = Math.max(0, Math.floor(totalSec));
  const hrs = Math.floor(safe / 3600);
  const mins = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  if (hrs > 0) {
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatDurationSublabel(totalSec) {
  const safe = Math.max(0, Math.floor(totalSec));
  const hrs = Math.floor(safe / 3600);
  const mins = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  if (hrs > 0) return `${hrs} h ${mins} min ${secs} seg`;
  if (mins > 0) return `${mins} min ${secs} seg`;
  return `${secs} seg`;
}

function primeAlarmAudio() {
  try {
    const audioEl = document.getElementById("alarm-audio");
    if (!audioEl) return;
    if (!audioEl.getAttribute("src")) {
      audioEl.setAttribute("src", "somalarme.mp3");
    }
    audioEl.load();
    const prevMuted = audioEl.muted;
    audioEl.muted = true;
    const p = audioEl.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        audioEl.pause();
        audioEl.currentTime = 0;
        audioEl.muted = prevMuted;
      }).catch(() => {
        audioEl.muted = prevMuted;
      });
    } else {
      audioEl.muted = prevMuted;
    }
  } catch (e) {}
}

function playSomAlarmeMp3() {
  try {
    alarmPlaying = true;
    const audioEl = document.getElementById("alarm-audio");
    if (!audioEl) return;
    if (!audioEl.getAttribute("src")) {
      audioEl.setAttribute("src", "somalarme.mp3");
    }
    audioEl.muted = false;
    audioEl.volume = 1.0;
    audioEl.loop = true;
    audioEl.currentTime = 0;
    const playPromise = audioEl.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        const fallbackAudio = new Audio("./somalarme.mp3");
        fallbackAudio.loop = true;
        fallbackAudio.volume = 1.0;
        fallbackAudio.play().catch(() => {});
      });
    }
  } catch (e) {}
}

function stopIphoneAlarmSound() {
  alarmPlaying = false;
  try {
    const audioEl = document.getElementById("alarm-audio");
    if (audioEl) {
      audioEl.pause();
      audioEl.currentTime = 0;
      audioEl.loop = false;
    }
  } catch (e) {}
  renderIphoneTimerState();
}

function stopTimerTick() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerRunning = false;
}

function syncPickerValuesFromScroll() {
  const hList = document.getElementById("picker-hours");
  const mList = document.getElementById("picker-minutes");
  const sList = document.getElementById("picker-seconds");

  if (hList) {
    const idx = Math.round(hList.scrollTop / PICKER_ITEM_HEIGHT);
    selectedHours = Math.max(0, Math.min(23, idx));
  }
  if (mList) {
    const idx = Math.round(mList.scrollTop / PICKER_ITEM_HEIGHT);
    selectedMinutes = Math.max(0, Math.min(59, idx));
  }
  if (sList) {
    const idx = Math.round(sList.scrollTop / PICKER_ITEM_HEIGHT);
    selectedSeconds = Math.max(0, Math.min(59, idx));
  }

  const unitH = document.getElementById("label-unit-hours");
  if (unitH) unitH.textContent = selectedHours === 1 ? "hora" : "horas";
}

function getPickerTotalSeconds() {
  syncPickerValuesFromScroll();
  return (selectedHours * 3600) + (selectedMinutes * 60) + selectedSeconds;
}

function renderIphoneTimerState() {
  const pickerEl = document.getElementById("timer-picker");
  const setupControls = document.getElementById("timer-setup-controls");
  const countdownBox = document.getElementById("timer-countdown-box");
  const disp = document.getElementById("timer-display");
  const sublabel = document.getElementById("timer-sublabel");
  const statusEl = document.getElementById("timer-status");
  const runningPauseBtn = document.getElementById("btn-timer-running-toggle");
  const stopSoundBtn = document.getElementById("btn-timer-stop-sound");

  const showWheel = timerMode === "picker";
  if (pickerEl) pickerEl.classList.toggle("hidden", !showWheel);
  if (setupControls) setupControls.classList.toggle("hidden", !showWheel);
  if (countdownBox) countdownBox.classList.toggle("hidden", showWheel);

  if (!showWheel) {
    if (disp) disp.textContent = formatIphoneClock(timerRemaining);
    if (sublabel) sublabel.textContent = formatDurationSublabel(timerInitialTotal);
    if (runningPauseBtn) {
      const isPaused = timerMode === "paused";
      runningPauseBtn.textContent = isPaused ? "▶" : "❚❚";
      runningPauseBtn.classList.toggle("paused", isPaused);
    }
    if (statusEl) {
      if (timerMode === "paused") {
        statusEl.textContent = "Pausado";
        statusEl.className = "timer-status";
      } else {
        statusEl.textContent = "";
        statusEl.className = "timer-status";
      }
    }
  }

  if (stopSoundBtn) {
    stopSoundBtn.classList.toggle("hidden", !alarmPlaying);
  }
}

function highlightColumnItem(listEl, activeValue) {
  if (!listEl) return;
  const buttons = listEl.querySelectorAll(".picker-item");
  buttons.forEach((b, idx) => {
    b.classList.toggle("selected", idx === activeValue);
  });
  const unitH = document.getElementById("label-unit-hours");
  if (unitH) unitH.textContent = selectedHours === 1 ? "hora" : "horas";
}

function buildPickerColumn(containerId, maxVal, currentVal, onSelect) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = "";
  let scrollTimer = null;

  for (let v = 0; v <= maxVal; v++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `picker-item ${v === currentVal ? "selected" : ""}`;
    btn.textContent = String(v);
    btn.onclick = () => {
      onSelect(v);
      el.scrollTop = v * PICKER_ITEM_HEIGHT;
      highlightColumnItem(el, v);
    };
    el.appendChild(btn);
  }

  el.scrollTop = currentVal * PICKER_ITEM_HEIGHT;

  el.onscroll = () => {
    const idx = Math.max(0, Math.min(maxVal, Math.round(el.scrollTop / PICKER_ITEM_HEIGHT)));
    onSelect(idx);
    highlightColumnItem(el, idx);
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      el.scrollTop = idx * PICKER_ITEM_HEIGHT;
    }, 90);
  };
}

function initIphonePicker() {
  buildPickerColumn("picker-hours", 23, selectedHours, val => { selectedHours = val; });
  buildPickerColumn("picker-minutes", 59, selectedMinutes, val => { selectedMinutes = val; });
  buildPickerColumn("picker-seconds", 59, selectedSeconds, val => { selectedSeconds = val; });
}

function startCountdownWithSeconds(seconds, preserveInitialTotal = false) {
  primeAlarmAudio();
  stopIphoneAlarmSound();
  stopTimerTick();
  const total = Math.max(1, Math.floor(seconds));
  if (!preserveInitialTotal) {
    timerInitialTotal = total;
  }
  timerRemaining = total;
  timerRunning = true;
  timerMode = "running";
  renderIphoneTimerState();

  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    if (timerRemaining <= 0) {
      timerRemaining = 0;
      stopTimerTick();
      timerMode = "picker";
      renderIphoneTimerState();
      initIphonePicker();
      playSomAlarmeMp3();
      renderIphoneTimerState();
      return;
    }
    renderIphoneTimerState();
  }, 1000);
}

function toggleIphoneTimer() {
  primeAlarmAudio();
  if (alarmPlaying && timerMode === "picker") {
    stopIphoneAlarmSound();
    return;
  }
  if (timerMode === "running") {
    stopTimerTick();
    timerMode = "paused";
    renderIphoneTimerState();
    return;
  }
  if (timerMode === "paused") {
    startCountdownWithSeconds(timerRemaining > 0 ? timerRemaining : 1, true);
    return;
  }
  const total = getPickerTotalSeconds();
  startCountdownWithSeconds(total > 0 ? total : 5, false);
}

function cancelOrResetIphoneTimer() {
  stopIphoneAlarmSound();
  stopTimerTick();
  timerMode = "picker";
  renderIphoneTimerState();
  initIphonePicker();
}

function triggerFiveSecondAlarmTimer() {
  primeAlarmAudio();
  selectedHours = 0;
  selectedMinutes = 0;
  selectedSeconds = 5;
  openTimerScreen();
  startCountdownWithSeconds(5, false);
}

function openTimerScreen() {
  const timerEl = document.getElementById("timer-overlay");
  const mainEl = document.getElementById("main-app");
  if (timerEl) timerEl.classList.remove("hidden");
  if (mainEl) mainEl.classList.add("hidden");
  if (timerMode === "picker") initIphonePicker();
  renderIphoneTimerState();
}

function openCalcFromTimer() {
  const timerEl = document.getElementById("timer-overlay");
  const mainEl = document.getElementById("main-app");
  if (timerEl) timerEl.classList.add("hidden");
  if (mainEl) mainEl.classList.remove("hidden");
  syncSelectors();
  renderOrderList();
}

function holdStealthStart(ev) {
  if (ev && ev.cancelable) ev.preventDefault();
  if (holdingAlarmStealth) return;
  holdingAlarmStealth = true;
  const outEl = document.getElementById("stealth-output");
  if (outEl && outEl.textContent.trim() === "Aguardando cartas...") {
    outEl.innerHTML = `- Stack: <strong>${getActiveStack().name}</strong><br>- Selecione carta e boca na tela do sistema para ver topo e boca.`;
  }
  openStealth();
}

function holdStealthEnd() {
  if (!holdingAlarmStealth) return;
  holdingAlarmStealth = false;
  closeStealth();
  openTimerScreen();
}

window.addEventListener("pointerup", holdStealthEnd, { passive: true });
window.addEventListener("pointercancel", holdStealthEnd, { passive: true });
window.addEventListener("touchend", holdStealthEnd, { passive: true });
window.addEventListener("touchcancel", holdStealthEnd, { passive: true });
window.addEventListener("mouseup", holdStealthEnd, { passive: true });

function getActiveStack() {
  if (stacks.length === 0) {
    return { id: "", name: "Sem stacks", cards: [] };
  }
  return stacks.find(s => s.id === activeStackId) || stacks[0];
}

function updateEditModeUI() {
  const saveBtn = document.getElementById("btn-save-stack");
  const cancelBtn = document.getElementById("btn-cancel-edit");
  if (editingStackId) {
    if (saveBtn) saveBtn.textContent = "Salvar Alterações";
    if (cancelBtn) cancelBtn.classList.remove("hidden");
  } else {
    if (saveBtn) saveBtn.textContent = "Salvar Novo Stack";
    if (cancelBtn) cancelBtn.classList.add("hidden");
  }
}

function syncSelectors() {
  const current = getActiveStack();
  if (current && current.id) {
    activeStackId = current.id;
  }

  ["stack-selector", "panel-stack-select"].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = "";
    if (stacks.length === 0) {
      const opt = document.createElement("option");
      opt.value = "";
      opt.textContent = "Nenhum stack";
      sel.appendChild(opt);
      return;
    }
    stacks.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.name;
      if (s.id === activeStackId) opt.selected = true;
      sel.appendChild(opt);
    });
  });

  const hasStacks = stacks.length > 0;
  const delBtn = document.getElementById("btn-delete-stack");
  const editBtn = document.getElementById("btn-edit-stack");
  if (delBtn) delBtn.classList.toggle("hidden", !hasStacks);
  if (editBtn) editBtn.classList.toggle("hidden", !hasStacks);
  updateEditModeUI();
}

function renderOrderList() {
  const listEl = document.getElementById("stack-order-list");
  if (!listEl) return;
  listEl.innerHTML = "";
  const active = getActiveStack();
  if (!active || !active.cards || active.cards.length === 0) return;
  active.cards.forEach((card, idx) => {
    const isRed = card.includes("copas") || card.includes("ouros");
    const div = document.createElement("div");
    div.className = `order-item ${isRed ? "red-suit" : ""}`;
    div.innerHTML = `<span class="order-num">#${idx + 1}</span><span>${card}</span>`;
    listEl.appendChild(div);
  });
}

function toggleManualPanel(forceOpen) {
  const manualPanel = document.getElementById("manual-panel");
  const stacksPanel = document.getElementById("stacks-panel");
  if (!manualPanel) return;
  if (typeof forceOpen === "boolean") {
    manualPanel.classList.toggle("hidden", !forceOpen);
  } else {
    manualPanel.classList.toggle("hidden");
  }
  if (!manualPanel.classList.contains("hidden") && stacksPanel) {
    stacksPanel.classList.add("hidden");
  }
}

function toggleStacksPanel(forceOpen) {
  const panel = document.getElementById("stacks-panel");
  const manualPanel = document.getElementById("manual-panel");
  if (!panel) return;
  if (typeof forceOpen === "boolean") {
    panel.classList.toggle("hidden", !forceOpen);
  } else {
    panel.classList.toggle("hidden");
  }
  if (!panel.classList.contains("hidden") && manualPanel) {
    manualPanel.classList.add("hidden");
  }
  syncSelectors();
  renderOrderList();
}

function changeStack(newId) {
  activeStackId = newId;
  if (editingStackId && editingStackId !== newId) {
    editingStackId = null;
    const nameInput = document.getElementById("new-stack-name");
    const cardsInput = document.getElementById("new-stack-cards");
    if (nameInput) nameInput.value = "";
    if (cardsInput) cardsInput.value = "";
  }
  try {
    localStorage.setItem("maxin_active_stack", activeStackId);
  } catch (e) {}
  syncSelectors();
  renderOrderList();
  calculateImmediate();
}

function loadCurrentStackForEdit() {
  if (stacks.length === 0) return;
  const current = getActiveStack();
  const nameInput = document.getElementById("new-stack-name");
  const cardsInput = document.getElementById("new-stack-cards");
  const fb = document.getElementById("new-stack-feedback");
  if (fb) fb.classList.add("hidden");

  editingStackId = current.id;
  if (nameInput) nameInput.value = current.name;
  if (cardsInput) cardsInput.value = current.cards.join("\n");
  updateEditModeUI();
  showFeedback("ok", `Editando "${current.name}". Altere e clique em "Salvar Alterações".`);
}

function cancelEditStack() {
  editingStackId = null;
  const nameInput = document.getElementById("new-stack-name");
  const cardsInput = document.getElementById("new-stack-cards");
  const fb = document.getElementById("new-stack-feedback");
  if (nameInput) nameInput.value = "";
  if (cardsInput) cardsInput.value = "";
  if (fb) fb.classList.add("hidden");
  updateEditModeUI();
}

function parseCardLine(raw) {
  if (typeof raw !== "string") return null;

  var normalized = raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  var cleaned = "";
  for (var i = 0; i < normalized.length; i++) {
    var ch = normalized.charAt(i);
    var code = normalized.charCodeAt(i);
    var isLetter = code >= 97 && code <= 122;
    var isDigit = code >= 48 && code <= 57;
    var isSuitSymbol = ch === "\u2663" || ch === "\u2665" || ch === "\u2660" || ch === "\u2666";
    if (isLetter || isDigit || isSuitSymbol) {
      cleaned += ch;
    } else {
      cleaned += " ";
    }
  }

  cleaned = cleaned.replace(/\s+/g, " ").trim();
  if (!cleaned) return null;

  var values = {
    "a": "ás", "as": "ás", "1": "ás", "um": "ás",
    "2": "2", "dois": "2",
    "3": "3", "tres": "3",
    "4": "4", "quatro": "4",
    "5": "5", "cinco": "5",
    "6": "6", "seis": "6",
    "7": "7", "sete": "7",
    "8": "8", "oito": "8",
    "9": "9", "nove": "9",
    "10": "10", "dez": "10",
    "j": "valete", "valete": "valete",
    "q": "dama", "dama": "dama",
    "k": "rei", "rei": "rei"
  };

  var suits = {
    "\u2663": "paus", "p": "paus", "paus": "paus",
    "\u2665": "copas", "c": "copas", "copas": "copas",
    "\u2660": "espadas", "e": "espadas", "espadas": "espadas",
    "\u2666": "ouros", "o": "ouros", "ouros": "ouros"
  };

  var parts = cleaned.split(" ");
  var foundVal = null;
  var foundSuit = null;

  for (var j = 0; j < parts.length; j++) {
    var token = parts[j];
    if (!token || token === "de") continue;
    if (!foundVal && values[token]) {
      foundVal = values[token];
      continue;
    }
    if (!foundSuit && suits[token]) {
      foundSuit = suits[token];
    }
  }

  if (!foundVal || !foundSuit) {
    var compact = cleaned.replace(/\s+/g, "");
    for (var key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key) && compact.indexOf(key) === 0) {
        var rest = compact.slice(key.length);
        if (rest.indexOf("de") === 0) rest = rest.slice(2);
        if (suits[rest]) {
          foundVal = values[key];
          foundSuit = suits[rest];
          break;
        }
      }
    }
  }

  return (foundVal && foundSuit) ? (foundVal + " de " + foundSuit) : null;
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
  const rawLines = cardsInput
    ? cardsInput.value.split(/\r?\n|[,;]+/).map(l => l.trim()).filter(Boolean)
    : [];

  if (!name) {
    showFeedback("error", "Informe um nome para o stack.");
    return;
  }

  if (rawLines.length !== 52) {
    showFeedback("error", `É preciso colar 52 cartas (encontrei ${rawLines.length}).`);
    return;
  }

  const parsed = [];
  for (let i = 0; i < rawLines.length; i++) {
    const card = parseCardLine(rawLines[i]);
    if (!card) {
      showFeedback("error", `Carta inválida na posição ${i + 1}: "${rawLines[i]}".`);
      return;
    }
    if (parsed.includes(card)) {
      showFeedback("error", `Carta repetida na posição ${i + 1}: "${card}".`);
      return;
    }
    parsed.push(card);
  }

  let targetId = null;
  if (editingStackId) {
    const idx = stacks.findIndex(s => s.id === editingStackId);
    if (idx !== -1) {
      stacks[idx] = { id: editingStackId, name, cards: parsed };
      targetId = editingStackId;
    }
    editingStackId = null;
  }

  if (!targetId) {
    targetId = "custom_" + Date.now();
    stacks.push({ id: targetId, name, cards: parsed });
  }

  persistStacks();

  if (nameInput) nameInput.value = "";
  if (cardsInput) cardsInput.value = "";
  updateEditModeUI();
  changeStack(targetId);
  showFeedback("ok", `Stack "${name}" salvo e selecionado.`);
}

function deleteCurrentStack() {
  if (stacks.length === 0) return;
  const current = getActiveStack();
  if (editingStackId === current.id) {
    editingStackId = null;
  }
  stacks = stacks.filter(s => s.id !== current.id);
  persistStacks();
  const nextId = stacks[0] ? stacks[0].id : "";
  changeStack(nextId);
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

  const lblTarget = document.getElementById("label-target");
  const lblBottom = document.getElementById("label-bottom");
  if (lblTarget) lblTarget.textContent = targetCard || "—";
  if (lblBottom) lblBottom.textContent = bottomCard || "—";

  if (!targetCard || !bottomCard) return;

  const stack = getActiveStack().cards;
  if (!stack || stack.length === 0) return;
  const targetIdx = stack.indexOf(targetCard);
  const bottomIdx = stack.indexOf(bottomCard);
  if (targetIdx === -1 || bottomIdx === -1) return;

  const topIdx = (bottomIdx + 1) % 52;
  const posTop = ((targetIdx - topIdx + 52) % 52) + 1;
  const posBottom = 53 - posTop;

  const topPhrase = getPhraseForPos(posTop, "pelo topo");
  const bottomPhrase = getPhraseForPos(posBottom, "pela boca");

  document.getElementById("result-panel").classList.remove("hidden");
  document.getElementById("pos-top").textContent = `${posTop}ª`;
  document.getElementById("pos-bottom").textContent = `${posBottom}ª`;

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
  openTimerScreen();
  syncSelectors();
  renderOrderList();
  renderGrid("target-values", VALUES, "val", "target");
  renderGrid("target-suits", SUITS, "suit", "target");
  renderGrid("bottom-values", VALUES, "val", "bottom");
  renderGrid("bottom-suits", SUITS, "suit", "bottom");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
