import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* TOP NAVIGATION BAR */}
      <View style={styles.navBar}>
        <Text style={styles.logoText}>Tech Stuff</Text>
        <View style={styles.navLinks}>
          <Text style={styles.link}>Home</Text>
          <Text style={styles.link}>Semester Roadmap</Text>
          <Text style={styles.link}>Microcontrollers</Text>
          <Text style={styles.link}>Contact Us</Text>
        </View>
      </View>

      {/* MAIN IMAGE */}
      <Image 
        source={{ uri: 'https://picsum.photos/800/400' }} 
        style={styles.heroImage} 
      />

      {/* MAIN HEADLINE */}
      <Text style={styles.headline}>
        Empowering Campus & Community{"\n"}Through Innovation
      </Text>

    </ScrollView>
  );
}

// STYLING
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 20,
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15,
  },
  link: {
    fontSize: 16,
    color: 'black',
  },
  heroImage: {
    width: '100%',
    maxWidth: 800,
    height: 400,
    borderRadius: 10,
    marginBottom: 30,
  },
  headline: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
