# Next.js - Product Catalog

## A. Scenario

Next.js is a perfect vehicle to build something quick, but not so dirty. In fact, it gives you a very good starting point to continue to build off.

Just as you thought that to yourself, the developer next to you says:

> You know what would be great, if we could have a product catalog on our intranet. Nothing fancy, we can drive it of an exported JSON file.

Did that lightbulb make a sound, or was it just in your head? We're gonna do this.

## B. What you will be working on today

You will build a product navigation application, that lists, show details and search list of products. For now, you can pass this product list (that actually comes from here <https://fakestoreapi.com/>) as props.

The application should support the following features:

- List all products - show title, image, price and category in the list
- Show details for one of the products (show all the data)
- Filter the product list on categories

If you have time over, consider adding:

- Add new product - this needs to be a client-side component... Why?
- Update product data - this too needs to be a client-side component.
- Delete a product
- Add a free text search that searches for a value in any field

For all those exercises, you could still just manipulate the product JSON, for this exercise, but it is not hard to change to use the API, <https://fakestoreapi.com/>. Change to the API.

## C. Lab instructions

We want you to use Next.js and its features, such as `<Link>`, `<Image>` and routing and/or layouting conventions. Create separate pages for the product listing and product details and build them with sensible `Component` structure.

Create the initial structure with `npx create-next-app next-product-catalog`

There is the data, that is stored here `./data/data.json` and can be imported through `const products = require('./data/json');`

## D. Testing and linting setup

The main focus of this exercise is to get your feet wet with Next.js. Still, we encourage you to write tests and make sure your App is working well as intended.

Here is the instruction on how to test your App.

- Unit tests:

  - Write a few unit tests for the core functionality
  - Break this functionality out to separate functions
  - Consider how you can test that functionality without running the component
  - Remember that a unit test runs fast, in isolation and does not do any IO

- Integration test:

  - Write a few integration tests that test a page
  - Write a few integration tests that test a component
  - Mock network calls
  - Make verifications to the rendered component using https://testing-library.com

- End-to-end test:
  - Write a few e2e tests using Cypress https://www.cypress.io/
  - Make verifications against `cy` elements
  - What if the component creates data? How can you clean/restore test data?

---

Good luck and have fun!
