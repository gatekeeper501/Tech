import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
  Modal
} from 'react-native';
import imgRepair from './assets/IMG_5717.png';
import imgClamp2 from './assets/IMG_6004.png';
import imgClamp from './assets/IMG_6062.png';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceCategory, setDeviceCategory] = useState('Phone');
  const [deviceModel, setDeviceModel] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { label: '📱 Phone', value: 'Phone' },
    { label: '💻 Tablet', value: 'Tablet' },
    { label: '🖥️ Computer', value: 'Computer' },
    { label: '⚡ Other Electronics', value: 'Other Electronics' }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Quick-select preset models based on category
  const presetModels = {
    Phone: ['iPhone 17 Pro Max', 'iPhone 16 Pro', 'Galaxy S Series'],
    Tablet: ['13-inch iPad Pro', 'iPad Air', 'Galaxy Tab'],
    Computer: ['MacBook Pro', 'Dell Latitude', 'Custom Windows PC'],
    'Other Electronics': ['Trek E-Bike Battery', 'DVR Security System', 'J-Tech HDMI Extender']
  };

  const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwLSk2w_Z2GEfo4kWzUmTg3HyLKvZLBKRf2Nj-XYIEoy4mGlQK2awAg73Hn8-bMujg4/exec';

  const submitForm = async () => {
    if (!name || !email || !deviceModel || !message) {
      alert('Please fill out your Name, Email, Device Model, and Message.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Generate unique service ticket ID (e.g., TC-4921)
    const ticketId = 'TC-' + Math.floor(1000 + Math.random() * 9000);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticketId: ticketId,
          name: name,
          email: email,
          phone: phone,
          deviceCategory: deviceCategory,
          deviceModel: deviceModel,
          message: message
        })
      });

      setName('');
      setEmail('');
      setPhone('');
      setDeviceModel('');
      setMessage('');
      setSubmitStatus(`Success! Service Ticket #${ticketId} created. I will be in touch shortly.`);
      
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
          <Text style={styles.h1}>Cornell Cornelius Jr.</Text>
          <Text style={styles.tagline}>IT Professional | Developer | Tech Repair Specialist</Text>
          <Text style={styles.subTagline}>Bridging the gap between hardware diagnostics and cloud-based software development.</Text>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>💡 About My Work</Text>
          <Text style={styles.paragraph}>
            I am a comprehensive technology specialist serving the Central Arkansas area. With a strong foundation in Computer Information Systems, I diagnose and repair complex device hardware while actively engineering modern software solutions. My goal is to build resilient systems, whether that means rescuing a damaged iPad display or deploying a scalable React Native application to the cloud.
          </Text>
        </View>
      </View>

      {/* Education & Certifications */}
      <View style={[styles.section, styles.sectionAlt]}>
        <View style={styles.container}>
          <Text style={styles.h2}>🎓 Education & Training</Text>
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
          <Text style={styles.h2}>🚀 Software & Cloud Development</Text>
          <Text style={styles.paragraph}>Current programming workflows and technical proficiencies:</Text>
          <View style={styles.card}>
            <Text style={styles.listItem}>
              <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Cloud Hosting:</Text> Deploying static web applications via Microsoft Azure and automated GitHub CI/CD pipelines.
            </Text>
            <Text style={styles.listItem}>
              <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Front-End Architecture:</Text> Building responsive, cross-platform UI components using React Native and Expo.
            </Text>
            <Text style={styles.listItem}>
              <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Automation:</Text> Designing custom iOS shortcut scripts for automated mobile routing and security management.
            </Text>
            <Text style={styles.listItem}>
              <Text style={{fontWeight: 'bold', color: '#38bdf8'}}>Development Environments:</Text> Utilizing GitHub Codespaces, Visual Studio Code, and Anaconda / Python distributions.
            </Text>
          </View>
        </View>
      </View>

      {/* Hardware Repair Services */}
      <View style={[styles.section, styles.sectionAlt]}>
        <View style={styles.container}>
          <Text style={styles.h2}>🛠️ Device Repair & IT Support</Text>
          <Text style={styles.paragraph}>Providing reliable, local hardware repair and system troubleshooting:</Text>
          <View style={styles.card}>
            <Text style={styles.listItem}>• Mobile device digitizer & LCD screen replacement (B-7000 adhesion)</Text>
            <Text style={styles.listItem}>• Smart device and DVR security system network configuration</Text>
            <Text style={styles.listItem}>• Remote desktop administration and help-desk troubleshooting</Text>
            <Text style={styles.listItem}>• Hardware diagnostics, battery swaps, and structural repairs</Text>
          </View>
        </View>
      </View>

      {/* INTERACTIVE REPAIR INTAKE FORM */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>📝 Request a Repair Quote</Text>
          <Text style={styles.paragraph}>Select your device category, choose or type your model, and describe your issue below.</Text>
          
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

            {/* CATEGORY SELECTOR */}
            <Text style={styles.inputLabel}>Device Category *</Text>
            <View style={styles.categoryGrid}>
              {categories.map((cat) => (
                <TouchableOpacity 
                  key={cat.value} 
                  style={[styles.categoryButton, deviceCategory === cat.value && styles.selectedCategory]} 
                  onPress={() => {
                    setDeviceCategory(cat.value);
                    setDeviceModel(''); 
                  }}
                >
                  <Text style={[styles.categoryText, deviceCategory === cat.value && styles.selectedCategoryText]}>
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* SMART MODEL PRESETS */}
            <Text style={styles.inputLabel}>Quick Select Model or Type Below *</Text>
            <View style={styles.presetContainer}>
              {presetModels[deviceCategory].map((model) => (
                <TouchableOpacity 
                  key={model}
                  style={[styles.presetChip, deviceModel === model && styles.selectedPresetChip]}
                  onPress={() => setDeviceModel(model)}
                >
                  <Text style={[styles.presetText, deviceModel === model && styles.selectedPresetText]}>{model}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TextInput 
              style={styles.inputField} 
              placeholder="e.g., iPhone 17 Pro Max, 13-inch iPad Pro..." 
              placeholderTextColor="#6b7280"
              value={deviceModel}
              onChangeText={setDeviceModel}
            />

            <Text style={styles.inputLabel}>Describe the Issue *</Text>
            <TextInput 
              style={[styles.inputField, {height: 100}]} 
              placeholder="Tell me about your cracked screen, power issue, or IT project..." 
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
                <Text style={styles.btnText}>Generate Repair Ticket</Text>
              )}
            </TouchableOpacity>
          </View>

        </View>
      </View>
      
      {/* VISUAL WORKBENCH & PROJECT GALLERY */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.h2}>📸 Workbench & Project Showcase</Text>
          <Text style={styles.paragraph}>A visual look at my recent hardware restorations and cloud engineering work (Tap any photo to expand):</Text>
          
          <View style={styles.galleryGrid}>
            
            {/* Card 1: Disassembly */}
            <TouchableOpacity style={styles.galleryCard} onPress={() => setSelectedImage(imgRepair)}>
              <Image source={imgRepair} style={styles.galleryImage} resizeMode="cover" />
              <View style={styles.galleryContent}>
                <Text style={styles.galleryTitle}>Precision Tablet Disassembly</Text>
                <Text style={styles.galleryDesc}>Careful internal component organization and battery replacement workflows.</Text>
              </View>
            </TouchableOpacity>

            {/* Card 2: Boot Testing */}
            <TouchableOpacity style={styles.galleryCard} onPress={() => setSelectedImage(imgClamp2)}>
              <Image source={imgClamp2} style={styles.galleryImage} resizeMode="cover" />
              <View style={styles.galleryContent}>
                <Text style={styles.galleryTitle}>Hardware Diagnostics & Boot</Text>
                <Text style={styles.galleryDesc}>Thorough post-repair display testing and system validation.</Text>
              </View>
            </TouchableOpacity>

            {/* Card 3: Clamp Curing */}
            <TouchableOpacity style={styles.galleryCard} onPress={() => setSelectedImage(imgClamp)}>
              <Image source={imgClamp} style={styles.galleryImage} resizeMode="cover" />
              <View style={styles.galleryContent}>
                <Text style={styles.galleryTitle}>Structural B-7000 Adhesion & Clamping</Text>
                <Text style={styles.galleryDesc}>Professional screen seating and precision clamp-curing for a secure finish.</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>

      {/* SYSTEM ARCHITECTURE & SKILLS DEMONSTRATED */}
      <View style={[styles.section, styles.sectionAlt]}>
        <View style={styles.container}>
          <Text style={styles.h2}>🏗️ Project Architecture & Engineering Skills</Text>
          <Text style={styles.paragraph}>Building this cloud-based portfolio and dynamic intake system demonstrated the following full-stack competencies:</Text>
          
          <View style={styles.card}>
            <Text style={styles.boldText}>Front-End UI & State Management</Text>
            <Text style={styles.listItem}>• Built a cross-platform responsive interface using React Native and Flexbox grid layouts.</Text>
            <Text style={styles.listItem}>• Managed complex component state (useState) for dynamic form routing and interactive image modals.</Text>
            <Text style={styles.listItem}>• Implemented asynchronous JavaScript (async/await, fetch) to handle non-blocking API network requests.</Text>

            <View style={{marginTop: 15}}></View>

            <Text style={styles.boldText}>Backend Integration & Serverless API</Text>
            <Text style={styles.listItem}>• Engineered a serverless REST webhook using Google Apps Script to securely parse JSON POST payloads.</Text>
            <Text style={styles.listItem}>• Automated data pipelines by routing frontend React Native submissions directly into a live Google Sheets database.</Text>
            
            <View style={{marginTop: 15}}></View>

            <Text style={styles.boldText}>Cloud DevOps & IT Infrastructure</Text>
            <Text style={styles.listItem}>• Deployed a static web application to the cloud utilizing Microsoft Azure Static Web Apps.</Text>
            <Text style={styles.listItem}>• Configured advanced DNS records (MX, TXT, CNAME) to securely route custom domains and navigate enterprise email firewalls.</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Cornell Cornelius Jr. — Benton, Arkansas.</Text>
      </View>

      {/* FULL-SCREEN IMAGE EXPANSION MODAL */}
<Modal
  visible={selectedImage !== null}
  transparent={true}
  animationType="fade"
  onRequestClose={() => setSelectedImage(null)}
>
  <TouchableOpacity
    style={styles.modalOverlay}
    activeOpacity={1}
    onPress={() => setSelectedImage(null)}
    accessibilityRole="button"
    accessibilityLabel="Close enlarged photo"
  >
    <View style={styles.modalContent}>
      {selectedImage !== null && (
        <Image
          source={selectedImage}
          style={styles.fullScreenImage}
          resizeMode="contain"
        />
      )}

      <Text style={styles.closeHint}>
        Tap anywhere to close
      </Text>
    </View>
  </TouchableOpacity>
</Modal>

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
  galleryGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
  galleryCard: { width: '31%', backgroundColor: '#1e293b', borderRadius: 12, borderWidth: 1, borderColor: '#334155', overflow: 'hidden', marginBottom: 15 },
  galleryImage: { width: '100%', 
    height: 120, 
    resizeMode: 'cover',
    backgroundColor: '#0f172a' 
  },
  galleryContent: { padding: 12 },
  galleryTitle: { color: '#38bdf8', fontSize: 14, fontWeight: 'bold', marginBottom: 4 },
  galleryDesc: { color: '#9ca3af', fontSize: 12, lineHeight: 16 },
  sectionAlt: { backgroundColor: '#111827' },
  h2: { fontSize: 26, fontWeight: 'bold', color: '#e5e7eb', marginBottom: 15 },
  paragraph: { fontSize: 16, color: '#e5e7eb', lineHeight: 24, marginBottom: 15 },
  boldText: { fontSize: 16, fontWeight: 'bold', color: '#38bdf8', marginTop: 10, marginBottom: 10 },
  card: { backgroundColor: '#1f2937', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#374151', marginBottom: 20 },
  listItem: { fontSize: 16, color: '#e5e7eb', marginBottom: 8 },
  formCard: { backgroundColor: '#1e293b', padding: 25, borderRadius: 12, borderWidth: 1, borderColor: '#334155' },
  inputLabel: { color: '#e2e8f0', fontSize: 14, fontWeight: '600', marginBottom: 6 },
  inputField: { backgroundColor: '#0f172a', color: '#f8fafc', borderWidth: 1, borderColor: '#334155', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 20 },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 15 },
  categoryButton: { width: '48%', padding: 12, borderWidth: 1, borderColor: '#334155', borderRadius: 8, marginBottom: 10, alignItems: 'center', backgroundColor: '#0f172a' },
  selectedCategory: { backgroundColor: '#38bdf8', borderColor: '#38bdf8' },
  categoryText: { color: '#9ca3af', fontWeight: '500' },
  selectedCategoryText: { color: '#0b1120', fontWeight: 'bold' },
  presetContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  presetChip: { backgroundColor: '#0f172a', borderWidth: 1, borderColor: '#334155', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 15, marginRight: 8, marginBottom: 8 },
  selectedPresetChip: { backgroundColor: '#0ea5e9', borderColor: '#0ea5e9' },
  presetText: { color: '#9ca3af', fontSize: 13 },
  selectedPresetText: { color: '#0b1120', fontWeight: 'bold' },
  successText: { color: '#4ade80', fontSize: 15, marginBottom: 15, textAlign: 'center', fontWeight: 'bold' },
  errorText: { color: '#f87171', fontSize: 15, marginBottom: 15, textAlign: 'center', fontWeight: 'bold' },
  footer: { paddingVertical: 30, borderTopWidth: 1, borderTopColor: '#374151', alignItems: 'center' },
  footerText: { color: '#9ca3af', fontSize: 14 },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(11, 17, 32, 0.95)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20
},
  modalContent: {
    width: '100%',
    maxWidth: 800,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullScreenImage: {
    width: '100%',
    height: '90%',
    borderRadius: 8
  },
  closeHint: {
    color: '#38bdf8',
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600'
  }
});