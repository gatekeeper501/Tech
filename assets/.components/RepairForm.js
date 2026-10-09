import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function RepairForm() {
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
    const ticketId = 'TC-' + Math.floor(1000 + Math.random() * 9000);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketId, name, email, phone, deviceCategory, deviceModel, message })
      });
      setName(''); setEmail(''); setPhone(''); setDeviceModel(''); setMessage('');
      setSubmitStatus(`Success! Service Ticket #${ticketId} created.`);
    } catch (error) {
      setSubmitStatus('Oops! Something went wrong. Please email me directly instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.h2}>📝 Request a Repair Quote</Text>
        <Text style={styles.paragraph}>Select your device category, choose or type your model, and describe your issue below.</Text>
        
        <View style={styles.formCard}>
          <Text style={styles.inputLabel}>Name *</Text>
          <TextInput style={styles.inputField} placeholder="John Doe" placeholderTextColor="#6b7280" value={name} onChangeText={setName} />

          <Text style={styles.inputLabel}>Email *</Text>
          <TextInput style={styles.inputField} placeholder="john@example.com" placeholderTextColor="#6b7280" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />

          <Text style={styles.inputLabel}>Device Category *</Text>
          <View style={styles.categoryGrid}>
            {categories.map((cat) => (
              <TouchableOpacity key={cat.value} style={[styles.categoryButton, deviceCategory === cat.value && styles.selectedCategory]} onPress={() => { setDeviceCategory(cat.value); setDeviceModel(''); }}>
                <Text style={[styles.categoryText, deviceCategory === cat.value && styles.selectedCategoryText]}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.inputLabel}>Quick Select Model or Type Below *</Text>
          <View style={styles.presetContainer}>
            {presetModels[deviceCategory].map((model) => (
              <TouchableOpacity key={model} style={[styles.presetChip, deviceModel === model && styles.selectedPresetChip]} onPress={() => setDeviceModel(model)}>
                <Text style={[styles.presetText, deviceModel === model && styles.selectedPresetText]}>{model}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput style={styles.inputField} placeholder="e.g., iPhone 17 Pro Max..." placeholderTextColor="#6b7280" value={deviceModel} onChangeText={setDeviceModel} />
          
          <Text style={styles.inputLabel}>Describe the Issue *</Text>
          <TextInput style={[styles.inputField, {height: 100}]} placeholder="Tell me about your issue..." placeholderTextColor="#6b7280" multiline={true} textAlignVertical="top" value={message} onChangeText={setMessage} />

          {submitStatus ? <Text style={submitStatus.includes('Oops') ? styles.errorText : styles.successText}>{submitStatus}</Text> : null}

          <TouchableOpacity style={[styles.btnPrimary, {marginTop: 10}]} onPress={submitForm} disabled={isSubmitting}>
            {isSubmitting ? <ActivityIndicator color="#0b1120" /> : <Text style={styles.btnText}>Generate Repair Ticket</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', maxWidth: 960, alignSelf: 'center', paddingHorizontal: 20 },
  section: { paddingVertical: 40 },
  h2: { fontSize: 26, fontWeight: 'bold', color: '#e5e7eb', marginBottom: 15 },
  paragraph: { fontSize: 16, color: '#e5e7eb', lineHeight: 24, marginBottom: 15 },
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
  btnPrimary: { backgroundColor: '#38bdf8', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 30, alignSelf: 'center', width: '100%', alignItems: 'center' },
  btnText: { color: '#0b1120', fontWeight: 'bold', fontSize: 16 }
});