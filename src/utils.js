export const hasAllKeys = (obj) => {
    for (let key of Object.keys(obj)) {
        if (!(key in obj)) {
            return false;
        }
    }
    return true;
}

export const BASE_URL = 'https://web-frontend-b5zt-6nev67a8v-dadsoumyadrigmailcoms-projects.vercel.app';