// Centralized backend URL for frontend – read from Vite env or fallback to empty
export const backend_url = import.meta.env.VITE_BACKEND_URL || import.meta.env.BACKEND_URL || '';

export default backend_url;
