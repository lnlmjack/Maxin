function parseFlexibleCardList(rawText) {
  if (!rawText || typeof rawText !== "string") return [];
  return rawText
    .split(/\r?\n|[,;]+/)
    .map(item => item.trim())
    .filter(Boolean);
}

function saveFlexibleStack() {
  const nameInput = document.getElementById("new-stack-name");
  const listInput = document.getElementById("new-stack-cards") || document.getElementById("new-stack-inline");
  const fb = document.getElementById("new-stack-feedback");
  if (fb) fb.classList.add("hidden");

  const name = nameInput ? nameInput.value.trim() : "";
  const rawItems = listInput ? parseFlexibleCardList(listInput.value) : [];

  if (!name) {
    showFeedback("error", "Informe um nome para o stack.");
    return;
  }

  if (rawItems.length !== 52) {
    showFeedback("error", `Envie exatamente 52 cartas (encontrei ${rawItems.length}).`);
    return;
  }

  const parsed = [];
  for (let i = 0; i < rawItems.length; i++) {
    const card = parseCardLine(rawItems[i]);
    if (!card) {
      showFeedback("error", `Carta inválida na posição ${i + 1}: "${rawItems[i]}".`);
      return;
    }
    if (parsed.includes(card)) {
      showFeedback("error", `Carta repetida na posição ${i + 1}: "${card}".`);
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
  if (listInput) listInput.value = "";
  changeStack(newId);
  showFeedback("ok", `Stack "${name}" salvo e selecionado.`);
}
