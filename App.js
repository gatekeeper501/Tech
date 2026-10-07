import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.body}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.h1}>Cornell Cornelius</Text>
          <Text style={styles.tagline}>Tech Repair Specialist & IT Professional</Text>
          <Text style={styles.subTagline}>Device repair, IT support, and programming growth based in Bryant, Arkansas.</Text>
          <TouchableOpacity 
            style={styles.btnPrimary}
            onPress={() => Linking.openURL('mailto:corneliuscornell@gmail.com')}
          >
            <Text style={styles.btnText}>Book a Repair / Contact Me</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>Hi, I’m Cornell Cornelius</Text>
          <Text style={styles.paragraph}>
            I’m an IT support specialist and device repair technician serving Bryant, Little Rock, and surrounding areas. 
            I help people fix their phones, tablets, laptops, and smart devices — and I’m building my programming career 
            through hands-on projects and continuous learning.
          </Text>
        </View>
      </View>

      {/* Services Section (Card Style) */}
      <View style={[styles.section, styles.sectionAlt]}>
        <View style={styles.container}>
          <Text style={styles.h2}>Device Repair Services</Text>
          <Text style={styles.paragraph}>I offer fast, reliable repair services for everyday tech:</Text>
          
          <View style={styles.card}>
            <Text style={styles.listItem}>• Phone screen replacement</Text>
            <Text style={styles.listItem}>• Battery replacement</Text>
            <Text style={styles.listItem}>• Tablet repair</Text>
            <Text style={styles.listItem}>• Smart device troubleshooting</Text>
            <Text style={styles.listItem}>• Basic laptop diagnostics</Text>
          </View>
          
          <Text style={styles.boldText}>Affordable pricing. Quick turnaround. Local service.</Text>
          <Text style={styles.paragraph}>📞 Call or Email: 501-507-0413</Text>
          <Text style={styles.paragraph}>📍 Location: Bryant, Arkansas</Text>
        </View>
      </View>

      {/* IT Support Section */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>IT Support & Technical Skills</Text>
          <Text style={styles.paragraph}>Alongside device repair, I bring experience in:</Text>
          <View style={styles.card}>
            <Text style={styles.listItem}>• Troubleshooting campus technology</Text>
            <Text style={styles.listItem}>• Workflow optimization & Automation</Text>
            <Text style={styles.listItem}>• Cloud services & GitHub integration</Text>
            <Text style={styles.listItem}>• React Native & Web Development</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Cornell Cornelius — Bryant, Arkansas.</Text>
      </View>

    </ScrollView>
  );
}

// Translated CSS to React Native StyleSheet
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    width: '100%',
    maxWidth: 960,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    alignItems: 'center',
  },
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 20,
    color: '#38bdf8',
    textAlign: 'center',
    marginBottom: 5,
  },
  subTagline: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 25,
  },
  btnPrimary: {
    backgroundColor: '#38bdf8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignSelf: 'center',
  },
  btnText: {
    color: '#0b1120',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    paddingVertical: 40,
  },
  sectionAlt: {
    backgroundColor: '#111827',
  },
  h2: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e5e7eb',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#e5e7eb',
    lineHeight: 24,
    marginBottom: 15,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1f2937',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#374151',
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    color: '#e5e7eb',
    marginBottom: 8,
  },
  footer: {
    paddingVertical: 30,
    borderTopWidth: 1,
    borderTopColor: '#374151',
    alignItems: 'center',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 14,
  }
});