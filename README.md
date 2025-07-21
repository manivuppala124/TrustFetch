# 🛒 TrustFetch - Hyperlocal Grocery Price Comparison

**Save Money, Shop Smart** - Compare grocery prices across online & offline stores in your local area.

[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.0-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🌟 Features

### ✨ Core Functionality
- **🔍 Real-time Price Comparison** - Compare prices across BigBasket, Blinkit, DMart, Local Kirana & Reliance Fresh
- **📍 Location-based Search** - Enter pincode for hyperlocal store availability
- **🏷️ Deal Tracking** - Special offers, discounts & bulk deals from various stores  
- **🌐 Online/Offline Filter** - Toggle between online delivery & physical store options
- **📊 Smart Sorting** - Sort by lowest price to find best deals instantly
- **📱 Responsive Design** - Works seamlessly on mobile, tablet & desktop

### 🎯 Smart Features
- **🔄 Live Data Sync** - Real-time updates via Firebase Firestore
- **🎨 Visual Price Indicators** - Green highlighting for cheapest options
- **📈 Price Analytics** - Track price trends across different stores
- **🏪 Store Type Classification** - Clear distinction between online/offline availability
- **⚡ Fast Search** - Instant filtering by product name or brand

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account (free tier works)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/trustfetch.git
   cd trustfetch
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Firebase Setup**
   - Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Firestore Database
   - Copy your Firebase config from Project Settings
   - Update `src/firebase.js` with your credentials

4. **Start development server**
   ```bash
   npm start
   # or 
   yarn start
   ```

5. **Load sample data**
   - Click "🎯 Add Sample Data" button in the app
   - Or manually add price data using the form

## 🏗️ Project Structure

```
trustfetch/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── firebase.js         # Firebase configuration
│   └── index.js           # React app entry point
├── package.json
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **CSS3** - Responsive design with Flexbox/Grid
- **JavaScript ES6+** - Modern JavaScript features

### Backend & Database  
- **Firebase Firestore** - NoSQL real-time database
- **Firebase Hosting** - Static site hosting (optional)

### Key Libraries
- `firebase` - Firebase SDK for web
- `react` - Core React library
- `react-dom` - React DOM rendering

## 📊 Data Structure

### Grocery Item Schema
```javascript
{
  itemName: "Milk",
  brand: "Amul", 
  unit: "1L",
  storePrices: {
    "BigBasket": 55,
    "Blinkit": 53,
    "DMart": 52,
    "Local Kirana": 48,
    "Reliance Fresh": 54
  },
  storeTypes: {
    "BigBasket": "online",
    "Blinkit": "online", 
    "DMart": "offline",
    "Local Kirana": "offline",
    "Reliance Fresh": "offline"
  },
  deals: {
    "Local Kirana": "Buy 2 Get 5% Off",
    "DMart": "Weekend Special"
  },
  lastUpdated: "2024-01-15T10:30:00Z"
}
```

## 🎨 Key Components

### 1. PriceTable Component
- Displays comparative pricing across all stores
- Highlights best deals with visual indicators
- Shows special offers and discount information
- Responsive table design for mobile devices

### 2. AddItemForm Component
- User-friendly form for adding new price data
- Input validation and error handling
- Real-time database updates
- Support for multiple stores and deal information

### 3. Filter Controls
- Search by item name or brand
- Location-based filtering via pincode
- Price sorting (low to high)
- Store type filtering (online/offline only)

## 🔥 Firebase Configuration

1. **Create Firebase Project**
   ```bash
   # Install Firebase CLI
   npm install -g firebase-tools
   
   # Login to Firebase
   firebase login
   
   # Initialize project
   firebase init
   ```

2. **Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true; // For development only
       }
     }
   }
   ```

3. **Environment Variables** (Optional)
   ```bash
   # Create .env file
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   ```

## 🚀 Deployment

### Deploy to Firebase Hosting
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

### Deploy to Netlify
```bash
# Build the project  
npm run build

# Drag and drop 'build' folder to Netlify
# Or connect GitHub repo for automatic deploys
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📈 Features Roadmap

### Phase 1 ✅ (Current)
- [x] Basic price comparison
- [x] Real-time data sync
- [x] Search and filtering
- [x] Mobile responsive design
- [x] Deal tracking

### Phase 2 🚧 (In Progress)
- [ ] User authentication
- [ ] Price history tracking
- [ ] Push notifications for deals
- [ ] Advanced analytics dashboard
- [ ] Store inventory tracking

### Phase 3 🔮 (Planned)
- [ ] Machine learning price predictions
- [ ] Grocery list management
- [ ] Social sharing features
- [ ] Store ratings & reviews
- [ ] API for third-party integrations

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines
- Follow React best practices and hooks patterns
- Maintain responsive design principles
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test on multiple devices/browsers

### Areas for Contribution
- 🐛 Bug fixes and improvements
- 🎨 UI/UX enhancements
- 📱 Mobile optimization
- 🔍 Search algorithm improvements
- 📊 Data visualization features
- 🌍 Internationalization support

## 🐛 Known Issues & Troubleshooting

### Common Issues
1. **Firebase Connection Error**
   - Ensure Firebase config is correct in `src/firebase.js`
   - Check Firestore rules allow read/write access
   - Verify project ID matches your Firebase project

2. **Data Not Loading**
   - Check browser console for errors
   - Ensure internet connection is stable
   - Try refreshing the page

3. **Mobile Display Issues**
   - Clear browser cache
   - Check if using latest browser version
   - Report specific device/browser combination

### Performance Optimization
- Uses React.memo for component optimization
- Implements efficient re-rendering strategies
- Firebase real-time listeners properly managed
- Responsive images and lazy loading

## 📊 Analytics & Metrics

The app tracks several key metrics:
- **Price Comparison Accuracy** - Real-time price verification
- **User Engagement** - Search patterns and popular items
- **Deal Effectiveness** - Most popular offers and discounts
- **Store Performance** - Competitive pricing analysis

## 🔒 Privacy & Security

- **No Personal Data Collection** - Only stores grocery price information
- **Firebase Security Rules** - Controlled database access
- **HTTPS Encryption** - Secure data transmission
- **Local Storage** - User preferences stored locally

## 📞 Support & Feedback

### Get Help
- 📧 Email: support@trustfetch.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/trustfetch/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/trustfetch/discussions)

### Share Feedback
Love TrustFetch? [**Give Feedback & Vote if You'd Use It**](https://docs.google.com/forms/d/e/1FAIpQLSfBHP7vgfxlC5Q6qDyBTEXxIN0sTA80ahHtDWcDQLtBzqBjtQ/viewform?usp=header) 🙌

Your feedback helps us improve and build features that matter most to you!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Community** - For the amazing framework and ecosystem
- **Firebase Team** - For the robust backend infrastructure  
- **Local Store Owners** - For inspiring hyperlocal commerce solutions
- **Beta Testers** - For valuable feedback and bug reports
- **Open Source Contributors** - For making this project better

## 🌟 Star History

⭐ If TrustFetch helped you save money on groceries, please star this repo!

---

<div align="center">
  <h3>💡 Hyperlocal Grocery Price Comparison</h3>
  <p>Made with ❤️ for local communities</p>
  <p><strong>Jai Shree Ram 🙏🏻</strong></p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#support--feedback">Support</a>
  </p>
</div>
