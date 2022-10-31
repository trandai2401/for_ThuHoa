import { isPositive, isStrangeChar } from '../util/validator';
export const rulesFormEdit = [
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
  {
    field: 'name',
    method: isStrangeChar,
    validWhen: false,
    message: 'The name must not include strange characters.',
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
    field: 'price',
    method: isPositive,
    validWhen: true,
    message: 'The price field is position',
  },
  {
    field: 'description',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
];
