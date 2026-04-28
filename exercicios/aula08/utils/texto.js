// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
  const primeiraLetra = nome.charAt(0).toUpperCase();
  const resto = nome.slice(1).toLowerCase();
  return primeiraLetra + resto;
}
