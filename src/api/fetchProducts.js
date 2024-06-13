const fetchProducts = async (query) => {
  try {
    const url = `https://backend-trabalho-final-bd.vercel.app/api/livros/search?query=${query}`;
    console.log('Fetching from:', url); // Verifica a URL usada para a solicitação
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Response data:', data); // Verifica toda a resposta JSON recebida
    
    return data.rows;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

export default fetchProducts;