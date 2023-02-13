/**
 * Author: Federico Engler
 *
 * Type definitions for the types in my homepage application.
 */

import { AlbumImage } from './album-image';

// The routes in our application.
export enum Routes {
    Fantasy = 'fantasy',
    Home = 'home',
    Misc = 'misc',
    Trips = 'trips'
}

// The type of a video resource.
export interface AlbumVideo {
    url: string;
    caption: string;
}

// The type of an album resource.
export interface Album {
    id: string;
    type: string;
    caption: string;
    url: string;
    width?: number;
    images?: Array<AlbumImage>;
    videos?: Array<AlbumVideo>;
}

// The type of a section.
export interface Section {
    albums: Array<Album>;
}

export * from './album-image';
