// src/components/Page5.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const LogInPage = () => {
    return (
        <View style={styles.container}>
         {/* Vector */}
    <View style={styles.ellipse}>
        <View style={styles.vector} />
      </View>

    {/* Vector */}
    <View style={styles.vector} /> {/* Invisible vector element */}

      <Text style={styles.createAccountText}>Welcome Back</Text>

        {/* "Sign in to get started" Text */}
        <Text style={styles.signUpText}>Sign in to get started</Text>

         {/* Input Field */}
      <TextInput style={styles.inputField1}
        placeholder="Email"
        placeholderTextColor="#C6C6C6"
      />

         {/* Input Field 2 with "Email" Placeholder */}
      <TextInput
        style={styles.inputField2}
        placeholder="Password"
        placeholderTextColor="#C6C6C6"
      />


      {/* Main Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

         {/* Rectangle 1 */}
      <View style={styles.rectangle1} />

{/* Rectangle 2 */}
<View style={styles.rectangle2} />

{/* "Or" Text */}
<Text style={styles.orText}>Or</Text>

 {/* Google Button */}
 <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../../assets/images/google.png')} // Make sure to provide the correct path for the Google icon
          style={styles.googleImage}
        />
      </TouchableOpacity>

  {/* Text "Have an account" */}
<Text style={styles.DontAccountText}>Don&apos;t have an account</Text>


{/* Text "Sign in" */}
<Text style={styles.signUpText}>Sign Up</Text>


</View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField1: {
    width: 290,
    height: 40,
    position: 'absolute',
    top: 161,
    left: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    opacity: 0, // Set opacity to 0 for now; change to 1 to make it visible
    // Box shadow styles (only for web or specific libraries, otherwise it won't show in mobile)
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
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
  signInButton: {
    width: 290,
    height: 41,
    position: 'absolute',
    top: 287,
    left: 15,
    borderRadius: 3,
    opacity: 0, // Change to 1 to make it visible
    animationTimingFunction: 'ease-out',
    animationDuration: '300ms',
    backgroundColor: '#677DBE', // Example background color; change as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    width: 47,
    height: 14,
    opacity: 0, // Change to 1 to make it visible
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
    backgroundColor: '#FFFFFF', // Background color for the text
  },
  rectangle1: {
    width: 130,
    height: 1,
    position: 'absolute',
    top: 358,
    left: 175,
    opacity: 0, // Change to 1 to make it visible
    backgroundColor: '#D9D9D9',
  },
  rectangle2: {
    width: 130,
    height: 1,
    position: 'absolute',
    top: 358,
    left: 15,
    opacity: 0, // Change to 1 to make it visible
    backgroundColor: '#D9D9D9',
  },
  orText: {
    width: 18,
    height: 17,
    position: 'absolute',
    top: 349,
    left: 151,
    opacity: 0, // Change to 1 to make it visible
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    textAlign: 'left',
    backgroundColor: '#C2C2C2',
  },
  googleButton: {
    width: 290,
    height: 47,
    position: 'absolute',
    top: 387,
    left: 15,
    borderRadius: 7,
    opacity: 0, // Change to 1 to make it visible
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleImage: {
    width: 23,
    height: 22,
    opacity: 0, // Change to 1 to make it visible
    position: 'absolute', // Position the image inside the button
    top: 400,
    left: 148,
  },
  inputField2: {
    width: 290,
    height: 40,
    position: 'absolute',
    top: 222,
    left: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    opacity: 0,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    letterSpacing: -0.05,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px 0px #00000040',
  },

DontAccountText: {
    width: 86,
    height: 12,
    position: 'absolute',
    top: 522,
    left: 97,
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12.19,
    textAlign: 'left',
    backgroundColor: '#C2C2C2',
    opacity: 0, // Set opacity to 0 for now; change to 1 to make it visible
  },
  signUpText: {
    width: 35,
    height: 12,
    position: 'absolute',
    top: 522,
    left: 188,
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12.19,
    textAlign: 'left',
    backgroundColor: '#677DBE',
    opacity: 0, // Set opacity to 0 for now; change to 1 to make it visible
  },


});


export default LogInPage;
