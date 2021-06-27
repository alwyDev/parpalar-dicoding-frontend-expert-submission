import API_ENDPOINT from '../../globals/api-endpoint'

const createRestaurantDetailTemplate = (data) => `
  <h2 class="restaurant__title">${data.name}</h2>
  <img class="restaurant__poster lazyload" src="${API_ENDPOINT.IMG.M}${
  data.pictureId
}" alt="${data.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${data.city}</p>
    <h4>Rating</h4>
    <p>${data.rating}</p>
    <h4>Categories</p>
    <p>${data.categories[0].name}${
  data.categories.length > 1 ? `<span>, ${data.categories[1].name}</span>` : ''
}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${data.description}</p>
  </div>
  <div class="restaurant__info">
    <h3>Menu</h3>
    <h4>Foods:</h4>
    <ul>
      <li>${data.menus.foods[0].name}</li>
      <li>${data.menus.foods[1].name}</li>
      <li>${data.menus.foods[2].name}</li>
    </ul>
    <h4>Drinks:</h4>
    <ul>
      <li>${data.menus.drinks[0].name}</li>
      <li>${data.menus.drinks[1].name}</li>
      <li>${data.menus.drinks[2].name}</li>
    </ul>
  </div>
  <div class="restaurant__info">
    <h3>Reviews</h3>
    <p id="review__user">${data.customerReviews[0].name}</p>
    <p id="review__date">${data.customerReviews[0].date}</p>
    <p>${data.customerReviews[0].review}</p>
  </div>
`

const createRestaurantTemplate = (data) => `
  <div class="restaurant-item">
  <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${
        data.name
      }" data-src="${API_ENDPOINT.IMG.S}${data.pictureId}">
      <div class="restaurant-item__header__rating">
          <p>⭐️<span class="restaurant-item__header__rating__score">${
            data.rating
          }</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="${`/#/detail/${data.id}`}">${data.name}</a></h3>
        <h4>${data.city}</h4>
        <p>${data.description}</p>
    </div>
  </div>
  `

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
