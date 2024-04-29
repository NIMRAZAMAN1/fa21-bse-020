import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Rectangles = ({ navigation }) => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  const [isChecked8, setChecked8] = useState(false);
  const [isChecked9, setChecked9] = useState(false);
  const [isChecked10, setChecked10] = useState(false);

  const handleCheck1 = () => {
    if (!isChecked1 && !isChecked2) {
      setChecked1(true);
    } else {
      setChecked1(!isChecked1);
      setChecked2(false);
    }
  };

  const handleCheck2 = () => {
    if (!isChecked1 && !isChecked2) {
      setChecked2(true);
    } else {
      setChecked2(!isChecked2);
      setChecked1(false);
    }
  };

  const handleCheck3 = () => {
    if (!isChecked3 && !isChecked4) {
      setChecked3(true);
    } else {
      setChecked3(!isChecked3);
      setChecked4(false);
    }
  };

  const handleCheck4 = () => {
    if (!isChecked3 && !isChecked4) {
      setChecked4(true);
    } else {
      setChecked4(!isChecked4);
      setChecked3(false);
    }
  };

  const handleCheck5 = () => {
    if (!isChecked5 && !isChecked6) {
      setChecked5(true);
    } else {
      setChecked5(!isChecked5);
      setChecked6(false);
    }
  };

  const handleCheck6 = () => {
    if (!isChecked6 && !isChecked5) {
      setChecked6(true);
    } else {
      setChecked6(!isChecked6);
      setChecked5(false);
    }
  };

  const handleCheck7 = () => {
    if (!isChecked7 && !isChecked8) {
      setChecked7(true);
    } else {
      setChecked7(!isChecked7);
      setChecked8(false);
    }
  };

  const handleCheck8 = () => {
    if (!isChecked8 && !isChecked7) {
      setChecked8(true);
    } else {
      setChecked8(!isChecked8);
      setChecked7(false);
    }
  };

  const handleCheck9 = () => {
    if (!isChecked9 && !isChecked10) {
      setChecked9(true);
    } else {
      setChecked9(!isChecked9);
      setChecked10(false);
    }
  };

  const handleCheck10 = () => {
    if (!isChecked10 && !isChecked9) {
      setChecked10(true);
    } else {
      setChecked10(!isChecked10);
      setChecked9(false);
    }
  };

  const handleNext = () => {
    const selectedPrayers = {
      isChecked1,
      isChecked2,
      isChecked3,
      isChecked4,
      isChecked5,
      isChecked6,
      isChecked7,
      isChecked8,
      isChecked9,
      isChecked10,
    };
    navigation.navigate('Streak', { selectedPrayers });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* First Rectangle */}
        <View style={[styles.rectangle, styles.shadow]}>
          <Text style={styles.prayerText}>فجر</Text>
          <Text style={styles.prayerText}>Fajr</Text>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked1}
              onChange={handleCheck1}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/individual.png')} style={styles.Image1} />
          </View>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked2}
              onChange={handleCheck2}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/bajamat.png')} style={styles.Image2} />
          </View>
        </View>

        {/* Second Rectangle */}
        <View style={[styles.rectangle, styles.shadow]}>
          <Text style={styles.prayerText}>ظہر</Text>
          <Text style={styles.prayerText}>Zuhr</Text>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked3}
              onChange={handleCheck3}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/individual.png')} style={styles.Image1} />
          </View>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked4}
              onChange={handleCheck4}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/bajamat.png')} style={styles.Image2} />
          </View>
        </View>

        {/* Third Rectangle */}
        <View style={[styles.rectangle, styles.shadow]}>
          <Text style={styles.prayerText}>عصر</Text>
          <Text style={styles.prayerText}>Asr</Text>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked5}
              onChange={handleCheck5}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/individual.png')} style={styles.Image1} />
          </View>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked6}
              onChange={handleCheck6}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/bajamat.png')} style={styles.Image2} />
          </View>
        </View>

        {/* Fourth Rectangle */}
        <View style={[styles.rectangle, styles.shadow]}>
          <Text style={styles.prayerText}>مغرب</Text>
          <Text style={styles.prayerText}>Maghrib</Text>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked7}
              onChange={handleCheck7}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/individual.png')} style={styles.Image1} />
          </View>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked8}
              onChange={handleCheck8}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/bajamat.png')} style={styles.Image2} />
          </View>
        </View>

        {/* Fifth Rectangle */}
        <View style={[styles.rectangle, styles.shadow]}>
          <Text style={styles.prayerText}>عشاء</Text>
          <Text style={styles.prayerText}>Isha</Text>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked9}
              onChange={handleCheck9}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/individual.png')} style={styles.Image1} />
          </View>
          <View style={styles.checkboxContainer}>
            <input
              type="checkbox"
              value={isChecked10}
              onChange={handleCheck10}
              style={styles.checkbox}
            />
            <Image source={require('../tasks/assets/Images/bajamat.png')} style={styles.Image2} />
          </View>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>StreakScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    paddingBottom: 50, // Adding some padding to the bottom to ensure the last item is visible
  },
  rectangle: {
    width: 330,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    borderBottomColor: 'gray',
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  checkbox: {
    marginHorizontal: 12,
  },
  prayerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  Image1: {
    width: 50,
    height: 60,
  },
  Image2: {
    width: 60,
    height: 60,
  },
  nextButton: {
    backgroundColor: '#00adf5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rectangles;
