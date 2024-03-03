
let cart = [];

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

  buyButton.addEventListener('click', () => {
    cart.push(product);
    displayCart();
  });

  

  const pictureboxImg = document.createElement('img');
  pictureboxImg.classList.add('product__picturebox__img');
  pictureboxImg.src = product.image;
  pictureboxImg.alt = product.title;

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

function displayCart() {
  const cartBox = document.querySelector('.cart__card');
  cartBox.innerHTML = '';
  cart.forEach((product,index) => {
    const cartInfo = document.createElement('div');
    cartInfo.classList.add('cart__card-info');

    const cartHead = document.createElement('div');
    cartHead.classList.add('cart__header');
    cartInfo.appendChild(cartHead);

    const cartTitle = document.createElement('h2');
    cartTitle.classList = ('cart__title');
    cartTitle.textContent = product.title;

    const deleteButton = document.createElement('img');
    deleteButton.classList.add('delete_button');
    deleteButton.src = 'img/vect.jpg'; 
    deleteButton.alt = 'Удалить';
    deleteButton.addEventListener('click', () => {
      cart.splice(index, 1);
      displayCart();
    });

    cartHead.appendChild(cartTitle);
    cartHead.appendChild(deleteButton);
  
    const cartPrice = document.createElement('p');
    cartPrice.classList.add('cart__price');
    cartPrice.textContent = `Price: `;
    
    const divSize = document.createElement('div')
    divSize.classList.add('cart__size')

    const cartSize = document.createElement('p');
    cartSize.textContent = "Size: ";

    const cartSizeSelect = document.createElement('select');

    const sizeOption1 = document.createElement('option');
    sizeOption1.value = 'XS';
    sizeOption1.textContent = 'XS';
    const sizeOption2 = document.createElement('option');
    sizeOption2.value = 'S';
    sizeOption2.textContent = 'S';
    const sizeOption3 = document.createElement('option');
    sizeOption3.value = 'M';
    sizeOption3.textContent = 'M';

    cartSizeSelect.appendChild(sizeOption1);
    cartSizeSelect.appendChild(sizeOption2);
    cartSizeSelect.appendChild(sizeOption3);

    const divColor = document.createElement('div')
    divColor.classList.add('cart__color')

    const cartColor = document.createElement('p');
    cartColor.textContent = "Color: ";

    const cartColorSelect = document.createElement('select');

    const colorOption1 = document.createElement('option');
    colorOption1.value = 'Red';
    colorOption1.textContent = 'Red';
    const colorOption2 = document.createElement('option');
    colorOption2.value = 'Blue';
    colorOption2.textContent = 'Blue';
    const colorOption3 = document.createElement('option');
    colorOption3.value = 'Green';
    colorOption3.textContent = 'Green';

    cartColorSelect.appendChild(colorOption1);
    cartColorSelect.appendChild(colorOption2);
    cartColorSelect.appendChild(colorOption3);

    cartInfo.appendChild(cartPrice);
    divColor.appendChild(cartColor);
    divColor.appendChild(cartColorSelect);
    cartInfo.appendChild(divColor);
    divSize.appendChild(cartSize);
    divSize.appendChild(cartSizeSelect);
    cartInfo.appendChild(divSize)
    
    

    const cartQuantity = document.createElement('p');
    cartQuantity.textContent = "Quantity: ";

    const cartQuantityInput = document.createElement('input');
    cartQuantityInput.type = 'number';
    cartQuantityInput.value = 1;
    cartQuantityInput.min = 1;

    const cartInput = document.createElement('div');
    cartInput.classList.add('cart__input');

    cartInput.appendChild(cartQuantity);
    cartInput.appendChild(cartQuantityInput);

    cartHead.appendChild(cartTitle);
    cartInfo.appendChild(cartInput);

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__card-first');

    const cartImage = document.createElement('img');
    cartImage.src = product.image;
    cartImage.alt = product.title;

    cartItem.appendChild(cartImage);
    cartItem.appendChild(cartInfo);
    

    cartBox.appendChild(cartItem);
  });
}