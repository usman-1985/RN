import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Import necessary components
import Dots from './Dot'; // Import the Dots component

const homeScreenV3 = () => {
  return (
    <View style={styles.container}>
      {/* Vector */}
      <View style={styles.ellipse}>
        <View style={styles.vector} />
      </View>

      <Image
        source={require('../../assets/images/man.png')} // Change the path to your image
        style={styles.image}
      />
      <Dots /> {/* Include the Dots component here */}

      {/* Main Title Text */}
      <Text style={styles.text}>Set Location-Based Reminders</Text>

      {/* Description Text */}
      <Text style={styles.description}>
        Create tasks linked to specific places. Get a notification
        when you arrive at your set location
      </Text>

      {/* Vector */}
      <View style={styles.vector} /> {/* Invisible vector element */}

        {/* "Get Started" Button */}
        <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  ellipse: {
    width: 33, // Ellipse width
    height: 33, // Ellipse height
    position: 'absolute',
    top: 11, // Ellipse top position
    left: 15, // Ellipse left position
    backgroundColor: '#D9D9D966', // Ellipse background color
    borderRadius: 16.5, // To make it a circle
    opacity: 0, // Set opacity to 0 for invisibility
    justifyContent: 'center', // Center the vector within the ellipse
    alignItems: 'center', // Center the vector within the ellipse
  },
  vector: {
    width: 6, // Vector width
    height: 13, // Vector height
    borderTopWidth: 1.5, // Top border width
    borderColor: '#677DBE', // Border color
    opacity: 0, // Set opacity to 0 for invisibility
    transform: [{ rotate: '-180deg' }], // Rotate the vector
  },
  image: {
    width: 324, // Updated width
    height: 312, // Updated height
    position: 'absolute', // Position the image absolutely
    top: 17, // Set the updated top position
    left: -1, // Set the updated left position
    resizeMode: 'contain', // Ensure the image maintains aspect ratio
    opacity: 0, // Set opacity to 0 to make it invisible
  },
  button: {
    width: 104,
    height: 28,
    position: 'absolute',
    top: 499,
    left: 201,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#000000',
    opacity: 0, // Set opacity to 0 for invisibility
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
    opacity: 0, // Set opacity to 0 for invisibility
  },
  text: {
    width: 235,
    height: 23,
    position: 'absolute',
    top: 363,
    left: 45,
    opacity: 1, // Set opacity to 1 to make text visible
    fontFamily: 'Roboto', // Ensure Roboto is linked in your project
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 23.44,
    textAlign: 'left',
  },
  description: {
    width: 260,
    height: 28,
    opacity: 1, // Set opacity to 1 to make text visible
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
    position: 'absolute',
    top: 398,
    left: 28,
  },
  getStartedButton: {
    width: 202, // Button width
    height: 41, // Button height
    position: 'absolute',
    top: 492, // Button top position
    left: 59, // Button left position
    borderRadius: 41, // Border radius to make rounded corner
    backgroundColor: '#677DBE', // Button background color
    opacity: 0, // Set opacity to 0 for invisibility
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  getStartedText: {
    width: 77, // Text width
    height: 14, // Text height
    opacity: 0, // Set opacity to 0 for invisibility
    fontFamily: 'Roboto',
    fontSize: 15, // Set the font size to 15px
    fontWeight: '500', // Set the font weight to 500
    lineHeight: 14, // Line height
    textAlign: 'center',
    color: '#FFFFFF', // Text color
    position: 'absolute',
    top: 506, // Set the top position for the text
    left: 122, // Set the left position for the text
  },

});

export default homeScreenV3;
