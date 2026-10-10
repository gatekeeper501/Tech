import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Architecture() {
    return (
        <View style={[styles.section, styles.sectionAlt]}>
            <View style={styles.container}>
                <Text style={styles.h2}>🏗️ Project Architecture & Engineering Skills</Text>
                <Text style={styles.paragraph}>Building this cloud-based portfolio and dynamic intake system demonstrated the following full-stack competencies:</Text>

                <View style={styles.card}>
                    <Text style={styles.boldText}>Front-End UI & State Management</Text>
                    <Text style={styles.listItem}>• Built a cross-platform responsive interface using React Native and Flexbox grid layouts.</Text>
                    <Text style={styles.listItem}>• Managed complex component state (useState) for dynamic form routing and interactive image modals.</Text>

                    <View style={{marginTop: 12}}></View>
                    
                    <Text style={styles.boldText}>Back-End Integration & Serverless API</Text>
                    <Text style={styles.listItem}>• Engineered a serverless REST webhook using Google Apps Script to securely parse JSON POST payloads.</Text>
                    <Text style={styles.listItem}>• Automated data pipelines by routing frontend React Native submissions directly into a live Google Sheets database.</Text>

                    <View style={{marginTop: 15}}></View>
                    <Text style={styles.boldText}>Cloud DevOps & IT Infrastructure</Text>
                    <Text style={styles.listItem}>• Deployed a static web application to the cloud utilizing Microsoft Azure Static Web Apps.</Text>
                    <Text style={styles.listItem}>• Configured DNS and SSL certificates for secure, reliable web hosting.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { width: '100%', maxWidth: 960, alignSelf: 'center', paddingHorizontal: 20 },
    section: { paddingVertical: 40 },
    sectionAlt: { backgroundColor: '#111827' },
    h2: { fontSize: 26, fontWeight: 'bold', color: '#e5e7eb', marginBottom: 15 },
    paragraph: { fontSize: 16, color: '#e5e7eb', lineHeight: 24, marginBottom: 15 }, 
    card: { backgroundColor: '#1f2937', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#374151', marginBottom: 20 },
    listItem: { fontSize: 16, color: '#e5e7eb', marginBottom: 8 },
    boldText: { fontSize: 16, fontWeight: 'bold', color: '#38bdf8', marginBottom: 5 },
 });


