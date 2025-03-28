import React, { createContext, useContext, useState, useEffect } from 'react';

// Context erstellen
const ProductContext = createContext();

// Provider-Komponente
export function ProductProvider({ children }) {
  // Zustände für Produkte und Filter
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    sortBy: 'newest'
  });
  
  // Produkte laden (hier als Beispiel, in Produktion würde man eine API aufrufen)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // In Produktion: API-Aufruf
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Dummy-Daten für Beispiel
        const dummyProducts = [
          {
            id: 1,
            name: 'Vintage Sessel, 1960er Jahre',
            category: 'vintage',
            price: 349,
            image: '/images/products/vintage-chair.jpg',
            description: 'Handverlesener Vintage-Sessel aus den 1960er Jahren.'
          },
          // Weitere Produkte...
        ];
        
        // Kategorien extrahieren
        const uniqueCategories = [...new Set(dummyProducts.map(p => p.category))];
        
        setProducts(dummyProducts);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        setError('Fehler beim Laden der Produkte');
        setLoading(false);
        console.error(err);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Filter anwenden
  const filteredProducts = products.filter(product => {
    // Kategorie-Filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    // Preis-Filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sortierung anwenden
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'nameAsc':
        return a.name.localeCompare(b.name);
      case 'nameDesc':
        return b.name.localeCompare(a.name);
      default: // newest
        return b.id - a.id;
    }
  });
  
  // Filter-Funktionen
  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };
  
  const resetFilters = () => {
    setFilters({
      category: '',
      priceRange: [0, 1000],
      sortBy: 'newest'
    });
  };
  
  // Context-Wert
  const value = {
    // Daten
    products: sortedProducts,
    allProducts: products,
    categories,
    filters,
    loading,
    error,
    
    // Funktionen
    updateFilters,
    resetFilters
  };
  
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

// Custom Hook für einfachen Zugriff
export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}