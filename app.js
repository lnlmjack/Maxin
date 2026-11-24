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

  cleaned = cleaned.replace(/^\d+\s+/, "").replace(/\s+/g, " ").trim();
  if (!cleaned) return null;

  var values = {
    "a": "ás",
    "as": "ás",
    "1": "ás",
    "um": "ás",
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

  var suits = {
    "\u2663": "paus",
    "p": "paus",
    "paus": "paus",
    "\u2665": "copas",
    "c": "copas",
    "copas": "copas",
    "\u2660": "espadas",
    "e": "espadas",
    "espadas": "espadas",
    "\u2666": "ouros",
    "o": "ouros",
    "ouros": "ouros"
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

  if (foundVal && foundSuit) {
    return foundVal + " de " + foundSuit;
  }

  return null;
}
