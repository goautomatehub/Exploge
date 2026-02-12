export function getApiBase(envBase?: string): string {
  const trimmed = envBase?.trim();
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  return trimmed ? trimmed.replace(/\/+$/, '') : isLocalhost ? 'http://localhost:3001' : window.location.origin;
}
