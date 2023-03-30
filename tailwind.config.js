/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
// module.exports = {
//   // ...
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   module: {
//     rules: [
//       {
//         // ...
//         use: [
//           // ...
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 ident: "postcss",
//                 plugins: [require("tailwindcss"), require("autoprefixer")],
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
