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
        count:1
    },
    {
        id: 2,
        title: "Ipad",
        img:img3,
        price: 1199,
        count:1
    },
    {
        id: 3,
        title: "Iphone",
        img:img4,
        price: 1099,
        count:1
    },

    {
        id: 4,
        title: "Macbook Pro",
        img:img1,
        // description: "fast andd function.",
        infos: "very strong performance ",
        // cardinfo: "cardinfo  Lorem ipsum dolor sit amet, conexercint, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // updetail: " MacBook .",
        price: 1299,
        count:1
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };