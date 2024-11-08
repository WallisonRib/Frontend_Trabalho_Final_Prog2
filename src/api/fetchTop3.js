const fetchTop3 = async (query) => {
    try {
      const url = `https://backend-trabalho-final-bd.vercel.app/api/livros/top`;
      console.log('Fetching from:', url); 
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      return data.rows;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };
  
  export default fetchTop3;