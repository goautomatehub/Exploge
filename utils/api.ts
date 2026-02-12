export function getApiBase(envBase?: string): string {
  const trimmed = envBase?.trim();
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const isLocalEnv = host === 'localhost' || host.startsWith('127.');
  if (trimmed) {
    const isEnvLocal = /localhost|127\./i.test(trimmed);
    if (isEnvLocal && !isLocalEnv) {
      return typeof window !== 'undefined' ? window.location.origin : trimmed.replace(/\/+$/, '');
    }
    return trimmed.replace(/\/+$/, '');
  }
  if (isLocalEnv) {
    return 'http://localhost:3001';
  }
  return typeof window !== 'undefined' ? window.location.origin : '';
}
