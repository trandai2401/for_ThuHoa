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
    const rs = await axiosInstance
      .post('/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((rs) => {
        return rs;
      })
      .catch((e) => console.log(e));
  },

  removeProduct: async (id) => {
    const response = await axiosInstance
      .delete(`/products/${id}`)
      .then((response) => {
        // l??m chi ???? nh?? t???t th??ng b???
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
    return response;
  },
  updateProduct: async (id, form) => {
    const data = new FormData();
    data.append('name', form.name);
    data.append('category', form.category);
    data.append('manufacturer', form.manufacturer);
    data.append('price', form.price);
    data.append('description', form.description);
    if (form.illustrationFiles === null) {
      data.append('illustration', form.illustration);
    } else {
      data.append('files', form.illustrationFiles);
    }

    form.images.forEach((element) => {
      data.append('images[]', element);
    });
    form.files.forEach((element) => {
      data.append('files', element);
    });
    const response = await axiosInstance
      .patch(`/products/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
    return response;
  },
};
