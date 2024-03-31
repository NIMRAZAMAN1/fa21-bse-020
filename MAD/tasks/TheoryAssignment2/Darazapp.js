import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import the icons from the library

// Home Page Component
const HomePage = ({ navigation }) => {
  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const handleWishlistPress = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo */}
        <Text style={styles.logo}>Daraz</Text>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          {/* Implement your search functionality */}
          <Text>Search Bar</Text>
        </View>
        {/* Icons */}
        <View style={styles.icons}>
          {/* Implement your icon components */}
          <TouchableOpacity onPress={handleCartPress}>
            <Text>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWishlistPress}>
            <Text>Wishlist</Text>
          </TouchableOpacity>
          {/* Add more icons as needed */}
        </View>
      </View>

      {/* Carousel Section */}
      <View style={styles.carousel}>
        {/* Implement your carousel component */}
        <Text>Carousel</Text>
      </View>

      {/* Product Categories */}
      <View style={styles.categories}>
        {/* Implement your product categories component */}
        <Text>Product Categories</Text>
      </View>

      {/* Featured Products Section */}
      <View style={styles.featured}>
        {/* Implement your featured products component */}
        <Text>Featured Products</Text>
      </View>

      {/* Deals of the Day Section */}
      <View style={styles.deals}>
        {/* Implement your deals section */}
        <Text>Deals of the Day</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        {/* Implement your footer component */}
        <Text>Contact Us | About Us | Terms & Conditions</Text>
      </View>
    </ScrollView>
  );
};

// Product Details Page Component
const ProductDetailsPage = ({ navigation }) => {
  const handleAddToCart = () => {
    // Implement add to cart functionality
    alert('Product added to cart!');
  };

  const handleBuyNow = () => {
    // Implement buy now functionality
    alert('Redirecting to checkout...');
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo */}
        <Text style={styles.logo}>Daraz</Text>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          {/* Implement your search functionality */}
          <Text>Search Bar</Text>
        </View>
        {/* Icons */}
        <View style={styles.icons}>
          {/* Cart Icon */}
          <TouchableOpacity onPress={handleCartPress}>
            <Ionicons name="ios-cart" size={24} color="black" />
          </TouchableOpacity>
          {/* Wishlist Icon */}
          <TouchableOpacity onPress={handleWishlistPress}>
            <Ionicons name="ios-heart" size={24} color="black" />
          </TouchableOpacity>
          {/* Add more icons as needed */}
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // Header styles
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    // Logo styles
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    // Search bar styles
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icons: {
    // Icons styles
    flexDirection: 'row',
  },
  carousel: {
    // Carousel styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categories: {
    // Categories styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  featured: {
    // Featured products styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deals: {
    // Deals section styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    // Footer styles
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  productDetails: {
    // Product details styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  specifications: {
    // Specifications styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  reviews: {
    // Reviews styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  related: {
    // Related products styles
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export { HomePage, ProductDetailsPage };
