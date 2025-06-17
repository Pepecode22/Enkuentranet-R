export function validateUser({ email, password }) {
  if (!email || !password) return false;
  // Agregar más validaciones aquí de ser necesarias
  return true;
}