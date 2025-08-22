
export const SERVER_URL = import.meta.env.NODE_ENV === 'production' ? import.meta.env.SERVER_URL_LIVE : import.meta.env.SERVER_URL_DEV

console.log(SERVER_URL, 'user se')