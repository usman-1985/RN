// // src/components/Dots.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// const Dots = () => {
//   return (
//     <View style={styles.container}>
//       {/* 1st Dot */}
//       <View style={[styles.dot, styles.dot1]} />

//       {/* 2nd Dot */}
//       <View style={[styles.dot, styles.dot2]} />

//       {/* 3rd Dot */}
//       <View style={[styles.dot, styles.dot3]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute', // Use absolute positioning for container if needed
//     top: 341,            // Set top position for the container
//     left: 153,           // Set left position for the container
//   },
//   dot: {
//     width: 8,                // Set width to 8px
//     height: 8,               // Set height to 8px
//     position: 'absolute',     // Use absolute positioning for dots
//     opacity: 0,              // Set opacity to 0 (invisible)
//     gap: 0,                  // No gap between dots
//   },
//   dot1: {
//     backgroundColor: '#677DBE', // 1st dot color
//     left: 0,                     // Position of the 1st dot
//   },
//   dot2: {
//     backgroundColor: '#D9D9D9', // 2nd dot color
//     left: 12,                    // Position of the 2nd dot (12px from the left)
//   },
//   dot3: {
//     backgroundColor: '#D9D9D9', // 3rd dot color
//     left: 24,                    // Position of the 3rd dot (24px from the left)
//   },
// });

// export default Dots;
