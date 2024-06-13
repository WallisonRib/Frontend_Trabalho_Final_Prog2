const fetchItem = async (isbn) => {
  try {
      // Fazendo a requisição para o backend com o ISBN
      const response = await fetch(`https://backend-trabalho-final-bd.vercel.app/api/livros/${isbn}`); // Substitua pela URL correta do seu backend
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Fetch error:', error);
      return null;
  }
};

export default fetchItem;
