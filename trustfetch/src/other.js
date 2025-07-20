import React, { useState, useEffect } from 'react';
import { Search, MapPin, TrendingDown, Filter, Star, Clock, Truck, Store, Tag, Plus, BarChart3 } from 'lucide-react';

// Professional realistic grocery data for Indian market
const realisticGroceryData = [
  {
    id: 1,
    itemName: "Basmati Rice",
    brand: "India Gate",
    category: "Staples",
    unit: "5 kg",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 650,
      Blinkit: 675,
      Zepto: 680,
      Swiggy: 685,
      "Local Kirana": 580,
      "Reliance Smart": 620,
      "DMart": 595,
      "Spencer's": 640
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online",
      Zepto: "online", 
      Swiggy: "online",
      "Local Kirana": "offline",
      "Reliance Smart": "offline",
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: true,
      Zepto: false,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": false
    },
    deals: {
      "Local Kirana": "Buy 2 get 10% off",
      "DMart": "Weekend Special - ₹50 off",
      BigBasket: "Free delivery above ₹500"
    },
    ratings: {
      BigBasket: 4.2,
      "Local Kirana": 4.8,
      "DMart": 4.5,
      "Reliance Smart": 4.1
    },
    deliveryTime: {
      BigBasket: "2-3 hours",
      Blinkit: "15-20 mins",
      Zepto: "10-15 mins",
      Swiggy: "30-45 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 10, 30)
  },
  {
    id: 2,
    itemName: "Milk",
    brand: "Amul Gold",
    category: "Dairy",
    unit: "1 litre",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 62,
      Blinkit: 65,
      Zepto: 63,
      Swiggy: 66,
      "Local Kirana": 58,
      "Reliance Smart": 60,
      "DMart": 59,
      "Spencer's": 61
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online",
      Zepto: "online",
      Swiggy: "online", 
      "Local Kirana": "offline",
      "Reliance Smart": "offline",
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: true,
      Zepto: true,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": true
    },
    deals: {
      "Local Kirana": "Fresh daily delivery",
      Blinkit: "Subscribe & Save 5%",
      "DMart": "Buy 6 get 1 free"
    },
    ratings: {
      BigBasket: 4.4,
      Blinkit: 4.3,
      "Local Kirana": 4.9,
      "DMart": 4.6
    },
    deliveryTime: {
      BigBasket: "Same day",
      Blinkit: "10-15 mins",
      Zepto: "8-12 mins",
      Swiggy: "20-30 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 8, 15)
  },
  {
    id: 3,
    itemName: "Atta",
    brand: "Aashirvaad",
    category: "Staples",
    unit: "10 kg",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 485,
      Blinkit: 495,
      Zepto: 490,
      Swiggy: 500,
      "Local Kirana": 450,
      "Reliance Smart": 465,
      "DMart": 455,
      "Spencer's": 480
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online",
      Zepto: "online",
      Swiggy: "online",
      "Local Kirana": "offline", 
      "Reliance Smart": "offline",
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: false,
      Zepto: true,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": true
    },
    deals: {
      "Local Kirana": "₹30 off on first purchase",
      "DMart": "Member special - 8% off",
      BigBasket: "Bulk order discount"
    },
    ratings: {
      BigBasket: 4.3,
      "Local Kirana": 4.7,
      "DMart": 4.4,
      "Reliance Smart": 4.2
    },
    deliveryTime: {
      BigBasket: "Next day",
      Zepto: "25-35 mins",
      Swiggy: "45-60 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 9, 45)
  },
  {
    id: 4,
    itemName: "Cooking Oil",
    brand: "Fortune Sunlite",
    category: "Cooking Essentials",
    unit: "1 litre",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 185,
      Blinkit: 190,
      Zepto: 188,
      Swiggy: 195,
      "Local Kirana": 175,
      "Reliance Smart": 180,
      "DMart": 172,
      "Spencer's": 183
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online", 
      Zepto: "online",
      Swiggy: "online",
      "Local Kirana": "offline",
      "Reliance Smart": "offline",
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: true,
      Zepto: true,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": false
    },
    deals: {
      "DMart": "Smart Shopper - ₹20 off",
      "Local Kirana": "Home delivery free",
      Blinkit: "Lightning deal - 5% off"
    },
    ratings: {
      BigBasket: 4.1,
      Blinkit: 4.2,
      "Local Kirana": 4.6,
      "DMart": 4.7
    },
    deliveryTime: {
      BigBasket: "3-4 hours",
      Blinkit: "12-18 mins",
      Zepto: "15-20 mins",
      Swiggy: "35-50 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 11, 20)
  },
  {
    id: 5,
    itemName: "Bread",
    brand: "Britannia",
    category: "Bakery",
    unit: "400g",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 32,
      Blinkit: 35,
      Zepto: 33,
      Swiggy: 36,
      "Local Kirana": 28,
      "Reliance Smart": 30,
      "DMart": 29,
      "Spencer's": 31
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online",
      Zepto: "online",
      Swiggy: "online",
      "Local Kirana": "offline",
      "Reliance Smart": "offline", 
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: true,
      Zepto: true,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": true
    },
    deals: {
      "Local Kirana": "Fresh baked daily",
      "DMart": "Buy 3 get 10% off",
      Zepto: "Morning fresh guarantee"
    },
    ratings: {
      BigBasket: 4.0,
      Blinkit: 4.1,
      "Local Kirana": 4.8,
      "DMart": 4.3
    },
    deliveryTime: {
      BigBasket: "Same day",
      Blinkit: "8-12 mins",
      Zepto: "6-10 mins", 
      Swiggy: "15-25 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 7, 30)
  },
  {
    id: 6,
    itemName: "Onions",
    brand: "Fresh",
    category: "Vegetables",
    unit: "1 kg",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 45,
      Blinkit: 48,
      Zepto: 46,
      Swiggy: 50,
      "Local Kirana": 38,
      "Reliance Smart": 42,
      "DMart": 40,
      "Spencer's": 44
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online",
      Zepto: "online",
      Swiggy: "online",
      "Local Kirana": "offline",
      "Reliance Smart": "offline",
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: true,
      Zepto: true,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": true
    },
    deals: {
      "Local Kirana": "Farm fresh - same day",
      BigBasket: "Quality guarantee",
      "DMart": "Best price promise"
    },
    ratings: {
      BigBasket: 3.9,
      Blinkit: 4.0,
      "Local Kirana": 4.7,
      "DMart": 4.2
    },
    deliveryTime: {
      BigBasket: "2-3 hours",
      Blinkit: "10-15 mins",
      Zepto: "12-18 mins",
      Swiggy: "25-35 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 6, 45)
  },
  {
    id: 7,
    itemName: "Sugar",
    brand: "Dhampure",
    category: "Staples", 
    unit: "1 kg",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 52,
      Blinkit: 55,
      Zepto: 53,
      Swiggy: 56,
      "Local Kirana": 48,
      "Reliance Smart": 50,
      "DMart": 49,
      "Spencer's": 51
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online",
      Zepto: "online",
      Swiggy: "online",
      "Local Kirana": "offline",
      "Reliance Smart": "offline",
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: true,
      Zepto: true,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": true
    },
    deals: {
      "Local Kirana": "Bulk discount - 5kg+",
      "DMart": "Sweet deals - ₹5 off",
      BigBasket: "Subscribe monthly"
    },
    ratings: {
      BigBasket: 4.2,
      Blinkit: 4.1,
      "Local Kirana": 4.5,
      "DMart": 4.4
    },
    deliveryTime: {
      BigBasket: "3-4 hours",
      Blinkit: "12-20 mins",
      Zepto: "15-25 mins",
      Swiggy: "30-45 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 9, 15)
  },
  {
    id: 8,
    itemName: "Tomatoes",
    brand: "Fresh",
    category: "Vegetables",
    unit: "1 kg",
    image: "/api/placeholder/80/80",
    storePrices: {
      BigBasket: 65,
      Blinkit: 68,
      Zepto: 66,
      Swiggy: 70,
      "Local Kirana": 55,
      "Reliance Smart": 60,
      "DMart": 58,
      "Spencer's": 63
    },
    storeTypes: {
      BigBasket: "online",
      Blinkit: "online",
      Zepto: "online",
      Swiggy: "online",
      "Local Kirana": "offline",
      "Reliance Smart": "offline",
      "DMart": "offline",
      "Spencer's": "offline"
    },
    availability: {
      BigBasket: true,
      Blinkit: false,
      Zepto: true,
      Swiggy: true,
      "Local Kirana": true,
      "Reliance Smart": true,
      "DMart": true,
      "Spencer's": false
    },
    deals: {
      "Local Kirana": "Handpicked quality",
      "DMart": "Fresh morning stock",
      Zepto: "Premium selection"
    },
    ratings: {
      BigBasket: 3.8,
      "Local Kirana": 4.6,
      "DMart": 4.1,
      Zepto: 3.9
    },
    deliveryTime: {
      BigBasket: "2-3 hours",
      Zepto: "10-15 mins",
      Swiggy: "20-30 mins"
    },
    lastUpdated: new Date(2025, 6, 20, 8, 0)
  }
];

// Professional Store Data
const storeInfo = {
  BigBasket: { color: "#00a651", deliveryFee: 25, minOrder: 200 },
  Blinkit: { color: "#ffeb3b", deliveryFee: 15, minOrder: 150 },
  Zepto: { color: "#7c4dff", deliveryFee: 20, minOrder: 100 },
  Swiggy: { color: "#fc8019", deliveryFee: 30, minOrder: 250 },
  "Local Kirana": { color: "#4caf50", deliveryFee: 0, minOrder: 50 },
  "Reliance Smart": { color: "#2196f3", deliveryFee: 0, minOrder: 300 },
  "DMart": { color: "#ff5722", deliveryFee: 0, minOrder: 500 },
  "Spencer's": { color: "#9c27b0", deliveryFee: 0, minOrder: 400 }
};

// Enhanced Price Card Component
const PriceCard = ({ item, store, price, isAvailable, isCheapest, deal, rating, deliveryTime }) => {
  const storeType = item.storeTypes[store];
  const storeColor = storeInfo[store]?.color || "#666";
  
  return (
    <div className={`price-card ${isCheapest ? 'cheapest' : ''} ${!isAvailable ? 'unavailable' : ''}`}>
      <div className="store-header" style={{ borderTopColor: storeColor }}>
        <div className="store-info">
          <span className="store-name">{store}</span>
          {storeType === 'online' ? <Truck size={14} /> : <Store size={14} />}
        </div>
        {rating && (
          <div className="rating">
            <Star size={12} fill="#ffc107" color="#ffc107" />
            <span>{rating}</span>
          </div>
        )}
      </div>
      
      <div className="price-section">
        {isAvailable ? (
          <>
            <div className={`price ${isCheapest ? 'best-price' : ''}`}>
              ₹{price}
              {isCheapest && <span className="best-badge">BEST</span>}
            </div>
            {deliveryTime && (
              <div className="delivery-time">
                <Clock size={12} />
                <span>{deliveryTime}</span>
              </div>
            )}
          </>
        ) : (
          <div className="unavailable-text">Out of Stock</div>
        )}
      </div>
      
      {deal && isAvailable && (
        <div className="deal-tag">
          <Tag size={12} />
          <span>{deal}</span>
        </div>
      )}
    </div>
  );
};

// Professional Item Card Component  
const ItemCard = ({ item }) => {
  const availablePrices = Object.entries(item.storePrices).filter(
    ([store]) => item.availability[store]
  );
  const cheapestPrice = Math.min(...availablePrices.map(([, price]) => price));
  const cheapestStore = availablePrices.find(([, price]) => price === cheapestPrice)?.[0];
  
  return (
    <div className="item-card">
      <div className="item-header">
        <img 
          src={item.image} 
          alt={item.itemName}
          className="item-image"
        />
        <div className="item-details">
          <h3 className="item-name">{item.itemName}</h3>
          <p className="item-brand">{item.brand} • {item.unit}</p>
          <span className="item-category">{item.category}</span>
        </div>
        <div className="best-deal-summary">
          <div className="best-price">₹{cheapestPrice}</div>
          <div className="best-store">{cheapestStore}</div>
        </div>
      </div>
      
      <div className="prices-grid">
        {Object.entries(item.storePrices).map(([store, price]) => (
          <PriceCard
            key={store}
            item={item}
            store={store}
            price={price}
            isAvailable={item.availability[store]}
            isCheapest={item.availability[store] && price === cheapestPrice}
            deal={item.deals[store]}
            rating={item.ratings[store]}
            deliveryTime={item.deliveryTime[store]}
          />
        ))}
      </div>
    </div>
  );
};

// Professional Add Item Form
const AddItemForm = ({ onAddItem }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    itemName: '',
    brand: '',
    category: 'Staples',
    unit: '',
    BigBasket: '',
    Blinkit: '',
    Zepto: '',
    Swiggy: '',
    'Local Kirana': '',
    'Reliance Smart': '',
    'DMart': '',
    "Spencer's": ''
  });

  const categories = ['Staples', 'Dairy', 'Vegetables', 'Fruits', 'Bakery', 'Snacks', 'Beverages', 'Cooking Essentials'];
  const stores = ['BigBasket', 'Blinkit', 'Zepto', 'Swiggy', 'Local Kirana', 'Reliance Smart', 'DMart', "Spencer's"];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {
      id: Date.now(),
      itemName: formData.itemName,
      brand: formData.brand,
      category: formData.category,
      unit: formData.unit,
      image: "/api/placeholder/80/80",
      storePrices: {},
      storeTypes: {
        BigBasket: "online",
        Blinkit: "online", 
        Zepto: "online",
        Swiggy: "online",
        "Local Kirana": "offline",
        "Reliance Smart": "offline",
        "DMart": "offline",
        "Spencer's": "offline"
      },
      availability: {},
      deals: {},
      ratings: {},
      deliveryTime: {},
      lastUpdated: new Date()
    };

    stores.forEach(store => {
      const price = parseFloat(formData[store]);
      if (price > 0) {
        newItem.storePrices[store] = price;
        newItem.availability[store] = true;
      } else {
        newItem.availability[store] = false;
      }
    });

    onAddItem(newItem);
    setFormData({
      itemName: '',
      brand: '',
      category: 'Staples', 
      unit: '',
      BigBasket: '',
      Blinkit: '',
      Zepto: '',
      Swiggy: '',
      'Local Kirana': '',
      'Reliance Smart': '',
      'DMart': '',
      "Spencer's": ''
    });
    setShowForm(false);
  };

  return (
    <div className="add-item-section">
      <button 
        className="add-item-trigger"
        onClick={() => setShowForm(!showForm)}
      >
        <Plus size={18} />
        Add New Price Data
      </button>
      
      {showForm && (
        <div className="add-item-form">
          <h3>Add New Grocery Item</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Item Name"
                value={formData.itemName}
                onChange={(e) => setFormData({...formData, itemName: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Brand"
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                required
              />
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Unit (e.g., 1kg, 500ml)"
                value={formData.unit}
                onChange={(e) => setFormData({...formData, unit: e.target.value})}
                required
              />
            </div>
            
            <div className="price-inputs">
              <h4>Store Prices (₹)</h4>
              <div className="price-grid">
                {stores.map(store => (
                  <div key={store} className="price-input">
                    <label>{store}</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Price"
                      value={formData[store]}
                      onChange={(e) => setFormData({...formData, [store]: e.target.value})}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Add Item
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// Main App Component
function App() {
  const [groceryItems, setGroceryItems] = useState(realisticGroceryData);
  const [filteredItems, setFilteredItems] = useState(realisticGroceryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [userLocation, setUserLocation] = useState('Hyderabad, Telangana');
  const [showAnalytics, setShowAnalytics] = useState(false);

  const categories = ['All', ...Array.from(new Set(groceryItems.map(item => item.category)))];

  useEffect(() => {
    let filtered = groceryItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by store type
    if (showOnlineOnly) {
      filtered = filtered.filter(item => {
        return Object.entries(item.storePrices).some(([store, price]) => 
          item.storeTypes[store] === 'online' && item.availability[store]
        );
      });
    }

    // Sort items
    switch (sortBy) {
      case 'price':
        filtered = filtered.sort((a, b) => {
          const priceA = Math.min(...Object.values(a.storePrices).filter((_, idx) => 
            Object.values(a.availability)[idx]
          ));
          const priceB = Math.min(...Object.values(b.storePrices).filter((_, idx) => 
            Object.values(b.availability)[idx]
          ));
          return priceA - priceB;
        });
        break;
      case 'updated':
        filtered = filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
        break;
      default:
        filtered = filtered.sort((a, b) => a.itemName.localeCompare(b.itemName));
    }

    setFilteredItems(filtered);
  }, [groceryItems, searchTerm, selectedCategory, sortBy, showOnlineOnly]);

  const addNewItem = (newItem) => {
    setGroceryItems(prev => [...prev, newItem]);
  };

  const totalSavings = filteredItems.reduce((total, item) => {
    const prices = Object.values(item.storePrices).filter((_, idx) => 
      Object.values(item.availability)[idx]
    );
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return total + (maxPrice - minPrice);
  }, 0);

  return (
    <div className="app">
      {/* Professional Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="brand">
            <h1>🛒 TrustFetch</h1>
            <p>Smart Hyperlocal Grocery Price Comparison</p>
          </div>
          <div className="location-info">
            <MapPin size={16} />
            <span>{userLocation}</span>
          </div>
        </div>
      </header>

      {/* Professional Controls */}
      <div className="controls-section">
        <div className="search-controls">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search groceries, brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="updated">Recently Updated</option>
          </select>
        </div>
        
        <div className="filter-controls">
          <button
            className={`filter-btn ${showOnlineOnly ? 'active' : ''}`}
            onClick={() => setShowOnlineOnly(!showOnlineOnly)}
          >
            <Truck size={16} />
            {showOnlineOnly ? 'Online Only' : 'All Stores'}
          </button>
          
          <button
            className={`analytics-btn ${showAnalytics ? 'active' : ''}`}
            onClick={() => setShowAnalytics(!showAnalytics)}
          >
            <BarChart3 size={16} />
            Analytics
          </button>
        </div>
      </div>

      {/* Analytics Dashboard */}
      {showAnalytics && (
        <div className="analytics-dashboard">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Items</h3>
              <p className="stat-value">{filteredItems.length}</p>
            </div>
            <div className="stat-card">
              <h3>Potential Savings</h3>
              <p className="stat-value">₹{totalSavings.toFixed(0)}</p>
            </div>
            <div className="stat-card">
              <h3>Best Store</h3>
              <p className="stat-value">Local Kirana</p>
            </div>
            <div className="stat-card">
              <h3>Avg Delivery Time</h3>
              <p className="stat-value">18 mins</p>
            </div>
          </div>
        </div>
      )}

      {/* Add Item Section */}
      <AddItemForm onAddItem={addNewItem} />

      {/* Results Summary */}
      <div className="results-summary">
        <div className="summary-info">
          <h2>Price Comparison Results</h2>
          <p>Showing {filteredItems.length} items • Updated in real-time</p>
          {totalSavings > 0 && (
            <div className="savings-highlight">
              <TrendingDown size={16} color="#4caf50" />
              <span>Save up to ₹{totalSavings.toFixed(0)} by choosing best deals!</span>
            </div>
          )}
        </div>
      </div>

      {/* Professional Items Grid */}
      <div className="items-container">
        {filteredItems.length > 0 ? (
          <div className="items-grid">
            {filteredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-content">
              <h3>No items found</h3>
              <p>Try adjusting your search or filters</p>
              <button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setShowOnlineOnly(false);
              }}>
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Professional Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>TrustFetch</h4>
            <p>India's most trusted hyperlocal grocery price comparison platform</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Real-time price updates</li>
              <li>Local store integration</li>
              <li>Smart deal alerts</li>
              <li>Delivery time comparison</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Supported Stores</h4>
            <ul>
              <li>Online: BigBasket, Blinkit, Zepto, Swiggy</li>
              <li>Offline: Local Kirana, DMart, Reliance, Spencer's</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 TrustFetch - Making grocery shopping smarter • Made with ❤️ for Indian families</p>
        </div>
      </footer>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .app-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1.5rem 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand h1 {
          margin: 0;
          font-size: 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .brand p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          background: #f5f5f5;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }

        .controls-section {
          max-width: 1400px;
          margin: 2rem auto;
          padding: 0 2rem;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .search-controls {
          display: flex;
          gap: 1rem;
          flex: 1;
          min-width: 300px;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 250px;
        }

        .search-box svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-box input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
        }

        .category-filter, .sort-select {
          padding: 0.75rem 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-filter:focus, .sort-select:focus {
          outline: none;
          border-color: #667eea;
        }

        .filter-controls {
          display: flex;
          gap: 1rem;
        }

        .filter-btn, .analytics-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .filter-btn:hover, .analytics-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .filter-btn.active, .analytics-btn.active {
          background: rgba(255, 255, 255, 0.9);
          color: #667eea;
        }

        .analytics-dashboard {
          max-width: 1400px;
          margin: 0 auto 2rem;
          padding: 0 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .stat-card h3 {
          margin: 0 0 0.5rem 0;
          color: #666;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-value {
          margin: 0;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .add-item-section {
          max-width: 1400px;
          margin: 0 auto 2rem;
          padding: 0 2rem;
        }

        .add-item-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border: none;
          border-radius: 15px;
          background: rgba(76, 175, 80, 0.9);
          color: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .add-item-trigger:hover {
          background: #4caf50;
          transform: translateY(-2px);
        }

        .add-item-form {
          margin-top: 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .add-item-form h3 {
          margin: 0 0 1.5rem 0;
          color: #333;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-grid input, .form-grid select {
          padding: 0.75rem 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-grid input:focus, .form-grid select:focus {
          outline: none;
          border-color: #667eea;
        }

        .price-inputs h4 {
          margin: 0 0 1rem 0;
          color: #333;
        }

        .price-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .price-input label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #666;
        }

        .price-input input {
          width: 100%;
          padding: 0.5rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .price-input input:focus {
          outline: none;
          border-color: #667eea;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .cancel-btn, .submit-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .cancel-btn {
          background: #f5f5f5;
          color: #666;
        }

        .cancel-btn:hover {
          background: #e0e0e0;
        }

        .submit-btn {
          background: #667eea;
          color: white;
        }

        .submit-btn:hover {
          background: #5a6fd8;
          transform: translateY(-1px);
        }

        .results-summary {
          max-width: 1400px;
          margin: 0 auto 2rem;
          padding: 0 2rem;
        }

        .summary-info {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 1.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .summary-info h2 {
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .summary-info > p {
          margin: 0 0 1rem 0;
          color: #666;
        }

        .savings-highlight {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4caf50;
          font-weight: 500;
          background: rgba(76, 175, 80, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 10px;
          width: fit-content;
        }

        .items-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem 2rem;
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .item-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .item-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .item-header {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .item-image {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          object-fit: cover;
          margin-right: 1rem;
        }

        .item-details {
          flex: 1;
        }

        .item-name {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
        }

        .item-brand {
          margin: 0 0 0.5rem 0;
          color: #666;
          font-size: 0.9rem;
        }

        .item-category {
          background: #667eea;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .best-deal-summary {
          text-align: right;
        }

        .best-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4caf50;
          margin-bottom: 0.25rem;
        }

        .best-store {
          font-size: 0.8rem;
          color: #666;
          font-weight: 500;
        }

        .prices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          padding: 1.5rem;
        }

        .price-card {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 1rem;
          transition: all 0.3s ease;
          border-top: 3px solid #e0e0e0;
        }

        .price-card.cheapest {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
          border-top-color: #4caf50;
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2);
        }

        .price-card.unavailable {
          opacity: 0.5;
          background: #f5f5f5;
        }

        .store-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .store-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .store-name {
          font-weight: 600;
          font-size: 0.85rem;
          color: #333;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #666;
        }

        .price-section {
          margin-bottom: 0.75rem;
        }

        .price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #333;
          position: relative;
        }

        .best-price {
          color: #4caf50;
        }

        .best-badge {
          position: absolute;
          top: -8px;
          right: -10px;
          background: #4caf50;
          color: white;
          font-size: 0.6rem;
          padding: 0.15rem 0.4rem;
          border-radius: 8px;
          font-weight: 500;
        }

        .delivery-time {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #666;
          margin-top: 0.25rem;
        }

        .unavailable-text {
          font-size: 0.9rem;
          color: #999;
          font-style: italic;
        }

        .deal-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(255, 193, 7, 0.1);
          color: #f57c00;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
        }

        .no-results-content {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          margin: 0 auto;
        }

        .no-results h3 {
          margin: 0 0 1rem 0;
          color: #333;
        }

        .no-results p {
          margin: 0 0 2rem 0;
          color: #666;
        }

        .no-results button {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 15px;
          background: #667eea;
          color: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .no-results button:hover {
          background: #5a6fd8;
          transform: translateY(-2px);
        }

        .app-footer {
          background: rgba(0, 0, 0, 0.9);
          color: white;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 2rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .footer-section h4 {
          margin: 0 0 1rem 0;
          color: #667eea;
          font-size: 1.1rem;
        }

        .footer-section p {
          margin: 0;
          color: #ccc;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          color: #ccc;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding: 1.5rem 2rem;
          text-align: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-bottom p {
          margin: 0;
          color: #999;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .app-header {
            padding: 1rem;
          }

          .header-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .controls-section {
            padding: 0 1rem;
            flex-direction: column;
            align-items: stretch;
          }

          .search-controls {
            flex-direction: column;
          }

          .items-container {
            padding: 0 1rem 2rem;
          }

          .items-grid {
            grid-template-columns: 1fr;
          }

          .prices-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          }

          .footer-content {
            padding: 2rem 1rem 1rem;
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default App;