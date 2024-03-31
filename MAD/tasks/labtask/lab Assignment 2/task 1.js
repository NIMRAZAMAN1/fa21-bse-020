import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, ScrollView } from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [amountSaved, setAmountSaved] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const discountAmount = (price * discount) / 100;
      const finalPrice = price - discountAmount;
      setFinalPrice(finalPrice.toFixed(2));
      setAmountSaved(discountAmount.toFixed(2));
      const calculation = `${price} - ${discount}% = ${finalPrice.toFixed(2)}`;
      setHistory([...history, calculation]);
    } else {
      setFinalPrice('');
      setAmountSaved('');
    }
  };

  const clearInputs = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setFinalPrice('');
    setAmountSaved('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Original Price"
        value={originalPrice}
        onChangeText={text => setOriginalPrice(text.replace(/[^0-9]/g, ''))}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Discount Percentage"
        value={discountPercentage}
        onChangeText={text => setDiscountPercentage(text.replace(/[^0-9]/g, ''))}
      />
      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateDiscount} />
        <Button title="Clear" onPress={clearInputs} />
        <Button title="View History" onPress={() => setModalVisible(true)} />
      </View>
      <Text style={styles.resultText}>You Save: ${amountSaved}</Text>
      <Text style={styles.resultText}>Final Price: ${finalPrice}</Text>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {history.map((item, index) => (
              <Text key={index} style={styles.historyItem}>{item}</Text>
            ))}
          </ScrollView>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    maxHeight: '80%',
    width: '80%',
    borderRadius: 10,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DiscountCalculatorApp;
