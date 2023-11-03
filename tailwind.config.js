/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
        backgroundImage: {
          'bg_search' : "url('../public/assets/navbar/search.svg')",
          'bg_next_product' : "url('../public/assets/product-slider-icons/next.svg')",
          'bg_prev_product' : "url('../public/assets/product-slider-icons/prev.svg')",
          'cart-bg' : "url('../public/assets/sidebar/cart.svg')"
        },
      },
  },
  plugins: [],
}
