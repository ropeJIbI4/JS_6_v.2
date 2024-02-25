
            // const products = [
            //   {
            //     "image": "img/index_1.svg",
            //     "title": "ELLERY X M'O CAPSULE",
            //     "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            //     "price": "$52.00"
            //   },
            //   {
            //     "image": "img/index_2.svg",
            //     "title": "ELLERY X M'O CAPSULE",
            //     "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            //     "price": "$52.00"
            //   },
            //   {
            //     "image": "img/index_3.svg",
            //     "title": "ELLERY X M'O CAPSULE",
            //     "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            //     "price": "$52.00"
            //   },
            //   {
            //     "image": "img/index_4.svg",
            //     "title": "ELLERY X M'O CAPSULE",
            //     "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            //     "price": "$52.00"
            //   },
            //   {
            //     "image": "img/index_5.svg",
            //     "title": "ELLERY X M'O CAPSULE",
            //     "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            //     "price": "$52.00"
            //   },
            //   {
            //     "image": "img/index_6.svg",
            //     "title": "ELLERY X M'O CAPSULE",
            //     "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            //     "price": "$52.00"
            //   }
            // ];

            const productBox = document.querySelector('.product-box__content');

            products.forEach((product) => {
              const productElement = document.createElement('div');
              productElement.classList.add('product');

              const picturebox = document.createElement('div');
              picturebox.classList.add('product__picturebox');

              const pictureboxItemHover = document.createElement('div');
              pictureboxItemHover.classList.add('product__picturebox__itemHover');

              const buyButton = document.createElement('button');
              buyButton.classList.add('product__picturebox__buy-button');
              buyButton.innerHTML = `
                <img src="img/img_link_right_3.svg" alt="корзина" class="product__picturebox__buy-button-img">
                Add to Cart
              `;

              pictureboxItemHover.appendChild(buyButton);

              const pictureboxImg = document.createElement('img');
              pictureboxImg.classList.add('product__picturebox__img');
              pictureboxImg.src = product.image;
              pictureboxImg.alt = "index_1";

              picturebox.appendChild(pictureboxItemHover);
              picturebox.appendChild(pictureboxImg);

              const content = document.createElement('div');
              content.classList.add('product__content');

              const contentHeading = document.createElement('h5');
              contentHeading.classList.add('product__content__heading');
              contentHeading.textContent = product.title;

              const contentText = document.createElement('p');
              contentText.classList.add('product__content__text');
              contentText.textContent = product.description;

              const contentPrice = document.createElement('p');
              contentPrice.classList.add('product__content__price');
              contentPrice.textContent = product.price;

              content.appendChild(contentHeading);
              content.appendChild(contentText);
              content.appendChild(contentPrice);

              productElement.appendChild(picturebox);
              productElement.appendChild(content);

              productBox.appendChild(productElement);
            });
          