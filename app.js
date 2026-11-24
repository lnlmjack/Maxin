function parseCardLine(raw) {
  let clean = raw
    .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, " ")
    .trim()
    .toLowerCase()
    .replace(/^\d+[\.\)\-\s]+/, "")
    .replace(/\s+/g, " ")
    .trim();

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

  const fullMatch = clean.match(/^(ás|2|3|4|5|6|7|8|9|10|valete|dama|rei)\s+de\s+(paus|copas|espadas|ouros)$/);
  if (fullMatch) {
    return `${fullMatch[1]} de ${fullMatch[2]}`;
  }

  return null;
}
