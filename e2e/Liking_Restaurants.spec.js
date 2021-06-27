/* eslint-disable no-undef */
Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/like')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants')

  I.amOnPage('/')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.restaurant__title a')

  const firstRestaurant = locate('.restaurant__title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.seeElement('.restaurant-item')
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})
