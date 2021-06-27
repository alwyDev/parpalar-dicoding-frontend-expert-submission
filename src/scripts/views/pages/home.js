import Source from '../../data/parlapar-source'
import { createRestaurantTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="content">
        <img class="jumbotron-image lazyload" src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" width="450" alt="home image">
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
