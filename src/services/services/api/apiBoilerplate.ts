export default async function BaseFetch(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err; // Re-throw the error to be handled by the caller
    }
}