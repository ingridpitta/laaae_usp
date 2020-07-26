import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
    });
  }

  getAllPosts = async () => {
    const { data } = await this.api.get(`/posts`);

    return data;
  };

  getAllPages = async () => {
    const { data } = this.api.get(`/pages`);

    return data;
  };

  getAllComments = async () => {
    const { data } = this.api.get(`/comments`);

    return data;
  };

  getAllMedia = async () => {
    const { data } = this.api.get(`/media`);

    return data;
  };

  getAllCategories = async () => {
    const { data } = this.api.get(`/categories`);

    return data;
  };

  getAllTaxonomies = async () => {
    const { data } = this.api.get(`/taxonomies`);

    return data;
  };

  getAllUsers = async () => {
    const { data } = this.api.get(`/users`);

    return data;
  };

  getAllBlocks = async () => {
    const { data } = this.api.get(`/blocks`);

    return data;
  };

  getAllTags = async () => {
    const { data } = this.api.get(`/tags`);

    return data;
  };
}

export default new ApiService();
