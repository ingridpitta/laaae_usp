import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
    });
  }

  getAllPosts = async () => {
    const { data } = await this.api.get(`/wp/v2/posts`);

    return data;
  };

  getAllMenus = async () => {
    const { data } = this.api.get(`/wp-api-menus/v2/menus`);

    return data;
  };

  getAllPages = async () => {
    const { data } = this.api.get(`/wp/v2/pages`);

    return data;
  };

  getAllComments = async () => {
    const { data } = this.api.get(`/wp/v2/comments`);

    return data;
  };

  getAllMedia = async () => {
    const { data } = this.api.get(`/wp/v2/media`);

    return data;
  };

  getAllCategories = async () => {
    const { data } = this.api.get(`/wp/v2/categories`);

    return data;
  };

  getAllTaxonomies = async () => {
    const { data } = this.api.get(`/wp/v2/taxonomies`);

    return data;
  };

  getAllUsers = async () => {
    const { data } = this.api.get(`/wp/v2/users`);

    return data;
  };

  getAllBlocks = async () => {
    const { data } = this.api.get(`/wp/v2/blocks`);

    return data;
  };

  getAllTags = async () => {
    const { data } = this.api.get(`/wp/v2/tags`);

    return data;
  };
}

export default new ApiService();
