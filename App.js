import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, TextInput, ActivityIndicator, Alert } from 'react-native';

export default function App() {
  // --- STATE FOR THE FORM ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // --- REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT URL ---
  const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwLSk2w_Z2GEfo4kWzUmTg3HyLKvZLBKRf2Nj-XYIEoy4mGlQK2awAg73Hn8-bMujg4/exec';

  // --- FUNCTION TO SEND DATA TO GOOGLE SHEETS ---
  const submitForm = async () => {
    if (!name || !email || !message) {
      alert('Please fill out your Name, Email, and Message.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses browser security blocks for Google Scripts
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message
        })
      });

      // Clear the form on success
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubmitStatus('Success! Your message has been sent. I will be in touch shortly.');
      
    } catch (error) {
      setSubmitStatus('Oops! Something went wrong. Please email me directly instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView style={styles.body}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.h1}>Cornell Cornelius</Text>
          <Text style={styles.tagline}>IT Professional | Developer | Tech Repair Specialist</Text>
          <Text style={styles.subTagline}>Bridging the gap between hardware diagnostics and cloud-based software development.</Text>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>About My Work</Text>
          <Text style={styles.paragraph}>
            I am a comprehensive technology specialist serving the Central Arkansas area. With a strong foundation in Computer Information Systems, I diagnose and repair complex device hardware while actively engineering modern software solutions. My goal is to build resilient systems, whether that means rescuing a damaged iPad display or deploying a scalable React Native application to the cloud.
          </Text>
        </View>
      </View>

      {/* Education & Certifications */}
      <View style={[styles.section, styles.sectionAlt]}>
        <View style={styles.container}>
          <Text style={styles.h2}>Education & Training</Text>
          <View style={styles.card}>
            <Text style={styles.boldText}>Degrees & Coursework</Text>
            <Text style={styles.listItem}>• Associate of Science in Computer Information Systems</Text>
            <Text style={styles.listItem}>• Computer Science Coursework — University of Arkansas at Little Rock</Text>
            
            <View style={{marginTop: 15}}></View>
            
            <Text style={styles.boldText}>Specialized Training</Text>
            <Text style={styles.listItem}>• ASRI Virtual Data Science Training Program (NSF Funded)</Text>
          </View>
        </View>
      </View>

      {/* Development Projects */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>Software & Cloud Development</Text>
          <Text style={styles.paragraph}>Current programming workflows and technical proficiencies:</Text>
          <View style={styles.card}>
            <Text style={styles.listItem}>• <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Cloud Hosting:</Text> Deploying static web applications via Microsoft Azure and automated GitHub CI/CD pipelines.</Text>
            <Text style={styles.listItem}>• <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Front-End Architecture:</Text> Building responsive, cross-platform UI components using React Native and Expo.</Text>
            <Text style={styles.listItem}>• <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Automation:</Text> Designing custom iOS shortcut scripts for automated mobile routing and security management.</Text>
            <Text style={styles.listItem}>• <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Development Environments:</Text> Utilizing GitHub Codespaces, Visual Studio Code, and Anaconda / Python distributions.</Text>
          </View>
        </View>
      </View>

      {/* Hardware Repair Services */}
      <View style={[styles.section, styles.sectionAlt]}>
        <View style={styles.container}>
          <Text style={styles.h2}>Device Repair & IT Support</Text>
          <Text style={styles.paragraph}>Providing reliable, local hardware repair and system troubleshooting:</Text>
          <View style={styles.card}>
            <Text style={styles.listItem}>• Mobile device digitizer & LCD screen replacement (B-7000 adhesion)</Text>
            <Text style={styles.listItem}>• Smart device and DVR security system network configuration</Text>
            <Text style={styles.listItem}>• Remote desktop administration and help-desk troubleshooting</Text>
            <Text style={styles.listItem}>• Hardware diagnostics, battery swaps, and structural repairs</Text>
          </View>
        </View>
      </View>

      {/* NEW: Interactive Contact Form Section */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>Get in Touch</Text>
          <Text style={styles.paragraph}>Need a repair quote or looking for an IT contractor? Drop me a line below.</Text>
          
          <View style={styles.formCard}>
            <Text style={styles.inputLabel}>Name *</Text>
            <TextInput 
              style={styles.inputField} 
              placeholder="John Doe" 
              placeholderTextColor="#6b7280"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.inputLabel}>Email *</Text>
            <TextInput 
              style={styles.inputField} 
              placeholder="john@example.com" 
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.inputLabel}>Phone Number (Optional)</Text>
            <TextInput 
              style={styles.inputField} 
              placeholder="501-555-0199" 
              placeholderTextColor="#6b7280"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            <Text style={styles.inputLabel}>How can I help you? *</Text>
            <TextInput 
              style={[styles.inputField, {height: 100}]} 
              placeholder="Tell me about your device issue or IT project..." 
              placeholderTextColor="#6b7280"
              multiline={true}
              textAlignVertical="top"
              value={message}
              onChangeText={setMessage}
            />

            {submitStatus ? (
              <Text style={submitStatus.includes('Oops') ? styles.errorText : styles.successText}>
                {submitStatus}
              </Text>
            ) : null}

            <TouchableOpacity 
              style={[styles.btnPrimary, {marginTop: 10}]}
              onPress={submitForm}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#0b1120" />
              ) : (
                <Text style={styles.btnText}>Send Message</Text>
              )}
            </TouchableOpacity>
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

// STYLES
const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: '#0f172a' },
  container: { width: '100%', maxWidth: 960, alignSelf: 'center', paddingHorizontal: 20 },
  header: { paddingTop: 60, paddingBottom: 40, borderBottomWidth: 1, borderBottomColor: '#374151', alignItems: 'center' },
  h1: { fontSize: 36, fontWeight: 'bold', color: '#e5e7eb', textAlign: 'center', marginBottom: 10 },
  tagline: { fontSize: 20, color: '#38bdf8', textAlign: 'center', marginBottom: 5 },
  subTagline: { fontSize: 16, color: '#9ca3af', textAlign: 'center', marginBottom: 25 },
  btnPrimary: { backgroundColor: '#38bdf8', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 30, alignSelf: 'center', width: '100%', alignItems: 'center' },
  btnText: { color: '#0b1120', fontWeight: 'bold', fontSize: 16 },
  section: { paddingVertical: 40 },
  sectionAlt: { backgroundColor: '#111827' },
  h2: { fontSize: 26, fontWeight: 'bold', color: '#e5e7eb', marginBottom: 15 },
  paragraph: { fontSize: 16, color: '#e5e7eb', lineHeight: 24, marginBottom: 15 },
  boldText: { fontSize: 16, fontWeight: 'bold', color: '#38bdf8', marginTop: 10, marginBottom: 10 },
  card: { backgroundColor: '#1f2937', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#374151', marginBottom: 20 },
  listItem: { fontSize: 16, color: '#e5e7eb', marginBottom: 8 },
  formCard: { backgroundColor: '#1e293b', padding: 25, borderRadius: 12, borderWidth: 1, borderColor: '#334155' },
  inputLabel: { color: '#e2e8f0', fontSize: 14, fontWeight: '600', marginBottom: 6 },
  inputField: { backgroundColor: '#0f172a', color: '#f8fafc', borderWidth: 1, borderColor: '#334155', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 20 },
  successText: { color: '#4ade80', fontSize: 15, marginBottom: 15, textAlign: 'center', fontWeight: 'bold' },
  errorText: { color: '#f87171', fontSize: 15, marginBottom: 15, textAlign: 'center', fontWeight: 'bold' },
  footer: { paddingVertical: 30, borderTopWidth: 1, borderTopColor: '#374151', alignItems: 'center' },
  footerText: { color: '#9ca3af', fontSize: 14 }
});