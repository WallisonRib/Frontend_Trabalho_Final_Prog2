const fetchTotalfunc = async (query) => {
    try {
      const url = `https://backend-trabalho-final-bd.vercel.app/api/funcionarios`;
      console.log('Fetching from:', url); 
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Response data:', data); 
      
      return data.rowCount;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };
  
  export default fetchTotalfunc;