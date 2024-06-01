export const exerciseOptions = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '3081c83318mshef78f9dfa38002ep1cf3e7jsn4dbdc4f1aa38',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3081c83318mshef78f9dfa38002ep1cf3e7jsn4dbdc4f1aa38',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData =async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;

}