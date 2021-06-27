/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavoriteRestaurantDicoding from '../src/scripts/data/favorite-restaurant-dicoding'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDicoding.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantDicoding.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDicoding)
})
