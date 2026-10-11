import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        // 1. Regular Expression pattern for standard email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 2. Check if any fields are completely blank FIRST
        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
            return; 
        }

        // 3. Test the email input against our RegEx pattern
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address (e.g., name@example.com).');
            return; 
        }

        // 4. If the code makes it down here, all tests passed!
        alert('Validation passed! Contact system is ready to be wired up.');
    };

    return (
        <View style={[styles.section, styles.sectionAlt]}>
            <View style={styles.container}>
                <Text style={styles.h2}>📬 Ask a Question</Text>
                <Text style={styles.paragraph}>Have a general technology question or need advice? Send me a message below.</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        placeholderTextColor="#9ca3af"
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="john@example.com"
                        placeholderTextColor="#9ca3af"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>Message</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="How can I help you?"
                        placeholderTextColor="#9ca3af"
                        value={message}
                        onChangeText={setMessage}
                        multiline={true}
                        numberOfLines={4}
                    />

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        {/* Fixed the typo here to match the styles below */}
                        <Text style={styles.submitText}>Send Message</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
                
const styles = StyleSheet.create({
    container: { width: '100%', maxWidth: 700, alignSelf: 'center', paddingHorizontal: 20},
    section: { paddingVertical: 40 },
    sectionAlt: { backgroundColor: '#111827' },
    h2: { fontSize: 26, fontWeight: 'bold', color: '#e5e7eb', marginBottom: 10 },
    paragraph: { fontSize: 16, color: '#e5e7eb', lineHeight: 24, marginBottom: 20 },
    card: { backgroundColor: '#1f2937', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#374151' },
    label: { color: '#e5e7eb', fontSize: 14, fontWeight: 'bold', marginBottom: 5, marginTop: 10 },
    input: { backgroundColor: '#374151', color: '#f3f4f6', padding: 12, borderRadius: 8, fontSize: 16, borderWidth: 1, borderColor: '#4b5563' },
    textArea: { height: 100, textAlignVertical: 'top' },
    // Fixed the missing comma on this line!
    submitButton: { backgroundColor: '#38bdf8', paddingVertical: 12, borderRadius: 8, marginTop: 20, alignItems: 'center' },
    submitText: { color: '#0b1120', fontSize: 16, fontWeight: 'bold' }
});