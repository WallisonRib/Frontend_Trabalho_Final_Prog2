const fetchTotalEditora = async (query) => {
    try {
      const url = `https://backend-trabalho-final-bd.vercel.app/api/editoras`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.rowCount;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };
  
  export default fetchTotalEditora;