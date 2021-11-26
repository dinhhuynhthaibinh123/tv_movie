const apiConfig = {
  baseURL: "http://api.themoviedb.org/3",
  apiKey: "e92249d1a4903ea335084d371befe062",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
