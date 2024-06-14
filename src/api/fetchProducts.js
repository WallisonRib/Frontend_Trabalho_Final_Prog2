const fetchProducts = async (query) => {
  try {
    const url = `https://backend-trabalho-final-bd.vercel.app/api/livros/search?query=${query}`;
    console.log('Fetching from:', url); 
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Response data:', data); 
    
    return data.rows;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

export default fetchProducts;