// api.js

export async function fetchGenres() {
    const response = await fetch('https://backend-trabalho-final-bd.vercel.app/api/generos');
    if (!response.ok) {
        throw new Error('Erro ao buscar os gêneros');
    }
    return await response.json();
}
