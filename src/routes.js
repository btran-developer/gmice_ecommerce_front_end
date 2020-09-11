export default {
  auth: { root: "/", child: { signup: "/signup", signin: "/signin" } },
  products: { root: "/products", child: { productDetail: "/:productSlug" } },
  cart: { root: "/cart" },
  checkout: {
    root: "/checkout",
    child: {
      checkoutAddresses: "/address",
      checkoutPayment: "/payment",
      checkoutFinish: "finish",
    },
  },
  contactUs: { root: "/contactus" },
};
