import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

// Import your newly created components!
import Header from './components/Header';
import RepairForm from './components/RepairForm';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <ScrollView style={styles.body}>
      
      {/* 1. Header Component */}
      <Header />

      {/* 2. Static Text Content (Can also be moved to components later!) */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>💡 About My Work</Text>
          <Text style={styles.paragraph}>I am a comprehensive technology specialist serving the Central Arkansas area. With a strong foundation in Computer Information Systems, I diagnose and repair complex device hardware while actively engineering modern software solutions.</Text>
        </View>
      </View>

      <View style={[styles.section, styles.sectionAlt]}>
        <View style={styles.container}>
          <Text style={styles.h2}>🎓 Education & Training</Text>
          <View style={styles.card}>
            <Text style={styles.listItem}>• Associate of Science in Computer Information Systems</Text>
            <Text style={styles.listItem}>• Computer Science Coursework — University of Arkansas at Little Rock</Text>
          </View>
        </View>
      </View>

      {/* 3. Repair Form Component */}
      <RepairForm />

      {/* 4. Image Gallery Component */}
      <Gallery />

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Cornell Cornelius Jr. — Benton, Arkansas.</Text>
      </View>

    </ScrollView>
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