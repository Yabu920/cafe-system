// data featching for the food list 

function FoodList(){
    let httpF = new XMLHttpRequest();

httpF.open('GET', 'foodlist.json', true);

httpF.send();

httpF.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let listsF = JSON.parse(this.responseText);
        
        // food catahory varibles
        let tdsList = '';
        let cakeList = '';
        let appList = '';
        let desList = '';
        let luncList = '';
        let dinList = '';
        let fruList = '';
        let jucList = '';
        let sdirList = '';
        let alcoList = '';

        for (let item of listsF) {
            let catagory = `${item.catagorys}`
            let capCatagory = catagory.toUpperCase()

            switch (capCatagory){
                case "TODAYS-SPECIAL":
                    tdsList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "CAKE":
                    cakeList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "APPETIZER":
                    appList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "DESSRTS":
                    desList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "LUANCHS":
                    luncList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "DINERS":
                    dinList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "FRUITS":
                    fruList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "JUICES":
                    jucList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "SOFTDRINKS":
                    sdirList += `
                    <div class="menu-card">
                        <img src="${item.image}" alt="${item.alt}">
                        <h3>${item.name}</h3>
                        <div class="price-rating">
                            <p>price: <span>$50</span></p>
                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                        </div>
                        <button>Order Now!</button>
                    </div>
                    `;
                    break;
                case "ALCOHOLIC-DRINKS":
                    alcoList += `
                    <div class="menu-card">
                        <img src="${item.image}" alt="${item.alt}">
                        <h3>${item.name}</h3>
                        <div class="price-rating">
                            <p>price: <span>$50</span></p>
                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                        </div>
                        <button>Order Now!</button>
                    </div>
                    `;
                    break;
                default:
                    break;
            }
        }

        // output the foodlist on the foodlist.html folder

        document.querySelector('.tdsList').innerHTML = tdsList;
        document.querySelector('.cakeList').innerHTML = cakeList;
        document.querySelector('.appetizerList').innerHTML = appList;
        document.querySelector('.dessertList').innerHTML = desList;
        document.querySelector('.luanchList').innerHTML = luncList;
        document.querySelector('.dinerList').innerHTML = dinList;
        document.querySelector('.fruitsList').innerHTML = fruList;
        document.querySelector('.juicesList').innerHTML = jucList;
        document.querySelector('.softdrinkList').innerHTML = sdirList;
        document.querySelector('.alcoholdrinkList').innerHTML = alcoList;
    }
};
};

export default FoodList;