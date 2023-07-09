export const BASE_URL = 'https://64a1e8ee0079ce56e2db79ff.mockapi.io';

export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/products`,
        config: {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        }
    },
    CATEGORIES: {
        url: `${BASE_URL}/categories`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}