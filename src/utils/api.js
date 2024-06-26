export const HTTPS = 'https://';
export const HTTP = 'http://';

export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

export const getApiResource = async (url) => {
    const res = await fetch(url);
    return await res.json();
};

const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';
export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;