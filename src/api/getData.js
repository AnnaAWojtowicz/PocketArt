const home = "https://fn-flex-flickr-pelsedyr-prod.azurewebsites.net/api/AllPhotos?randomOrder=true"; // API endpoint

export async function getData() {
    const API_KEY = import.meta.env.VITE_API_KEY;

    try {
        const response = await fetch(home, {
            headers: {
                'x-function-key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
}