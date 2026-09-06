
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <SimpleSearch></SimpleSearch>
      <ProductsTable></ProductsTable>

    </>
  )
}

// const produts: string[] = ['mouse', 'pad']

interface Product {
  name: string;
  price: number;
}

const productsss: Product[] = [
  // Electronics & Mobile Devices
  { name: 'Smartphone Pro Max', price: 1199 },
  { name: 'Ultrabook Laptop 15"', price: 1499 },
  { name: 'Tablet Air 11"', price: 599 },
  { name: 'Wireless Earbuds', price: 199 },
  { name: 'Noise-Canceling Headphones', price: 349 },
  { name: 'Smartwatch Series 9', price: 399 },
  { name: '4K OLED Smart TV 55"', price: 1299 },
  { name: 'Desktop Gaming PC', price: 2499 },
  { name: 'Mechanical Gaming Keyboard', price: 129 },
  { name: 'Ergonomic Wireless Mouse', price: 89 },
  { name: 'Curved Monitor 34"', price: 699 },
  { name: 'Portable Bluetooth Speaker', price: 149 },
  { name: 'Action Camera 4K', price: 299 },
  { name: 'e-Reader HD', price: 139 },
  { name: 'VR Headset 256GB', price: 499 },
  { name: 'Ultrabook Laptop 15"', price: 499 },


  // Home Appliances & Smart Home
  { name: 'Robot Vacuum Cleaner', price: 450 },
  { name: 'Air Fryer XL', price: 120 },
  { name: 'Espresso Coffee Machine', price: 550 },
  { name: 'Smart Wi-Fi Thermostat', price: 180 },
  { name: 'Electric Kettle', price: 45 },
  { name: 'Countertop Blender', price: 89 },
  { name: 'Smart Security Camera', price: 75 },
  { name: 'Air Purifier HEPA', price: 210 },
  { name: 'Microwave Oven', price: 160 },
  { name: 'Stand Mixer', price: 320 },

  // Footwear & Apparel
  { name: 'Running Shoes', price: 130 },
  { name: 'Leather Jacket', price: 250 },
  { name: 'Denim Jeans', price: 70 },
  { name: 'Cotton T-Shirt', price: 25 },
  { name: 'Winter Parka', price: 210 },
  { name: 'Formal Dress Shoes', price: 160 },
  { name: 'Athletic Hoodie', price: 65 },
  { name: 'Polarized Sunglasses', price: 150 },
  { name: 'Leather Backpack', price: 110 },
  { name: 'Stainless Steel Watch', price: 220 },

  // Sports & Outdoors
  { name: 'Mountain Bike 29"', price: 850 },
  { name: 'Yoga Mat Non-Slip', price: 35 },
  { name: 'Adjustable Dumbbell Set', price: 299 },
  { name: '2-Person Camping Tent', price: 175 },
  { name: 'Insulated Water Bottle', price: 30 },
  { name: 'Treadmill Folding', price: 950 },
  { name: 'Fitness Tracker Band', price: 60 },
  { name: 'Stand-Up Paddleboard', price: 480 },
  { name: 'Hiking Boots', price: 145 },
  { name: 'Tennis Racket', price: 190 }
];
function ProductsTable() {
  return (
    <div className='all-products-conatainer'>
      <h1>All Products</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        {
          productsss.map(product => <ProductTableRows
            name={product.name}
            price={product.price}></ProductTableRows>)
        }
      </table>
    </div>
  )
}


function ProductTableRows({ name, price }: { name: string, price: number }) {
  return (

    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>

  )
}

function SimpleSearch() {

  const [searchedMatched, setSearchedMatch] = useState<Product[]>([])

  function handleSearch(searchedItem: string): void {
    if (searchedItem.trim() === "") {
      setSearchedMatch([])
      return
    }
    // let newMatched = productsss.filter(p => p.name.toLocaleLowerCase().includes(searchedItem.toLocaleLowerCase()) )
    let newMatched = productsss.filter(p => p.name.toLowerCase().includes(searchedItem.toLowerCase()))



    if (newMatched) {
      console.log("New Matchd ", newMatched)
      let reNewMatched = newMatched
      setSearchedMatch(reNewMatched)
    }

  }
  return (
    <div >

      <div className='input-container'>
       <h1>Search Products & View Prices</h1>
        <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder='Search...' />

      </div>
      {searchedMatched.length > 0 && (
        <div className='search-products-container'>
          <h1>Matched Product</h1>

          <table className='table-with-searched-data'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {searchedMatched.map(product => (
                <SearchedProduct product={product} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function SearchedProduct({ product }: { product: Product }) {
  return (

    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>

  )
}

export default App
