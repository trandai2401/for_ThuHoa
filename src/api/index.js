import axiosInstance from './axios';

export const managerProduct = {
  fetchCategory: async () => {
    const res = await axiosInstance.get('/categories').catch(function (error) {
      console.log(error);
    });

    return res.data.data;
  },

  fetchManufacturer: async () => {
    const res = await axiosInstance
      .get('/manufacturer')
      .catch(function (error) {
        console.error(error);
      });
    return res.data.data;
  },

  fetchProducts: async ({
    limit = 6,
    pageSelected = 1,
    categorySelected = null,
    manufacturerSelected = null,
    searchProduct = null,
  }) => {
    const res = await axiosInstance
      .get('/products', {
        params: {
          limit: limit,
          page: pageSelected,
          category: categorySelected,
          manufacturer: manufacturerSelected,
          term: searchProduct,
        },
      })
      .catch(function (error) {
        console.error(error);
      });
    return res;
  },

  fetchDetailProduct: async (id) => {
    const res = await axiosInstance
      .get('/products/' + id)
      .catch(function (error) {
        console.log(error);
      });
    return res.data.data;
  },

  fetchRelateProduct: async (id) => {
    const res = await axiosInstance
      .get('/products/related/' + id)
      .catch(function (error) {
        console.log(error);
      });
    return res;
  },
  createProduct: async (value) => {
    const { name, category, manufacturer, price, description, files } = value;
    const data = new FormData();
    data.append('name', name);
    data.append('category', category);
    data.append('manufacturer', manufacturer);
    data.append('price', price);
    data.append('description', description);

    files.forEach((e) => {
      data.append('files', e);
    });

    console.log(name, category, manufacturer, price, description, files);
    const rs = await axiosInstance.post('/products', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
