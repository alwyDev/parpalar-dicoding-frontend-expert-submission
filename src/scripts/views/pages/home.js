import Source from '../../data/parlapar-source'
import { createRestaurantTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="content">
        <img 
          class="jumbotron-image lazyload" 
          src="/images/jumbotron-large.jpg"
          srcset="/images/jumbotron-small.jpg 480w, /images/jumbotron-large.jpg 800w"
          sizes="(max-width: 600px) 480px, 800px"
          alt="hero"
        >
        <p class="centered">Where do you want to eat?</p>
        <h2 class="content__heading">Discover New Restaurants</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await Source.List()
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant)
    })
    console.log(restaurants)
  }
}

export default Home
