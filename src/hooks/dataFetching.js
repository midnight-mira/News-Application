
const API_KEY = import.meta.env.VITE_API_KEY
export const fetchData = async () => {
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data
    }
    catch(error) {
        return error
    }
}

export const fetchDataWithCategory = async(category) =>{
    try {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
        const response = await fetch(url)  
        if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
        const data = await response.json();
        return data
        
    } catch (error) {
       return error 
    }
     
}

