function decodeBase64(str) {
  try {
    return atob(str);
  } catch {
    return str;
  }
}

function caesarDecipher(input, shift = 13) {
  return input.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((c.charCodeAt(0) - base - shift + 26) % 26) + base
    );
  });
}

function decode(url) {
  try {
    const u = new URL(url);
    const encoded = u.searchParams.get("i");
    if (!encoded) return null;

    let decoded = encoded;

    for (let i = 0; i < 5; i++) {
      try {
        decoded = atob(decoded);
      } catch {
        break;
      }
    }

    return caesarDecipher(decoded);
  } catch {
    return null;
  }
}

// Ejemplo: modificar links en la página
document.querySelectorAll("a").forEach(a => {
  const real = decode(a.href);
  if (real) {
    a.href = real;
    a.style.border = "2px solid red";
  }
});