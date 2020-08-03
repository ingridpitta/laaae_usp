import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
    });
  }

  getAllPosts = async () => {
    const { data } = await this.api.get(`/wp/v2/posts/?per_page=100`);

    return data;
  };

  getAllMenus = async () => {
    const { data } = await this.api.get(`/wp-api-menus/v2/menus/?per_page=100`);

    return data;
  };

  getAllPages = async () => {
    const { data } = await this.api.get(`/wp/v2/pages/?per_page=100`);

    return data;
  };

  getAllComments = async () => {
    const { data } = await this.api.get(`/wp/v2/comments/?per_page=100`);

    return data;
  };

  getAllMedia = async () => {
    const { data } = await this.api.get(`/wp/v2/media/?per_page=100`);

    return data;
  };

  getMediasById = async (id) => {
    const { data } = await this.api.get(`/wp/v2/media/${id}`);

    return data;
  };

  getAllCategories = async () => {
    const { data } = this.api.get(`/wp/v2/categories/?per_page=100`);

    return data;
  };

  getAllTaxonomies = async () => {
    const { data } = this.api.get(`/wp/v2/taxonomies/?per_page=100`);

    return data;
  };

  getAllUsers = async () => {
    const { data } = this.api.get(`/wp/v2/users/?per_page=100`);

    return data;
  };

  getAllBlocks = async () => {
    const { data } = this.api.get(`/wp/v2/blocks/?per_page=100`);

    return data;
  };

  getAllTags = async () => {
    const { data } = this.api.get(`/wp/v2/tags/?per_page=100`);

    return data;
  };
}

export default new ApiService();
