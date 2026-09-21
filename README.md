# Product Search & Price Lookup

A simple React + TypeScript project that allows users to search for products and view the prices of matching products.

## Live Demo

[View Live Project](https://search-app-self.vercel.app/)

## About The Project

This project is a simple product search application built with **React** and **TypeScript**.

Users can type a product name into the search box, and the application filters the available products based on the entered text. Matching products are then displayed with their corresponding prices.

The project was created as a practical exercise to understand React components, state management, array methods, and conditional rendering.

## Features

* Display a list of all available products
* Search products by name
* Case-insensitive product search
* Display matching products and their prices
* Hide search results when the search input is empty
* Show a message section for matched products
* Separate components for product rows and search results

## Technologies Used

* React
* TypeScript
* CSS
* Vite

## React Concepts Practiced

This project helped practice several important React concepts:

* Functional Components
* `useState`
* State updates
* Props
* TypeScript interfaces
* Conditional Rendering
* Rendering lists with `map()`
* Array `filter()`
* Event handling with `onChange`
* String methods such as `toLowerCase()` and `trim()`

## How The Search Works

When the user types something into the search input, the application uses the `filter()` method to find products whose names contain the entered text.

```ts
const newMatched = productsss.filter(product =>
  product.name.toLowerCase().includes(searchedItem.toLowerCase())
)
```

The matching products are then stored in React state and displayed in the search results table.

If the search input is empty, the search result state is cleared:

```ts
if (searchedItem.trim() === "") {
  setSearchedMatch([])
  return
}
```

This also makes the matched-product section disappear when the input is cleared.

## Project Structure

```text
simple-search/
│
├── public/
│
├── src/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Go to the project directory:

```bash
cd simple-search
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

To create a production build:

```bash
npm run build
```

## Future Improvements

Possible improvements for the project include:

* Adding product categories
* Adding sorting by price
* Adding a "No products found" message
* Improving the search experience
* Adding more product information

## Author

Rezaul Karim

---

If you find this project useful, feel free to explore the code and experiment with it.
