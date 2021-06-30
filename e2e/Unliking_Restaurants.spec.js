/* eslint-disable no-undef */
const assert = require('assert')
Feature('Unliking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/like')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('', '.restaurants')
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.restaurant__title a')
  I.click(locate('.restaurant__title a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')

  I.seeElement('.restaurant__title a')
  I.click(locate('.restaurant__title a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  const likedRestaurantTitle = await I.grabTextFrom('.restaurants')
  assert.strictEqual('', likedRestaurantTitle)
})
