// src/sampleData.js
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

// Sample data for testing
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
    brand: "Basmati",
    itemName: "Rice",
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
  }
];

// Function to add sample data
export const addSampleData = async () => {
  try {
    console.log('Adding sample data...');
    
    for (const item of sampleGroceryData) {
      await addDoc(collection(db, 'groceries'), item);
      console.log(`Added: ${item.brand} ${item.itemName}`);
    }
    
    console.log('All sample data added successfully!');
    alert('Sample data added! 🎉 Refresh to see items.');
    
  } catch (error) {
    console.error('Error adding sample data:', error);
    alert('Error adding sample data. Check console and Firebase config.');
  }
};

export default sampleGroceryData;