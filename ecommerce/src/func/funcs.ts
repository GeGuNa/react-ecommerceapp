export function isValidJSON(text) {
  if (typeof text !== "string" || text.trim() === "") {
    return false;
  }

  try {
    JSON.parse(text);
    return true; 
  } catch (e) {
    return false; 
  }
}
