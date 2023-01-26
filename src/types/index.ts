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

// The type of an image.
export interface Image {
    url: string;
    caption: string;
}

// The type of a video.
export interface Video {
    url: string;
    caption: string;
}

// The type of an album.
export interface Album {
    id: string;
    type: string;
    caption: string;
    url: string;
    width?: number;
    images?: Array<Image>;
    videos?: Array<Video>;
}

// The type of a section.
export interface Section {
    albums: Array<Album>;
}

export * from './route';
