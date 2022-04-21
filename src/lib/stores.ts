import { writable } from 'svelte/store';
import type { PopupObj } from './ts-interfaces';

// writeable exports
export let popupObj = writable<PopupObj>(null);