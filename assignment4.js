var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}








//main block
let mainBlock = document.createElement("div");
// ASSIGNING id NAME to mainBlock
mainBlock.setAttribute("id", "productDetails");
document.body.appendChild(mainBlock);

//section creation
let productCard = document.createElement("section");
//ASSIGNING id NAME to section
productCard.setAttribute("id", "product");
mainBlock.appendChild(productCard);


//creation of block(left-column) and class name
let leftBlock = document.createElement("div");
leftBlock.className = "left-column";
productCard.appendChild(leftBlock);

//CREATION OF IMAGE 
let leftImage = document.createElement("img");
//ASSIGNING A CLASS NAME FOR IMAGE, SRC AND ALT 
leftImage.setAttribute("id", "productImg");
leftImage.src = productData.preview;
leftImage.alt = "";
leftBlock.appendChild(leftImage);


//creation of right block and class name as right-column
let rightBlock = document.createElement("div");
rightBlock.className = "right-column";
productCard.appendChild(rightBlock);


//creation of productDescription block and class name as product-description
let productDescription = document.createElement("div");
productDescription.className = "product-description";
rightBlock.appendChild(productDescription);


//creation of headers h1, h4 and h3

//header1
let header1 = document.createElement("h1");
//ASSIGNING id NAME to header1
header1.setAttribute("id", "name");
header1.innerHTML = productData.name;
productDescription.appendChild(header1);

//header4
let header4 = document.createElement("h4");
//ASSIGNING id NAME to header4
header4.setAttribute("id", "brand");
header4.innerHTML = productData.brand;
productDescription.appendChild(header4);

//header3 and appending to prodcutDescription
let header3 = document.createElement("h3");
header3.innerHTML = "Price: Rs ";
productDescription.appendChild(header3);

//span
let header3Span = document.createElement("span");
//ASSIGNING id NAME to span and appending to header3
header3Span.setAttribute("id", "price");
header3Span.innerHTML = productData.price;
header3.appendChild(header3Span);

//creation of right description block and class name as description and appending to productDescription
let rightDescriptionBlock = document.createElement("div");
rightDescriptionBlock.className = "description";
productDescription.appendChild(rightDescriptionBlock);

//header3 and appending to rightDescriptionBlock
let rightDescriptionBlockheader3 = document.createElement("h3");
rightDescriptionBlockheader3.innerHTML = "Description";
rightDescriptionBlock.appendChild(rightDescriptionBlockheader3);

//rightDescriptionPara
let rightDescriptionBlockPara = document.createElement("p");
//ASSIGNING id NAME to para and appending rightDescriptionBlock
rightDescriptionBlockPara.setAttribute("id", "description");
rightDescriptionBlockPara.innerHTML = productData.description;
rightDescriptionBlock.appendChild(rightDescriptionBlockPara);

//creation of produtPreviewBlock and class name as product-preview and appending to productDescription
let productPreviewBlock = document.createElement("div");
productPreviewBlock.className = "product-preview";
productDescription.appendChild(productPreviewBlock);

//header3 and appending to productPreviewBlock
let rightproductPreviewheader3 = document.createElement("h3");
rightproductPreviewheader3.innerHTML = "Product Preview";
productPreviewBlock.appendChild(rightproductPreviewheader3);

//creation of produtPreviewImgBlock and class name as previewImg and appending to productDescription
let productPreviewImgBlock = document.createElement("div");
productPreviewImgBlock.className = "previewImg";
productPreviewImgBlock.innerHTML = thumbnailPreview(productData);
productPreviewBlock.appendChild(productPreviewImgBlock);



//for thumbnail images
function thumbnailPreview(productData) {
    let thumbnailHTML = [];
    const thumbnailData = productData.photos;
    for (let i = 0; i < thumbnailData.length; i++) {
        thumbnailHTML.push(
            `<img width="100" class="thumbImages ${i == 0 ? "active" : ""}" src='${
        thumbnailData[i]
      }' />`
        );
    }
    return thumbnailHTML.join("");
}





//considered both productImg(leftBlock) and ThumbnailImages
const coverImage = document.getElementById("productImg");
const thumbImages = document.querySelectorAll(".thumbImages");


thumbImages.forEach(e => {
    e.addEventListener("click", function() {
        const thumbBorders = document.querySelector(".active"); // Only one -- 1
        thumbBorders.classList.remove("active"); // remove 1 - count = 0

        e.classList.add("active"); // count = 1
        // coverImage.src = e.src;
        coverImage.setAttribute("src", e.src);
    });
})