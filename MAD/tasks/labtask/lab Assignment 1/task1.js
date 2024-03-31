import React from 'react';
import { View, StyleSheet } from 'react-native';

const Chessboard = () => {
  return (
    <View style={styles.board}>
      {/* Row 1 */}
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />

      {/* Row 2 */}
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

      {/* Continue the pattern for remaining rows */}
      {/* Row 3 */}
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

{/* Row 4*/}
<View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

{/* Row 5 */}
<View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

{/* Row 6*/}
<View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

{/* Row 7*/}
<View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

{/* Row 8 */}
<View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    width: 40,
    height: 40,
  },
});

export default Chessboard;
