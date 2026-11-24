function parseCardLine(raw) {
  if (!raw || typeof raw !== "string") return null;

  const cleaned = raw
    .replace(/[\u200B-\u200D\uFEFF\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^\d+[\.\)\-\s]+/, "")
    .trim();

  if (!cleaned) return null;

  const valMap = {
    "a": "ás",
    "as": "ás",
    "um": "ás",
    "1": "ás",
    "2": "2",
    "dois": "2",
    "3": "3",
    "tres": "3",
    "4": "4",
    "quatro": "4",
    "5": "5",
    "cinco": "5",
    "6": "6",
    "seis": "6",
    "7": "7",
    "sete": "7",
    "8": "8",
    "oito": "8",
    "9": "9",
    "nove": "9",
    "10": "10",
    "dez": "10",
    "j": "valete",
    "valete": "valete",
    "q": "dama",
    "dama": "dama",
    "k": "rei",
    "rei": "rei"
  };

  const suitMap = {
    "♣": "paus",
    "p": "paus",
    "paus": "paus",
    "♥": "copas",
    "c": "copas",
    "copas": "copas",
    "♠": "espadas",
    "e": "espadas",
    "espadas": "espadas",
    "♦": "ouros",
    "o": "ouros",
    "ouros": "ouros"
  };

  // Tenta formato curto sem espaço (ex: "4♣", "10c", "q♥", "as")
  const compact = cleaned.replace(/\s+/g, "");
  const shortMatch = compact.match(/^(10|[2-9jqk]|as|um|dois|tres|quatro|cinco|seis|sete|oito|nove|dez|valete|dama|rei|a)(?:de)?(♣|♥|♠|♦|paus|copas|espadas|ouros|[pceo])$/);
  if (shortMatch) {
    const v = valMap[shortMatch[1]];
    const s = suitMap[shortMatch[2]];
    if (v && s) return `${v} de ${s}`;
  }

  // Separa por espaços, removendo "de"
  const parts = cleaned.split(/\s+/).filter(p => p && p !== "de");
  if (parts.length >= 2) {
    const v = valMap[parts[0]];
    const s = suitMap[parts[1]];
    if (v && s) return `${v} de ${s}`;
  }

  return null;
}
