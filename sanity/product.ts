export default {
  name: "Product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Enter the product price in your preferred currency.",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
  ],
};
