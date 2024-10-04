// // src/components/HomeScreenV1.js
// import React from 'react';
// import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Import necessary components
// import Dots from './Dot'; // Import the Dots component

// const HomeScreenV1 = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/images/boy.png')} // Path to your image
//         style={styles.image}
//       />
//       <Dots /> {/* Include the Dots component here */}

//       {/* Main Title Text */}
//       <Text style={styles.text}>Manage Your Tasks Easily</Text>

//       {/* Description Text */}
//       <Text style={styles.description}>
//         Easily track and manage your tasks based on location.
//         Never forget important things to do when you’re on the go!
//       </Text>

//       {/* Vector */}
//       <View style={styles.vector} /> {/* Invisible vector element */}

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
//   image: {
//     width: 319,
//     height: 298,
//     resizeMode: 'contain',
//   },
//   vector: {
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
//     fontFamily: 'Roboto', // Ensure Roboto is linked in your project
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

// export default HomeScreenV1;
