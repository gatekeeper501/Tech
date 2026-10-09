import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.h1}>Cornell Cornelius Jr.</Text>
        <Text style={styles.tagline}>IT Professional | Developer | Tech Repair Specialist</Text>
        <Text style={styles.subTagline}>Bridging the gap between hardware diagnostics and cloud-based software development.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', maxWidth: 960, alignSelf: 'center', paddingHorizontal: 20 },
  header: { paddingTop: 60, paddingBottom: 40, borderBottomWidth: 1, borderBottomColor: '#374151', alignItems: 'center' },
  h1: { fontSize: 36, fontWeight: 'bold', color: '#e5e7eb', textAlign: 'center', marginBottom: 10 },
  tagline: { fontSize: 20, color: '#38bdf8', textAlign: 'center', marginBottom: 5 },
  subTagline: { fontSize: 16, color: '#9ca3af', textAlign: 'center', marginBottom: 25 }
});