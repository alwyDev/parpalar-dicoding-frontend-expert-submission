import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter.js'
import FavoriteRestaurantDicoding from '../../src/scripts/data/favorite-restaurant-dicoding.js'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantDicoding,
    restaurant
  })
}

export { createLikeButtonPresenterWithRestaurant }
