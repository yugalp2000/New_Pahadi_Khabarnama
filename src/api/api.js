import axios from "axios";

const baseURL = process.env.API_END_POINT ? process.env.API_END_POINT : "https://uttrakhandtoday.xyz";

export const axiosObj = axios.create({
  baseURL,
});

export const fetchAllCategories = async () => {
  return axiosObj.get(`/category/getAllCategory`, {});
};

export const fetchAllYoutubeVideos = async () => {
  return axiosObj.get(`/newpost/getAllnewytPostPahadi`, {});
};

export const fetchAllPhotos = async () => {
  return axiosObj.get(`/newpost/getAllphotospahadi`, {});
};

export const fetchBreakingNews = async (activeCategory) => {
  return axiosObj.post(`/newpost/getPostbyType`, {
    newsType: "Breaking",
    category: activeCategory,
    app: "pahadi",
  });
};

export const fetchRecommendedNews = async (activeCategory) => {
  console.log("Recommended News :: ",activeCategory)
  return axiosObj.post(`/newpost/getPostbyType`, {
    newsType: "Recommended",
    category: activeCategory,
    app: "pahadi",
  });
};

export const fetchWebStories = async () => {
  return axiosObj.post(`/newpost/getPostbyType`, {
    newsType: "Web Stories",
    app: "pahadi",
  });
};
