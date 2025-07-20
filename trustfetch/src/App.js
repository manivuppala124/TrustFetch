// src/App.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import './App.css';

// Sample data function moved here for easier access
const addSampleData = async () => {
  const sampleGroceryData = [
    {
      brand: "Amul",
      itemName: "Milk",
      unit: "1 litre",
      storePrices: {
        BigBasket: 55,
        Blinkit: 53,
        Dmart: 52,
        SwiggyInstamart: 56
      },
      lastUpdated: new Date()
    },
    {
      brand: "Britannia",
      itemName: "Bread",
      unit: "1 loaf",
      storePrices: {
        BigBasket: 28,
        Blinkit: 30,
        Dmart: 25,
        SwiggyInstamart: 32
      },
      lastUpdated: new Date()
    },
    {
      brand: "Tata Salt",
      itemName: "Salt",
      unit: "1 kg",
      storePrices: {
        BigBasket: 22,
        Blinkit: 25,
        Dmart: 20,
        SwiggyInstamart: 24
      },
      lastUpdated: new Date()
    },
    {
      brand: "India Gate",
      itemName: "Basmati Rice",
      unit: "5 kg",
      storePrices: {
        BigBasket: 450,
        Blinkit: 475,
        Dmart: 425,
        SwiggyInstamart: 465
      },
      lastUpdated: new Date()
    },
    {
      brand: "Fortune",
      itemName: "Sunflower Oil",
      unit: "1 litre",
      storePrices: {
        BigBasket: 165,
        Blinkit: 170,
        Dmart: 158,
        SwiggyInstamart: 172
      },
      lastUpdated: new Date()
    },
    {
      brand: "Maggi",
      itemName: "Noodles",
      unit: "12 pack",
      storePrices: {
        BigBasket: 144,
        Blinkit: 150,
        Dmart: 140,
        SwiggyInstamart: 152
      },
      lastUpdated: new Date()
    },
    {
      brand: "Coca Cola",
      itemName: "Soft Drink",
      unit: "2 litre",
      storePrices: {
        BigBasket: 85,
        Blinkit: 90,
        Dmart: 78,
        SwiggyInstamart: 88
      },
      lastUpdated: new Date()
    },
    {
      brand: "Parle-G",
      itemName: "Biscuits",
      unit: "1 packet",
      storePrices: {
        BigBasket: 12,
        Blinkit: 15,
        Dmart: 10,
        SwiggyInstamart: 14
      },
      lastUpdated: new Date()
    }
  ];

  try {
    console.log('Adding sample data...');
    
    for (const item of sampleGroceryData) {
      await addDoc(collection(db, 'groceries'), item);
      console.log(`Added: ${item.brand} ${item.itemName}`);
    }
    
    console.log('All sample data added successfully!');
    alert('Sample data added successfully! 🎉 You should see the items now.');
    
  } catch (error) {
    console.error('Error adding sample data:', error);
    alert('Error adding sample data. Please check your Firebase configuration.');
  }
};

// Grocery Table Component
const GroceryTable = ({ data }) => {
  // Function to find the cheapest store for each item
  const getCheapestStore = (storePrices) => {
    const stores = ['BigBasket', 'Blinkit', 'Dmart', 'SwiggyInstamart'];
    let cheapest = stores[0];
    let lowestPrice = storePrices[cheapest];
    
    stores.forEach(store => {
      if (storePrices[store] < lowestPrice) {
        cheapest = store;
        lowestPrice = storePrices[store];
      }
    });
    
    return cheapest;
  };

  return (
    <table className="grocery-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Brand</th>
          <th>Unit</th>
          <th>BigBasket</th>
          <th>Blinkit</th>
          <th>Dmart</th>
          <th>SwiggyInstamart</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => {
          const cheapestStore = getCheapestStore(item.storePrices);
          return (
            <tr key={idx}>
              <td>{item.itemName}</td>
              <td>{item.brand}</td>
              <td>{item.unit}</td>
              <td className={cheapestStore === 'BigBasket' ? 'cheapest' : ''}>
                ₹{item.storePrices.BigBasket}
              </td>
              <td className={cheapestStore === 'Blinkit' ? 'cheapest' : ''}>
                ₹{item.storePrices.Blinkit}
              </td>
              <td className={cheapestStore === 'Dmart' ? 'cheapest' : ''}>
                ₹{item.storePrices.Dmart}
              </td>
              <td className={cheapestStore === 'SwiggyInstamart' ? 'cheapest' : ''}>
                ₹{item.storePrices.SwiggyInstamart}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Add Item Form Component
const AddItemForm = ({ onItemAdded }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    brand: '',
    unit: '',
    BigBasket: '',
    Blinkit: '',
    Dmart: '',
    SwiggyInstamart: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const groceryItem = {
        itemName: formData.itemName,
        brand: formData.brand,
        unit: formData.unit,
        storePrices: {
          BigBasket: parseFloat(formData.BigBasket),
          Blinkit: parseFloat(formData.Blinkit),
          Dmart: parseFloat(formData.Dmart),
          SwiggyInstamart: parseFloat(formData.SwiggyInstamart)
        },
        lastUpdated: new Date()
      };

      await addDoc(collection(db, 'groceries'), groceryItem);
      alert('Item added successfully! 🎉');
      
      // Reset form
      setFormData({
        itemName: '',
        brand: '',
        unit: '',
        BigBasket: '',
        Blinkit: '',
        Dmart: '',
        SwiggyInstamart: ''
      });

      if (onItemAdded) onItemAdded();
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Error adding item. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-item-form">
      <h3>Add New Grocery Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="itemName"
            placeholder="Item Name (e.g., Milk)"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand (e.g., Amul)"
            value={formData.brand}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="unit"
            placeholder="Unit (e.g., 1 litre)"
            value={formData.unit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            step="0.01"
            name="BigBasket"
            placeholder="BigBasket Price"
            value={formData.BigBasket}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            step="0.01"
            name="Blinkit"
            placeholder="Blinkit Price"
            value={formData.Blinkit}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            step="0.01"
            name="Dmart"
            placeholder="Dmart Price"
            value={formData.Dmart}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            step="0.01"
            name="SwiggyInstamart"
            placeholder="SwiggyInstamart Price"
            value={formData.SwiggyInstamart}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="add-btn">Add Item 🛒</button>
      </form>
    </div>
  );
};

// Main App Component
function App() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByPrice, setSortByPrice] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'groceries'), (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      console.log('Fetched items:', items);
      setGroceryItems(items);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Filter items based on search term
  useEffect(() => {
    let filtered = groceryItems.filter(item =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort by lowest price if enabled
    if (sortByPrice) {
      filtered = filtered.sort((a, b) => {
        const lowestPriceA = Math.min(...Object.values(a.storePrices));
        const lowestPriceB = Math.min(...Object.values(b.storePrices));
        return lowestPriceA - lowestPriceB;
      });
    }

    setFilteredItems(filtered);
  }, [groceryItems, searchTerm, sortByPrice]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🛒 TrustFetch - Grocery Price Comparison</h1>
        <p>Find the best deals across BigBasket, Blinkit, Dmart & SwiggyInstamart</p>
      </header>

      <main>
        {/* Search and Filter Controls */}
        <div className="controls">
          <input
            type="text"
            placeholder="Search by item name or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button
            onClick={() => setSortByPrice(!sortByPrice)}
            className={`sort-btn ${sortByPrice ? 'active' : ''}`}
          >
            {sortByPrice ? '📈 Sorted by Price' : '📊 Sort by Lowest Price'}
          </button>
          <button
            onClick={addSampleData}
            className="sample-data-btn"
          >
            🎯 Add Sample Data
          </button>
        </div>

        {/* Add Item Form */}
        <AddItemForm onItemAdded={() => console.log('Item added!')} />

        {/* Results */}
        <div className="results">
          <h2>Price Comparison Results</h2>
          {loading ? (
            <p>Loading grocery data... 🔄</p>
          ) : filteredItems.length > 0 ? (
            <>
              <p>Showing {filteredItems.length} items</p>
              <GroceryTable data={filteredItems} />
            </>
          ) : (
            <div className="no-data">
              <p>No items found. Get started by:</p>
              <ul>
                <li>🎯 Click "Add Sample Data" button above</li>
                <li>📝 Or add items manually using the form</li>
                <li>🔍 Try a different search term if you have data</li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <footer>
        <p>Made with ❤️ for the 5-hour hackathon | Jai Shree Ram 🙏🏻</p>
      </footer>
    </div>
  );
}

export default App;