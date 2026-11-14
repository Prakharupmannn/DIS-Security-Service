// Frontend-only stub. Replace the body with a real fetch() to your API later.
export const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export async function subscribeToNewsletter(email) {
  // Example: await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
  return { ok: true, email };
}
