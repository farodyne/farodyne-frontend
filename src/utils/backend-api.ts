/**
 * Author: Federico Engler
 *
 * This utility class acts more or less like a facade class used strictly to
 * abstract away Axios low-level details from the code that needs to perform
 * calls to our backend API. As such, it keeps our code cleaner and easier to
 * maintain.
 */
import axios from 'axios';
import { settings } from './settings';

export class BackendApi {
    baseUrl: string;
    options: any;

    /**
     * Creates an instance of the backend API class.
     */
    constructor() {
        this.baseUrl = settings.backendBase;

        this.options = {
            auth: { username: settings.apiUser, password: settings.apiPassword }
        };
    }

    /**
     * Method to fetch all the albums belonging to a particular category/section.
     * @param {string} type - The tye of albums to fetch.
     * @returns An array of photo albums.
     */
    async getSection(type: string) {
        const { data } = await axios.get(`${this.baseUrl}/sections/${type}`, this.options);
        return data;
    }
}
