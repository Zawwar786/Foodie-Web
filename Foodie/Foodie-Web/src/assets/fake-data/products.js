// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 240.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 1150.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 410.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 510.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 260.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 290.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 1350.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 1100.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 1100.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 340.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 150.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 160.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 170.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Fast, fresh, and delicious - that's what we're all about. We serve up hot and tasty meals that are ready when you are.",
  },
];

export default products;
