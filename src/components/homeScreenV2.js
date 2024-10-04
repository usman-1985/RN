// // src/components/Page2.js
// import React from 'react';
// import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Import necessary components
// import Dots from './Dot'; // Import the Dots component

// const HomeScreenV2 = () => {
//   return (
//     <View style={styles.container}>
//       {/* Vector */}
//       <View style={styles.ellipse}>
//         <View style={styles.vectorTop} /> {/* Renamed to vectorTop */}
//       </View>

//       <Image
//         source={require('../../assets/images/building.png')} // Change the path to your image
//         style={styles.image}
//       />
//       <Dots /> {/* Include the Dots component here */}

//       {/* Main Title Text */}
//       <Text style={styles.text}>Set Location-Based Reminders</Text>

//       {/* Description Text */}
//       <Text style={styles.description}>
//         Create tasks linked to specific places. Get a notification
//         when you arrive at your set location
//       </Text>

//       {/* Invisible vector element */}
//       <View style={styles.vectorBottom} /> {/* Renamed to vectorBottom */}

//       {/* Button */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Next</Text> {/* Button text */}
//       </TouchableOpacity>

//       {/* Skip Button */}
//       <TouchableOpacity style={styles.skipButton}>
//         <Text style={styles.skipText}>Skip</Text> {/* The text inside the button */}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: 32,
//     backgroundColor: '#fff',
//   },
//   ellipse: {
//     width: 33, // Ellipse width
//     height: 33, // Ellipse height
//     position: 'absolute',
//     top: 11, // Ellipse top position
//     left: 15, // Ellipse left position
//     backgroundColor: '#D9D9D966', // Ellipse background color
//     borderRadius: 16.5, // To make it a circle
//     opacity: 0, // Set opacity to 0 for invisibility
//     justifyContent: 'center', // Center the vector within the ellipse
//     alignItems: 'center', // Center the vector within the ellipse
//   },
//   vectorTop: {
//     width: 6, // Vector width
//     height: 13, // Vector height
//     borderTopWidth: 1.5, // Top border width
//     borderColor: '#677DBE', // Border color
//     opacity: 0, // Set opacity to 0 for invisibility
//     transform: [{ rotate: '-180deg' }], // Rotate the vector
//   },
//   image: {
//     width: 280, // Set the width to 280px
//     height: 294, // Set the height to 294px
//     position: 'absolute', // Position the image absolutely
//     top: 29, // Set the top position
//     left: 21, // Set the left position
//     resizeMode: 'contain', // Ensure the image maintains aspect ratio
//     opacity: 0, // Set opacity to 0 to make it invisible
//   },
//   vectorBottom: { // Renamed to vectorBottom
//     width: 3,
//     height: 6,
//     position: 'absolute',
//     top: 511,
//     left: 268,
//     borderWidth: 0.5,
//     borderColor: '#677DBE',
//     opacity: 0, // Set opacity to 0 for invisibility
//   },
//   button: {
//     width: 104,
//     height: 28,
//     position: 'absolute',
//     top: 499,
//     left: 201,
//     borderRadius: 2,
//     borderWidth: 0.5,
//     borderColor: '#000000',
//     opacity: 0, // Set opacity to 0 for invisibility
//     justifyContent: 'center', // Center the text vertically
//     alignItems: 'center', // Center the text horizontally
//   },
//   buttonText: {
//     fontFamily: 'Roboto',
//     fontSize: 10,
//     fontWeight: '500',
//     lineHeight: 14,
//     textAlign: 'center',
//     opacity: 0, // Set opacity to 0 for invisibility
//   },
//   text: {
//     width: 235,
//     height: 23,
//     position: 'absolute',
//     top: 363,
//     left: 45,
//     opacity: 1, // Set opacity to 1 to make text visible
//     fontFamily: 'Roboto', // Ensure Roboto is linked in your project
//     fontSize: 20,
//     fontWeight: '800',
//     lineHeight: 23.44,
//     textAlign: 'left',
//   },
//   description: {
//     width: 260,
//     height: 28,
//     opacity: 1, // Set opacity to 1 to make text visible
//     fontFamily: 'Roboto',
//     fontSize: 10,
//     fontWeight: '500',
//     lineHeight: 14,
//     textAlign: 'center',
//     position: 'absolute',
//     top: 398,
//     left: 28,
//   },
//   skipButton: {
//     width: 104,
//     height: 28,
//     position: 'absolute',
//     top: 499,
//     left: 15,
//     borderRadius: 2,
//     borderWidth: 0.5,
//     borderColor: '#0000004D',
//     opacity: 0, // Set opacity to 0 for invisibility
//     justifyContent: 'center', // Center the text vertically
//     alignItems: 'center', // Center the text horizontally
//   },
// });

// export default HomeScreenV2;
