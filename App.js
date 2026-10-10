import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

// Importing your isolated components
import NavBar from './components/NavBar';
import Header from './components/Header';
import RepairForm from './components/RepairForm';
import Gallery from './components/Gallery';
import Architecture from './components/Architecture';

export default function App() {
  // Track which page is currently active (Defaults to 'Home')
  const [activePage, setActivePage] = useState('Home');

  // A helper function to act as our router
  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return (
          <View>
            <View style={styles.section}>
              <View style={styles.container}>
                <Text style={styles.h2}>💡 About My Work</Text>
                <Text style={styles.paragraph}>I am a comprehensive technology specialist serving the Central Arkansas area. With a strong foundation in Computer Information Systems, I diagnose and repair complex device hardware while actively engineering modern software solutions.</Text>
              </View>
            </View>

            <Gallery />

            <View style={[styles.section, styles.sectionAlt]}>
              <View style={styles.container}>
                <Text style={styles.h2}>🎓 Education & Training</Text>
                <View style={styles.card}>
                  <Text style={styles.listItem}>• Associate of Science in Computer Information Systems</Text>
                  <Text style={styles.listItem}>• Foundational Coursework - University of Arkansas, Fayetteville</Text>
                  <Text style={styles.listItem}>• Computer Science Coursework — University of Arkansas at Little Rock</Text>
                </View>
              </View>
            </View>
          </View>
        );
      case 'Repair':
        return <RepairForm />;
      case 'Architecture':
        return <Architecture />; // <-- Uses your new isolated component!
      default:
        return null;
    }
  };

  return (
    <View style={styles.body}>
      
      {/* The Navigation Bar stays pinned at the top */}
      <NavBar activePage={activePage} setActivePage={setActivePage} />

      <ScrollView style={{ flex: 1 }}>
        
        {/* The Header stays visible on every page */}
        <Header />

        {/* This runs our router and injects the correct page content below the header */}
        {renderPage()}

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Cornell Cornelius Jr. — Benton, Arkansas.</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: '#0f172a' },
  container: { width: '100%', maxWidth: 960, alignSelf: 'center', paddingHorizontal: 20 },
  section: { paddingVertical: 40 },
  sectionAlt: { backgroundColor: '#111827' },
  h2: { fontSize: 26, fontWeight: 'bold', color: '#e5e7eb', marginBottom: 15 },
  paragraph: { fontSize: 16, color: '#e5e7eb', lineHeight: 24, marginBottom: 15 },
  card: { backgroundColor: '#1f2937', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#374151', marginBottom: 20 },
  listItem: { fontSize: 16, color: '#e5e7eb', marginBottom: 8 },
  footer: { paddingVertical: 30, borderTopWidth: 1, borderTopColor: '#374151', alignItems: 'center' },
  footerText: { color: '#9ca3af', fontSize: 14 }
});