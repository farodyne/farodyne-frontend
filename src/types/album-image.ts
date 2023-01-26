/**
 * Author: Federico Engler
 *
 * Our model for representing an album image.
 */
export class AlbumImage {
    url: string;
    caption: string;
    visible: boolean;
    selected: boolean;

    constructor(url: string, caption: string) {
        this.url = url;
        this.caption = caption;
        this.visible = false;
        this.selected = false;
    }

    show() {
        this.visible = true;
        this.selected = true;
    }

    hide() {
        this.visible = false;
        this.selected = false;
    }
}
