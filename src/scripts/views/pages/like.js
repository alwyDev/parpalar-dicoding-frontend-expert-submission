import FavoriteRestaurantDicoding from '../../data/favorite-restaurant-dicoding'
import { createRestaurantTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
        <div class="content">
            <h2 class="content__heading">Your Liked Restaurant</h2>
            <div id="restaurants" class="restaurants">

            </div>
        </div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantDicoding.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant)
    })
  }
}

export default Like
