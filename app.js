function parseCardLine(raw) {
  if (typeof raw !== "string") return null;

  const text = raw
    .replace(/[^a-zA-Z0-9áéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ♣♥♠♦\s]/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  if (!text) return null;

  const tokens = text.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return null;

  // Se vier colado tipo "4♣", "10c", "q♥", "8e", "8deespadas"
  const joined = tokens.join("");

  const valAliases = {
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

  const suitAliases = {
    "♣": "paus", "p": "paus", "paus": "paus",
    "♥": "copas", "c": "copas", "copas": "copas",
    "♠": "espadas", "e": "espadas", "espadas": "espadas",
    "♦": "ouros", "o": "ouros", "ouros": "ouros"
  };

  let foundVal = null;
  let foundSuit = null;

  // Procura valor nos tokens
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t === "de") continue;
    if (!foundVal && valAliases[t]) {
      foundVal = valAliases[t];
      continue;
    }
    if (!foundSuit && suitAliases[t]) {
      foundSuit = suitAliases[t];
    }
  }

  // Fallback para formato compacto (ex: "8espadas", "4paus", "10c")
  if (!foundVal || !foundSuit) {
    for (const [k, v] of Object.entries(valAliases)) {
      if (joined.startsWith(k)) {
        const rest = joined.slice(k.length).replace(/^de/, "");
        if (suitAliases[rest]) {
          foundVal = v;
          foundSuit = suitAliases[rest];
          break;
        }
      }
    }
  }

  if (foundVal && foundSuit) {
    return `${foundVal} de ${foundSuit}`;
  }

  return null;
}
