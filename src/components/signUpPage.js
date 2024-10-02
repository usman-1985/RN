// src/components/Page4.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native';

const SignUpPage = () => {
  return (
    <View style={styles.container}>

    {/* Vector */}
    <View style={styles.ellipse}>
        <View style={styles.vector} />
      </View>

    {/* Vector */}
    <View style={styles.vector} /> {/* Invisible vector element */}



      {/* "Create Account" Text */}
      <Text style={styles.createAccountText}>Create Account</Text>

      {/* "Sign up to get started" Text */}
      <Text style={styles.signUpText}>Sign up to get started</Text>

      {/* Input Field 1 with "Full Name" Placeholder */}
      <TextInput
        style={styles.inputField1}
        placeholder="Full Name"
        placeholderTextColor="#C6C6C6"
      />

      {/* Input Field 2 with "Email" Placeholder */}
      <TextInput
        style={styles.inputField2}
        placeholder="Email"
        placeholderTextColor="#C6C6C6"
      />

      {/* Input Field 3 with "Password" Placeholder */}
      <TextInput
        style={styles.inputField3}
        placeholder="Password"
        placeholderTextColor="#C6C6C6"
        secureTextEntry={true}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>


        {/* Rectangle 1 */}
      <View style={styles.rectangle1} />

      {/* Rectangle 2 */}
      <View style={styles.rectangle2} />

      {/* Text "Or" */}
      <Text style={styles.orText}>Or</Text>

    {/* Google Button */}
    <View style={styles.googleButton}>
        {/* Google Image */}
        <Image
          source={require('../../assets/images/google.png')} // Change the path to your Google icon image
          style={styles.googleIcon}
        />
      </View>

       {/* Text "Have an account" */}
      <Text style={styles.haveAccountText}>Have an account</Text>


      {/* Text "Sign in" */}
      <Text style={styles.signInText}>Sign in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    position: 'relative',
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
  createAccountText: {
    width: 210,
    height: 35,
    position: 'absolute',
    top: 78,
    left: 15,
    opacity: 0,
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 35.16,
    textAlign: 'left',
    backgroundColor: '#677DBE',
    color: '#FFFFFF',
  },
  signUpText: {
    width: 210,
    height: 35,
    position: 'absolute',
    top: 113,
    left: 15,
    opacity: 0,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 35.16,
    textAlign: 'left',
    backgroundColor: '#677DBE',
    color: '#FFFFFF',
  },
  inputField1: {
    width: 290,
    height: 40,
    position: 'absolute',
    top: 160,
    left: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#677DBE',
    opacity: 0,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    letterSpacing: -0.05,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px 0px #677DBE',
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
  inputField3: {
    width: 290,
    height: 40,
    position: 'absolute',
    top: 283,
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
  signUpButton: {
    width: 290,
    height: 41,
    position: 'absolute',
    top: 348,
    left: 15,
    borderRadius: 3,
    backgroundColor: '#677DBE',
    opacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  rectangle1: {
    width: 130,
    height: 1,
    position: 'absolute',
    top: 419,
    left: 175,
    backgroundColor: '#D9D9D9',
    opacity: 0,
  },
  rectangle2: {
    width: 130,
    height: 1,
    position: 'absolute',
    top: 419,
    left: 15,
    backgroundColor: '#D9D9D9',
    opacity: 0,
  },
  orText: {
    width: 18,
    height: 17,
    position: 'absolute',
    top: 410,
    left: 151,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    textAlign: 'left',
    backgroundColor: '#C2C2C2',
    opacity: 0,
  },
  googleButton: {
    width: 290,
    height: 47,
    position: 'absolute',
    top: 448,
    left: 15,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // Note: Use this for web; for React Native, you might want to explore alternatives
    opacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 23,
    height: 22,
    opacity: 0,
  },
  haveAccountText: {
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
  signInText: {
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

export default SignUpPage;
