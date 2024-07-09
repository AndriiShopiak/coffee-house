import products from "./products.json" assert {type: "json"}
const cardsArr = [
    `<div class="flex__blocks">
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/1.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Irish coffee</h3>
              <p class="block__text">
                  Fragrant black coffee with Jameson Irish whiskey and whipped milk
              </p>
          </div>
          <h3 class="block__price">$7.00</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/2.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Kahlua coffee</h3>
              <p class="block__text">
                  Classic coffee with milk and Kahlua liqueur under a cap of frothed milk
              </p>
          </div>
          <h3 class="block__price">$7.00</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/3.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Honey raf</h3>
              <p class="block__text">
                  Espresso with frothed milk, cream and aromatic honey
              </p>
          </div>
          <h3 class="block__price">$5.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/4.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Ice cappuccino</h3>
              <p class="block__text">
                  Cappuccino with soft thick foam in summer version with ice
              </p>
          </div>
          <h3 class="block__price">$5.00</h3>
      </div>
    </div>  
  </div>
  <div class="flex__blocks" id="display_none">
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/5.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Espresso</h3>
              <p class="block__text">
                  Classic black coffee
              </p>
          </div>
          <h3 class="block__price">$4.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/6.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Latte</h3>
              <p class="block__text">
                  Espresso coffee with the addition of steamed milk and dense milk foam
              </p>
          </div>
          <h3 class="block__price">$5.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/7.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Latte macchiato</h3>
              <p class="block__text">
                  Espresso with frothed milk and chocolate
              </p>
          </div>
          <h3 class="block__price">$5.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/8.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Coffee with cognac</h3>
              <p class="block__text">
                  Fragrant black coffee with cognac and whipped cream
              </p>
          </div>
          <h3 class="block__price">$6.50</h3>
      </div>
    </div>  
  </div>`,
  `<div class="flex__blocks">
      <div class="flex__blocks_block block">
          <div class="block__img_mn">
              <img src="img/coffee_menu/9.jpg" alt="MenuIcon">
          </div>
          <div class="block_block">
              <div class="from_about_gallery">
                  <h3 class="block__title_mn">Moroccan</h3>
                  <p class="block__text">
                    Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint
                  </p>
              </div>
              <h3 class="block__price">$4.50</h3>
          </div>
        </div>  
        <div class="flex__blocks_block block">
          <div class="block__img_mn">
              <img src="img/coffee_menu/10.jpg" alt="MenuIcon">
          </div>
          <div class="block_block">
              <div class="from_about_gallery">
                  <h3 class="block__title_mn">Ginger</h3>
                  <p class="block__text">
                    Original black tea with fresh ginger, lemon and honey
                  </p>
              </div>
              <h3 class="block__price">$5.00</h3>
          </div>
        </div>  
        <div class="flex__blocks_block block">
          <div class="block__img_mn">
              <img src="img/coffee_menu/11.jpg" alt="MenuIcon">
          </div>
          <div class="block_block">
              <div class="from_about_gallery">
                  <h3 class="block__title_mn">Cranberry</h3>
                  <p class="block__text">
                    Invigorating black tea with cranberry and honey
                  </p>
              </div>
              <h3 class="block__price">$5.00</h3>
          </div>
        </div>  
        <div class="flex__blocks_block block">
          <div class="block__img_mn">
              <img src="img/coffee_menu/12.jpg" alt="MenuIcon">
          </div>
          <div class="block_block">
              <div class="from_about_gallery">
                  <h3 class="block__title_mn">Sea buckthorn</h3>
                  <p class="block__text">
                    Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon
                  </p>
              </div>
              <h3 class="block__price">$5.50</h3>
          </div>
        </div>
  </div>`,
`<div class="flex__blocks">
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/13.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Marble cheesecake</h3>
              <p class="block__text">
                    Philadelphia cheese with lemon zest on a light sponge cake and red currant jam
              </p>
          </div>
          <h3 class="block__price">$3.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/14.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Red velvet</h3>
              <p class="block__text">
                    Layer cake with cream cheese frosting
              </p>
          </div>
          <h3 class="block__price">$4.00</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/15.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Cheesecakes</h3>
              <p class="block__text">
                    Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar
              </p>
          </div>
          <h3 class="block__price">$4.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/16.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Creme brulee</h3>
              <p class="block__text">
                    Delicate creamy dessert in a caramel basket with wild berries
              </p>
          </div>
          <h3 class="block__price">$4.00</h3>
      </div>
    </div>  
</div>
<div class="flex__blocks" id="display_none">
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/17.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Pancakes</h3>
              <p class="block__text">
                    Tender pancakes with strawberry jam and fresh strawberries
              </p>
          </div>
          <h3 class="block__price">$4.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/18.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Honey cake</h3>
              <p class="block__text">
                    Classic honey cake with delicate custard
              </p>
          </div>
          <h3 class="block__price">$4.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/19.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Chocolate cake</h3>
              <p class="block__text">
                    Cake with hot chocolate filling and nuts with dried apricots
              </p>
          </div>
          <h3 class="block__price">$5.50</h3>
      </div>
    </div>  
    <div class="flex__blocks_block block">
      <div class="block__img_mn">
          <img src="img/coffee_menu/20.jpg" alt="MenuIcon">
      </div>
      <div class="block_block">
          <div class="from_about_gallery">
              <h3 class="block__title_mn">Black forest</h3>
              <p class="block__text">
                    A combination of thin sponge cake with cherry jam and light chocolate mousse
              </p>
          </div>
          <h3 class="block__price">$6.50</h3>
      </div>
    </div>  
</div>`
];

// Burger Menu Functionall
let menuList = document.querySelector("#menu_bur");
let menuIcon = document.querySelector(".burger_icon");
let menuItems = document.querySelectorAll(".header_bur_cont a");
let brgLine = document.querySelector("#first_brg");
let brgLast = document.querySelector("#last_brg");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("add_style");
    brgLine.classList.toggle("brg_line");
    brgLast.classList.toggle("brg_last");
    menuIcon.classList.toggle("remove_gap");
});

menuItems.forEach((el) => {
    el.addEventListener("click", () => {
        menuList.classList.remove("add_style");
        brgLine.classList.remove("brg_line");
        brgLast.classList.remove("brg_last");
    });
});
// MENU
let placeContainer = document.getElementById("flex");
let coffeeBtn = document.getElementById("coffee_btn");
let teaBtn = document.getElementById("tea_btn");
let dessertBtn = document.getElementById("dessert_btn");
let reLoadBtn = document.querySelector("#reload");
let reNewProduct = document.querySelector("#reload svg");
let countCard = 0;
let currentCardsArr;
let indexPart = 0;
let modal = document.querySelector(".modal")
let mainImgModal = document.querySelector("#mainImgModal");
let closeOfModal = document.querySelector(".mod_info__close_btn");
let modalTitle = document.querySelector(".mod_info__title");
let modalCloseArea = document.querySelector(".close_area");
let buttonsArraySize = document.querySelectorAll("#Size .mod_info_size__btn__circle");
let buttonsArrayAdditives = document.querySelectorAll("#Additives .mod_info_size__btn__circle");
let buttonsMlValues;
let currentPriceRes;
let setPrice = document.querySelector(".mod_info__price__sum");
function animationPaste (element) {
    placeContainer.style.opacity = 0;
    placeContainer.style.transition = "opacity .6s ease";
    setTimeout(() => {
        placeContainer.style.opacity = 1;
        placeContainer.innerHTML = element;
        currentCardsArr = document.querySelectorAll(".flex__blocks_block");
        currentCardsArr.forEach((e,i) => {
            e.addEventListener("click", () => {
                modalCloseArea.style.display = "block";
                mainImgModal.src = `img/coffee_menu/${i + indexPart +1}.jpg`;
                modal.style.display = "block";
                document.querySelector("body").style.overflow = "hidden";
                modalTitle.innerText = `${products[i + indexPart].name}`;
                document.querySelector(".mod_info__text").innerText = `${products[i + indexPart].description}`;
                document.querySelectorAll("#Size .mod_info_size__btn").forEach((el,index) => {
                    document.querySelectorAll("#Size .mod_info_size__btn")[0].classList.add("size_active_script");
                    buttonsMlValues = Object.values(products[i + indexPart].sizes);
                    el.innerHTML = `<span class="mod_info_size__btn__circle">${buttonsArraySize[index].innerHTML}</span>` + `${buttonsMlValues[index].size}`;
                    el.addEventListener("click", () => {
                        document.querySelectorAll("#Size .mod_info_size__btn").forEach((a) => {
                            a.classList.remove("size_active_script");
                        });
                        document.querySelectorAll("#Additives .mod_info_size__btn").forEach((c) => {
                            c.classList.remove("size_active_script");
                        });
                        el.classList.add("size_active_script");
                        buttonsMlValues = Object.values(products[i + indexPart].sizes);
                        setPrice.innerText = `${Number(Number(products[i + indexPart].price) + Number(Object.values(buttonsMlValues[index])[1])).toFixed(2)}`;
                        currentPriceOFCards = setPrice.innerText;
                    });
                });
                setPrice.innerText = `${products[i + indexPart].price}`;
                currentPriceOFCards = setPrice.innerText;

            });
        });
    }, 500);
}
let currentPriceOFCards;
document.querySelectorAll("#Additives .mod_info_size__btn")[0].addEventListener("click", () => {
    document.querySelectorAll("#Additives .mod_info_size__btn")[0].classList.add("size_active_script");
    setPrice.innerText = (Number(currentPriceOFCards) + 0.50).toFixed(2);
})
document.querySelectorAll("#Additives .mod_info_size__btn")[1].addEventListener("click", () => {
    document.querySelectorAll("#Additives .mod_info_size__btn")[1].classList.add("size_active_script");
    setPrice.innerText = (Number(currentPriceOFCards) + 1.00).toFixed(2);
})
document.querySelectorAll("#Additives .mod_info_size__btn")[2].addEventListener("click", () => {
    document.querySelectorAll("#Additives .mod_info_size__btn")[2].classList.add("size_active_script");
    setPrice.innerText = (Number(currentPriceOFCards) + 1.50).toFixed(2);
})
animationPaste(cardsArr[0]);
reLoadBtn.classList.add("reload");
coffeeBtn.addEventListener("click", () => {
    indexPart = 0;
    countCard = 0;
    dessertBtn.classList.remove("current_active");
    teaBtn.classList.remove("current_active");
    coffeeBtn.classList.add("current_active");
    reLoadBtn.classList.add("reload");
    animationPaste(cardsArr[0]);
});
teaBtn.addEventListener("click", () => {
    indexPart = 8;
    countCard = 1;
    coffeeBtn.classList.remove("current_active");
    dessertBtn.classList.remove("current_active");
    teaBtn.classList.add("current_active");
    reLoadBtn.classList.remove("reload");
    animationPaste(cardsArr[1]);
});
dessertBtn.addEventListener("click", () => {
    indexPart = 12;
    countCard = 2;
    coffeeBtn.classList.remove("current_active");
    teaBtn.classList.remove("current_active");
    dessertBtn.classList.add("current_active");
    reLoadBtn.classList.add("reload");
    animationPaste(cardsArr[2]);
});
reNewProduct.addEventListener ("click", () => {
    reLoadBtn.classList.remove("reload");
   animationPaste(cardsArr[countCard].replace(/display_none/g, "some"));
});
function closeModalTab() {
    modal.style.display = "none";
    modalCloseArea.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
    document.querySelectorAll("#Size .mod_info_size__btn").forEach((a) => {
        a.classList.remove("size_active_script");
    });
    document.querySelectorAll("#Additives .mod_info_size__btn").forEach((c) => {
        c.classList.remove("size_active_script");
    });
}
closeOfModal.addEventListener("click", closeModalTab);
modalCloseArea.addEventListener("click", closeModalTab);