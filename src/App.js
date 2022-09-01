import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SortingVisualizer></SortingVisualizer>
      <Footer />
    </div>
  );
}

export default App;
