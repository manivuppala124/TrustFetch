// // src/App.js - Enhanced Version with Document Requirements
// import React, { useState, useEffect } from 'react';
// import { db } from './firebase';
// import { collection, onSnapshot, addDoc } from 'firebase/firestore';
// import './App.css';

// // Enhanced sample data with local stores and deals
// const addSampleData = async () => {
//   const sampleGroceryData = [
//     {
//       brand: "Amul",
//       itemName: "Milk",
//       unit: "1 litre",
//       storePrices: {
//         BigBasket: 55,
//         Blinkit: 53,
//         Dmart: 52,
//         "Local Kirana": 48,
//         "Reliance Fresh": 54
//       },
//       storeTypes: {
//         BigBasket: "online",
//         Blinkit: "online", 
//         Dmart: "offline",
//         "Local Kirana": "offline",
//         "Reliance Fresh": "offline"
//       },
//       deals: {
//         "Local Kirana": "Buy 2 Get 5% Off",
//         Dmart: "Weekend Special"
//       },
//       lastUpdated: new Date()
//     },
//     {
//       brand: "Britannia",
//       itemName: "Bread",
//       unit: "1 loaf",
//       storePrices: {
//         BigBasket: 28,
//         Blinkit: 30,
//         Dmart: 25,
//         "Local Kirana": 22,
//         "Reliance Fresh": 26
//       },
//       storeTypes: {
//         BigBasket: "online",
//         Blinkit: "online",
//         Dmart: "offline", 
//         "Local Kirana": "offline",
//         "Reliance Fresh": "offline"
//       },
//       deals: {
//         "Local Kirana": "Fresh Daily",
//         Dmart: "Bulk Discount Available"
//       },
//       lastUpdated: new Date()
//     },
//     {
//       brand: "Tata Salt",
//       itemName: "Salt",
//       unit: "1 kg",
//       storePrices: {
//         BigBasket: 22,
//         Blinkit: 25,
//         Dmart: 20,
//         "Local Kirana": 18,
//         "Reliance Fresh": 21
//       },
//       storeTypes: {
//         BigBasket: "online",
//         Blinkit: "online",
//         Dmart: "offline",
//         "Local Kirana": "offline", 
//         "Reliance Fresh": "offline"
//       },
//       deals: {
//         "Local Kirana": "Best Price Guarantee",
//         Dmart: "Family Pack Available"
//       },
//       lastUpdated: new Date()
//     },
//     {
//       brand: "India Gate",
//       itemName: "Basmati Rice",
//       unit: "5 kg",
//       storePrices: {
//         BigBasket: 450,
//         Blinkit: 475,
//         Dmart: 425,
//         "Local Kirana": 410,
//         "Reliance Fresh": 440
//       },
//       storeTypes: {
//         BigBasket: "online",
//         Blinkit: "online",
//         Dmart: "offline",
//         "Local Kirana": "offline",
//         "Reliance Fresh": "offline"
//       },
//       deals: {
//         "Local Kirana": "Festival Offer - 10% Off",
//         Dmart: "Premium Quality"
//       },
//       lastUpdated: new Date()
//     },
//     {
//       brand: "Fortune",
//       itemName: "Sunflower Oil", 
//       unit: "1 litre",
//       storePrices: {
//         BigBasket: 165,
//         Blinkit: 170,
//         Dmart: 158,
//         "Local Kirana": 155,
//         "Reliance Fresh": 162
//       },
//       storeTypes: {
//         BigBasket: "online",
//         Blinkit: "online",
//         Dmart: "offline",
//         "Local Kirana": "offline",
//         "Reliance Fresh": "offline"
//       },
//       deals: {
//         "Local Kirana": "Free Home Delivery",
//         Dmart: "Combo Offers Available"
//       },
//       lastUpdated: new Date()
//     }
//   ];

//   try {
//     console.log('Adding enhanced sample data...');
    
//     for (const item of sampleGroceryData) {
//       await addDoc(collection(db, 'groceries'), item);
//       console.log(`Added: ${item.brand} ${item.itemName}`);
//     }
    
//     console.log('All sample data added successfully!');
//     alert('Enhanced sample data with local stores added! 🎉');
    
//   } catch (error) {
//     console.error('Error adding sample data:', error);
//     alert('Error adding sample data. Please check your Firebase configuration.');
//   }
// };

// // Enhanced Grocery Table Component
// const GroceryTable = ({ data, userPincode }) => {
//   const getCheapestStore = (storePrices) => {
//     const stores = Object.keys(storePrices);
//     let cheapest = stores[0];
//     let lowestPrice = storePrices[cheapest];
    
//     stores.forEach(store => {
//       if (storePrices[store] < lowestPrice) {
//         cheapest = store;
//         lowestPrice = storePrices[store];
//       }
//     });
    
//     return cheapest;
//   };

//   return (
//     <div className="table-container">
//       <table className="grocery-table">
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Brand</th>
//             <th>Unit</th>
//             <th>BigBasket</th>
//             <th>Blinkit</th>
//             <th>Dmart</th>
//             <th>Local Kirana</th>
//             <th>Reliance Fresh</th>
//             <th>Best Deal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, idx) => {
//             const cheapestStore = getCheapestStore(item.storePrices);
//             const stores = Object.keys(item.storePrices);
            
//             return (
//               <tr key={idx}>
//                 <td>{item.itemName}</td>
//                 <td>{item.brand}</td>
//                 <td>{item.unit}</td>
//                 {stores.map(store => (
//                   <td key={store} className={cheapestStore === store ? 'cheapest' : ''}>
//                     <div className="price-cell">
//                       <span className="price">₹{item.storePrices[store]}</span>
//                       <span className={`store-type ${item.storeTypes?.[store]}`}>
//                         {item.storeTypes?.[store] === 'online' ? '🌐' : '🏪'}
//                       </span>
//                       {item.deals?.[store] && (
//                         <div className="deal-tag">
//                           🏷️ {item.deals[store]}
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 ))}
//                 <td className="best-deal">
//                   <div className="deal-info">
//                     <strong>{cheapestStore}</strong><br/>
//                     <span className="best-price">₹{item.storePrices[cheapestStore]}</span>
//                     {item.deals?.[cheapestStore] && (
//                       <div className="best-deal-tag">
//                         🎯 {item.deals[cheapestStore]}
//                       </div>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Enhanced Add Item Form
// const AddItemForm = ({ onItemAdded }) => {
//   const [formData, setFormData] = useState({
//     itemName: '',
//     brand: '',
//     unit: '',
//     BigBasket: '',
//     Blinkit: '',
//     Dmart: '',
//     'Local Kirana': '',
//     'Reliance Fresh': '',
//     deals: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const groceryItem = {
//         itemName: formData.itemName,
//         brand: formData.brand,
//         unit: formData.unit,
//         storePrices: {
//           BigBasket: parseFloat(formData.BigBasket) || 0,
//           Blinkit: parseFloat(formData.Blinkit) || 0,
//           Dmart: parseFloat(formData.Dmart) || 0,
//           'Local Kirana': parseFloat(formData['Local Kirana']) || 0,
//           'Reliance Fresh': parseFloat(formData['Reliance Fresh']) || 0
//         },
//         storeTypes: {
//           BigBasket: "online",
//           Blinkit: "online",
//           Dmart: "offline",
//           'Local Kirana': "offline",
//           'Reliance Fresh': "offline"
//         },
//         deals: formData.deals ? { 'Local Kirana': formData.deals } : {},
//         lastUpdated: new Date()
//       };

//       await addDoc(collection(db, 'groceries'), groceryItem);
//       alert('Item added successfully! 🎉');
      
//       setFormData({
//         itemName: '',
//         brand: '',
//         unit: '',
//         BigBasket: '',
//         Blinkit: '',
//         Dmart: '',
//         'Local Kirana': '',
//         'Reliance Fresh': '',
//         deals: ''
//       });

//       if (onItemAdded) onItemAdded();
//     } catch (error) {
//       console.error('Error adding item:', error);
//       alert('Error adding item. Please try again.');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="add-item-form">
//       <h3>Add New Grocery Price Data</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <input
//             type="text"
//             name="itemName"
//             placeholder="Item Name"
//             value={formData.itemName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand"
//             value={formData.brand}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="unit"
//             placeholder="Unit (e.g., 1kg, 500ml)"
//             value={formData.unit}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-row">
//           <input
//             type="number"
//             step="0.01"
//             name="BigBasket"
//             placeholder="BigBasket Price"
//             value={formData.BigBasket}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             step="0.01"
//             name="Blinkit"
//             placeholder="Blinkit Price"
//             value={formData.Blinkit}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             step="0.01"
//             name="Dmart"
//             placeholder="Dmart Price"
//             value={formData.Dmart}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-row">
//           <input
//             type="number"
//             step="0.01"
//             name="Local Kirana"
//             placeholder="Local Kirana Price"
//             value={formData['Local Kirana']}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             step="0.01"
//             name="Reliance Fresh"
//             placeholder="Reliance Fresh Price"
//             value={formData['Reliance Fresh']}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="deals"
//             placeholder="Any Special Deals/Offers"
//             value={formData.deals}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="add-btn">Add Price Data 🛒</button>
//       </form>
//     </div>
//   );
// };

// // Location Filter Component
// const LocationFilter = ({ userPincode, setUserPincode }) => {
//   return (
//     <div className="location-filter">
//       <input
//         type="text"
//         placeholder="Enter your pincode for nearby stores"
//         value={userPincode}
//         onChange={(e) => setUserPincode(e.target.value)}
//         className="pincode-input"
//       />
//       <span className="location-icon">📍</span>
//     </div>
//   );
// };

// // Main App Component
// function App() {
//   const [groceryItems, setGroceryItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortByPrice, setSortByPrice] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [userPincode, setUserPincode] = useState('');
//   const [showOfflineOnly, setShowOfflineOnly] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'groceries'), (snapshot) => {
//       const items = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
      
//       console.log('Fetched items:', items);
//       setGroceryItems(items);
//       setLoading(false);
//     }, (error) => {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     let filtered = groceryItems.filter(item =>
//       item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.brand.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (sortByPrice) {
//       filtered = filtered.sort((a, b) => {
//         const lowestPriceA = Math.min(...Object.values(a.storePrices));
//         const lowestPriceB = Math.min(...Object.values(b.storePrices));
//         return lowestPriceA - lowestPriceB;
//       });
//     }

//     setFilteredItems(filtered);
//   }, [groceryItems, searchTerm, sortByPrice]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>🛒 TrustFetch - Hyperlocal Grocery Price Comparison</h1>
//         <p>Compare prices across online & offline stores in your area</p>
//         <p className="subtitle">Find the best deals from BigBasket, Blinkit, Dmart, Local Kirana & Reliance Fresh</p>
//       </header>

//       <main>
//         <div className="controls">
//           <input
//             type="text"
//             placeholder="Search by item name or brand..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
          
//           <LocationFilter 
//             userPincode={userPincode} 
//             setUserPincode={setUserPincode}
//           />
          
//           <button
//             onClick={() => setSortByPrice(!sortByPrice)}
//             className={`sort-btn ${sortByPrice ? 'active' : ''}`}
//           >
//             {sortByPrice ? '📈 Sorted by Price' : '📊 Sort by Price'}
//           </button>
          
//           <button
//             onClick={() => setShowOfflineOnly(!showOfflineOnly)}
//             className={`filter-btn ${showOfflineOnly ? 'active' : ''}`}
//           >
//             {showOfflineOnly ? '🏪 Offline Only' : '🌐 All Stores'}
//           </button>
          
//           <button
//             onClick={addSampleData}
//             className="sample-data-btn"
//           >
//             🎯 Add Sample Data
//           </button>
//         </div>

//         <AddItemForm onItemAdded={() => console.log('Item added!')} />

//         <div className="results">
//           <h2>Price Comparison Results {userPincode && `- Near ${userPincode}`}</h2>
//           {loading ? (
//             <p>Loading grocery data... 🔄</p>
//           ) : filteredItems.length > 0 ? (
//             <>
//               <div className="results-summary">
//                 <p>📊 Showing {filteredItems.length} items</p>
//                 <p>💡 Green highlighted prices are the cheapest deals</p>
//                 <p>🏷️ Look for special offers and discounts</p>
//               </div>
//               <GroceryTable data={filteredItems} userPincode={userPincode} />
//             </>
//           ) : (
//             <div className="no-data">
//               <p>No items found in your area</p>
//               <ul>
//                 <li>🎯 Click "Add Sample Data" to see demo prices</li>
//                 <li>📝 Add local store prices using the form above</li>
//                 <li>📍 Try entering your pincode for location-based results</li>
//                 <li>🔍 Search for common items like "milk", "bread", "rice"</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </main>

//       <footer>
//         <p>💡 Hyperlocal Grocery Price Comparison | Save Money, Shop Smart</p>
//         <p>Made with ❤️ for local communities | Jai Shree Ram 🙏🏻</p>
//       </footer>
//     </div>
//   );
// }

// export default App;




// src/App.js - Optimized TrustFetch App
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import './App.css';

// Enhanced sample data with all required features
const SAMPLE_DATA = [
  {
    brand: "Amul", itemName: "Milk", unit: "1L",
    storePrices: { BigBasket: 55, Blinkit: 53, DMart: 52, "Local Kirana": 48, "Reliance Fresh": 54 },
    storeTypes: { BigBasket: "online", Blinkit: "online", DMart: "offline", "Local Kirana": "offline", "Reliance Fresh": "offline" },
    deals: { "Local Kirana": "Buy 2 Get 5% Off", DMart: "Weekend Special" },
    lastUpdated: new Date()
  },
  {
    brand: "Britannia", itemName: "Bread", unit: "1 loaf",
    storePrices: { BigBasket: 28, Blinkit: 30, DMart: 25, "Local Kirana": 22, "Reliance Fresh": 26 },
    storeTypes: { BigBasket: "online", Blinkit: "online", DMart: "offline", "Local Kirana": "offline", "Reliance Fresh": "offline" },
    deals: { "Local Kirana": "Fresh Daily", DMart: "Bulk Discount" },
    lastUpdated: new Date()
  },
  {
    brand: "India Gate", itemName: "Basmati Rice", unit: "5kg",
    storePrices: { BigBasket: 450, Blinkit: 475, DMart: 425, "Local Kirana": 410, "Reliance Fresh": 440 },
    storeTypes: { BigBasket: "online", Blinkit: "online", DMart: "offline", "Local Kirana": "offline", "Reliance Fresh": "offline" },
    deals: { "Local Kirana": "Festival 10% Off", DMart: "Premium Quality" },
    lastUpdated: new Date()
  }
];

// Add sample data function
const addSampleData = async () => {
  try {
    for (const item of SAMPLE_DATA) {
      await addDoc(collection(db, 'groceries'), item);
    }
    alert('Sample data added! 🎉');
  } catch (error) {
    console.error('Error:', error);
    alert('Error adding data. Check Firebase config.');
  }
};

// Price comparison table component
const PriceTable = ({ items, pincode }) => {
  const getBestDeal = (prices) => {
    return Object.entries(prices).reduce((best, [store, price]) => 
      price < best.price ? { store, price } : best, 
      { store: Object.keys(prices)[0], price: Object.values(prices)[0] }
    );
  };

  return (
    <div className="table-container">
      <table className="price-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Brand</th>
            <th>Unit</th>
            <th>BigBasket 🌐</th>
            <th>Blinkit 🌐</th>
            <th>DMart 🏪</th>
            <th>Local Kirana 🏪</th>
            <th>Reliance Fresh 🏪</th>
            <th>Best Deal 🎯</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const bestDeal = getBestDeal(item.storePrices);
            return (
              <tr key={i}>
                <td>{item.itemName}</td>
                <td>{item.brand}</td>
                <td>{item.unit}</td>
                {Object.entries(item.storePrices).map(([store, price]) => (
                  <td key={store} className={bestDeal.store === store ? 'best-price' : ''}>
                    <div>₹{price}</div>
                    {item.deals?.[store] && <small className="deal">🏷️ {item.deals[store]}</small>}
                  </td>
                ))}
                <td className="best-deal">
                  <strong>{bestDeal.store}</strong><br/>
                  ₹{bestDeal.price}
                  {item.deals?.[bestDeal.store] && <div className="deal">🎯 {item.deals[bestDeal.store]}</div>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Add new item form
const AddItemForm = () => {
  const [item, setItem] = useState({
    itemName: '', brand: '', unit: '',
    BigBasket: '', Blinkit: '', DMart: '', 'Local Kirana': '', 'Reliance Fresh': '', deals: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = {
        itemName: item.itemName, brand: item.brand, unit: item.unit,
        storePrices: {
          BigBasket: +item.BigBasket || 0, Blinkit: +item.Blinkit || 0,
          DMart: +item.DMart || 0, 'Local Kirana': +item['Local Kirana'] || 0,
          'Reliance Fresh': +item['Reliance Fresh'] || 0
        },
        storeTypes: {
          BigBasket: "online", Blinkit: "online", DMart: "offline",
          'Local Kirana': "offline", 'Reliance Fresh': "offline"
        },
        deals: item.deals ? { 'Local Kirana': item.deals } : {},
        lastUpdated: new Date()
      };
      
      await addDoc(collection(db, 'groceries'), newItem);
      alert('Item added! 🎉');
      setItem({ itemName: '', brand: '', unit: '', BigBasket: '', Blinkit: '', DMart: '', 'Local Kirana': '', 'Reliance Fresh': '', deals: '' });
    } catch (error) {
      alert('Error adding item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>Add New Price Data</h3>
      <div className="form-grid">
        <input placeholder="Item Name" value={item.itemName} onChange={e => setItem({...item, itemName: e.target.value})} required />
        <input placeholder="Brand" value={item.brand} onChange={e => setItem({...item, brand: e.target.value})} required />
        <input placeholder="Unit" value={item.unit} onChange={e => setItem({...item, unit: e.target.value})} required />
        <input type="number" placeholder="BigBasket ₹" value={item.BigBasket} onChange={e => setItem({...item, BigBasket: e.target.value})} />
        <input type="number" placeholder="Blinkit ₹" value={item.Blinkit} onChange={e => setItem({...item, Blinkit: e.target.value})} />
        <input type="number" placeholder="DMart ₹" value={item.DMart} onChange={e => setItem({...item, DMart: e.target.value})} />
        <input type="number" placeholder="Local Kirana ₹" value={item['Local Kirana']} onChange={e => setItem({...item, 'Local Kirana': e.target.value})} />
        <input type="number" placeholder="Reliance Fresh ₹" value={item['Reliance Fresh']} onChange={e => setItem({...item, 'Reliance Fresh': e.target.value})} />
        <input placeholder="Special Deals" value={item.deals} onChange={e => setItem({...item, deals: e.target.value})} />
      </div>
      <button type="submit">Add Price Data 🛒</button>
    </form>
  );
};

// Main App
function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState('');
  const [pincode, setPincode] = useState('');
  const [sortByPrice, setSortByPrice] = useState(false);
  const [showOfflineOnly, setShowOfflineOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'groceries'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Filter and sort items
  useEffect(() => {
    let filtered = items.filter(item =>
      item.itemName.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
    );

    if (showOfflineOnly) {
      filtered = filtered.map(item => ({
        ...item,
        storePrices: Object.fromEntries(
          Object.entries(item.storePrices).filter(([store]) => 
            item.storeTypes?.[store] === 'offline'
          )
        )
      }));
    }

    if (sortByPrice) {
      filtered.sort((a, b) => Math.min(...Object.values(a.storePrices)) - Math.min(...Object.values(b.storePrices)));
    }

    setFilteredItems(filtered);
  }, [items, search, sortByPrice, showOfflineOnly]);

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>🛒 TrustFetch - Hyperlocal Grocery Price Comparison</h1>
        <p>Compare prices across online & offline stores • Save Money, Shop Smart</p>
      </header>

      {/* Controls */}
      <div className="controls">
        <input 
          type="text" 
          placeholder="Search items or brands..." 
          value={search} 
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <input 
          type="text" 
          placeholder="Enter pincode 📍" 
          value={pincode} 
          onChange={e => setPincode(e.target.value)}
          className="pincode-input"
        />
        <button 
          onClick={() => setSortByPrice(!sortByPrice)}
          className={sortByPrice ? 'active' : ''}
        >
          {sortByPrice ? '📈 Sorted by Price' : '📊 Sort by Price'}
        </button>
        <button 
          onClick={() => setShowOfflineOnly(!showOfflineOnly)}
          className={showOfflineOnly ? 'active' : ''}
        >
          {showOfflineOnly ? '🏪 Offline Only' : '🌐 All Stores'}
        </button>
        <button onClick={addSampleData} className="sample-btn">
          🎯 Add Sample Data
        </button>
      </div>

      {/* Add Item Form */}
      <AddItemForm />

      {/* Results */}
      <div className="results">
        <h2>Price Comparison {pincode && `- Near ${pincode}`}</h2>
        {loading ? (
          <p>Loading... 🔄</p>
        ) : filteredItems.length > 0 ? (
          <>
            <div className="summary">
              <p>📊 Showing {filteredItems.length} items • 💡 Green = Best Price • 🏷️ Special Offers Available</p>
            </div>
            <PriceTable items={filteredItems} pincode={pincode} />
          </>
        ) : (
          <div className="no-data">
            <h3>No items found</h3>
            <ul>
              <li>🎯 Click "Add Sample Data" for demo</li>
              <li>📝 Add your local prices above</li>
              <li>🔍 Try searching "milk", "bread", "rice"</li>
              <li>📍 Enter pincode for local results</li>
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer>
        <p>💬 Loved TrustFetch? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBHP7vgfxlC5Q6qDyBTEXxIN0sTA80ahHtDWcDQLtBzqBjtQ/viewform?usp=header" target="_blank">Give Feedback & Vote if You’d Use It</a> 🙌</p>
        <p>💡 Hyperlocal Grocery Price Comparison | Made with ❤️ for communities | Jai Shree Ram 🙏🏻</p>
      </footer>
    </div>
  );
}

export default App;