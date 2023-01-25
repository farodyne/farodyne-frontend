/**
 * Author: Federico Engler
 *
 * Type definitions for the types in our application.
 */

// The routes in our application.
export enum Routes {
    Fantasy = 'fantasy',
    Home = 'home',
    Misc = 'misc',
    Trips = 'trips'
}

// The type of an album.
export interface Album {
    id: string;
    type: string;
    caption: string;
    url: string;
}

export * from './route';
