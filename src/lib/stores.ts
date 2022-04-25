import { writable, readable } from 'svelte/store';
import sanity from './sanity';
import type { SanityDocument } from '@sanity/client';
import type { PopupObj } from './ts-interfaces';

/**
 * WRITABLE EXPORTS
 */
export let popupObj = writable<PopupObj>(null);


/**
 * SANITY FETCH FUNCTIONS
 */
const getPageContent = async (page: string): Promise<SanityDocument> => {
    const query = `*[_type == '${page}'][0]`;
    const res = await sanity.fetch(query);
    if (res) return res;
    else return null;
};

/**
 * READABLE EXPORTS
 */
export const aktuality = readable(null, set => {
    getPageContent('aktuality').then(set).catch(err => console.error(err));
});

export const cviceni = readable(null, set => {
    getPageContent('cviceni').then(set).catch(err => console.error(err));
});

export const kontakt = readable(null, set => {
    getPageContent('kontakt').then(set).catch(err => console.error(err));
});

export const osobni_profil = readable(null, set => {
    getPageContent('osobni_profil').then(set).catch(err => console.error(err));
});

export const rozpis_lekci = readable(null, set => {
    getPageContent('rozpis_lekci').then(set).catch(err => console.error(err));
});
