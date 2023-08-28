export const filters = [
  // {
  //   id: "brand",
  //   name: "Brand",
  //   options: [
  //     { value: "apple", label: "Apple" },
  //     { value: "google", label: "Google" },
  //     { value: "motorola", label: "Motorola" },
  //     { value: "oneplus", label: "OnePlus" },
  //     { value: "oppo", label: "Oppo" },
  //     { value: "poco", label: "Poco" },
  //     { value: "realme", label: "Realme" },
  //     { value: "samsung", label: "Samsung" },
  //   ],
  // },

  // {
  //   id: "ram",
  //   name: "RAM",
  //   options: [
  //     { value: "4gb", label: "4 GB" },
  //     { value: "8gb", label: "8 GB" },
  //     { value: "16gb", label: "16 GB" },
  //   ],
  // },

   {
      id: "color",
      name: "color",
      options: [
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" },
        { value: "white", label: "White" },
        { value: "black", label: "Black" },
        
      ],
    },
  // {
  //   id: "size",
  //   name: "Size",
  //   options: [
  //     { value: "64", label: "64 GB" },
  //     { value: "128", label: "128 GB" },
  //     { value: "256", label: "256 GB" },
  //     { value: "512", label: "512 GB" },
  //     { value: "1024", label: "1 TB" },
  //   ],
  // },
  // {
  //   id: "battery",
  //   name: "Battery Capacity",
  //   options: [
  //     { value: "3000mah", label: "3000 mAh" },
  //     { value: "3500mah", label: "3500 mAh" },
  //     { value: "4000mah", label: "4000 mAh" },
  //     { value: "4500mah", label: "4500 mAh" },
  //     { value: "5000mah", label: "5000 mAh" },
  //     { value: "6000mah", label: "6000 mAh" },
  //   ],
  // },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "5999-7999", label: "₹5999 To ₹7999" },
      { value: "7999-9999", label: "₹7999 To ₹7999" },
      { value: "9999-12999", label: "₹9999 To ₹12999" },
      { value: "12999-15999", label: "₹12999 To ₹15999" },
      { value: "15999-19999", label: "₹15999 To ₹19999" },
      { value: "above19999", label: "19999 And Above" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10%", label: "10% And Above" },
      { value: "20%", label: "20% And Above" },
      { value: "30%", label: "30% And Above" },
      { value: "40%", label: "40% And Above" },
      { value: "50%", label: "50% And Above" },
      { value: "60%", label: "60% And Above" },
      { value: "70%", label: "70% And Above" },
      { value: "80%", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
]

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
