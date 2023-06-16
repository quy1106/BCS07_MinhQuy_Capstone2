function getDataProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    ResponseType: " JSON",
  });
  //Thành công
  promise.then(function (result) {
    renderProduct(result.data.content);
  });
  //Thất bại
  promise.catch(function (err) {
    console.log(err);
  });
}

function getByCategory() {
  var paramId = new URLSearchParams(window.location.search);
  var categoryId = paramId.get("categoryId");
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${categoryId}`,
    method: "GET",
    ResponseType: "JSON",
  });

  promise.then(function (result) {
    renderProduct(result.data.content);
    document.querySelector("#Product").scrollIntoView({ behavior: "smooth" });
  });

  promise.catch(function (error) {
    console.log(error);
  });
}

function renderProduct(arr) {
  var caru = arr[0];
  var contentHTML = ``;
  var carouselHTML = `
    <div class="carousel-item active">
            <div class="carousel__left">
                <img src="${caru.image}" alt="...">
            </div>
            <div class="carousel__right">
                <h2>${caru.name}</h2>
                <p>${caru.shortDescription}</p>
                <a href="./detail.html?id=${caru.id}">Buy now</a>
            </div>
        </div>
    `;
  for (var i = 0; i < arr.length; i++) {
    var prod = arr[i];
    contentHTML += `
        <div class=" px-4 pb-5 col-12 col-sm-6 col-md-4">
            <div class="card">
                <a href="./detail.html?id=${prod.id}">
                <img src="${prod.image}" class="card-img-top" alt="..."></a>
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">${
                      prod.shortDescription.length > 75
                        ? prod.shortDescription.substr(0, 75) + "..."
                        : prod.shortDescription
                    }</p>
                </div>
                <div class="card-footer py-0 px-0 d-flex">
                    <div class="left">
                        <a href="./detail.html?id=${prod.id}">Buy now</a>
                    </div>
                    <div class="right">
                        <p>${prod.price}$</p>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
  document.querySelector("#showProduct").innerHTML = contentHTML;
  for (var e = 1; e < 3; e++) {
    prod = arr[e];
    carouselHTML += `
        <div class="carousel-item">
            <div class="carousel__left">
                <img src="${prod.image}" alt="...">
            </div>
            <div class="carousel__right">
                <h2>${prod.name}</h2>
                <p>${prod.shortDescription}</p>
                <a href="./detail.html?id=${prod.id}">Buy now</a>
            </div>
        </div>
        `;
  }
  document.querySelector("#renderCarousel").innerHTML = carouselHTML;
}
//Lấy data
function getLocalStorage() {
  if (localStorage.getItem("NumBuy")) {
    var dataString = localStorage.getItem("NumBuy");
    var numBuy = JSON.parse(dataString);
    document.querySelector("#numBuy").innerHTML = "(" + numBuy + ")";
  }
}

window.onload = function () {
  getDataProduct();
  getByCategory();
  getLocalStorage();
};
