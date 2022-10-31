export const rulesFormEdit = [
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
  {
    field: 'name',
    method: 'isLength',
    args: [{ min: 5 }],
    validWhen: true,
    message: 'The name must be at least 5 characters.',
  },
  {
    field: 'category',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
  {
    field: 'manufacturer',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
  {
    field: 'price',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
  {
    field: 'description',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
];
