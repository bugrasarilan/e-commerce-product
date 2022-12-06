import img1 from "./images/image-1.jpg"
import img2 from "./images/image-2.jpg"
import img3 from "./images/image-3.jpg"
import img4 from "./images/image-4.jpg"

const productsArray = [
    {
        id: 1,
        title: "Airpods Max",
        img:img2,
        price: 549.99,
    },
    {
        id: 2,
        title: "Ipad",
        img:img3,
        price: 1199,
    },
    {
        id: 3,
        title: "Iphone",
        img:img4,
        price: 1099,
    },

    {
        id: 4,
        title: "Macbook Pro",
        img:img1,
        infos: "very strong performance ",
        price: 1299,
        count:1
    },
];

function getProductData(id) { //productsArrayın içindeki ürünlerin ıd'sini getProductData'da tutuyorum istenilen ürünle ıd'si eşleşiyorsa ürünü bulması için.
    const productData = productsArray.find(product => product.id === id);

    return productData;
}

export { productsArray, getProductData };