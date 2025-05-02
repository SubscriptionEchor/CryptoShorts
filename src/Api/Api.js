export const BASE_URL = 'https://saurav.tech/NewsAPI/';
export const getNewsByCategory = (category, countryCode = 'IN') => {
  return `${BASE_URL}//top-headlines/category/${category}/${countryCode}.json`;
};

export const getAllNews = sourceId => {
  return `https://saurav.tech/NewsAPI/everything/${sourceId}.json`;
};
