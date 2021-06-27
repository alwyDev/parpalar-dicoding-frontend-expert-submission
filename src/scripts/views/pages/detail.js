import UrlParser from '../../routes/url-parser'
import Source from '../../data/parlapar-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter.js'
import FavoriteRestaurantDicoding from '../../data/favorite-restaurant-dicoding'

const Detail = {
  async render () {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const items = await Source.Detail(url.id)
    const { restaurant } = items
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurantDicoding: FavoriteRestaurantDicoding,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId
      }
    })
  }
}

export default Detail
