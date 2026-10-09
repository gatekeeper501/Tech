import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import imgRepair from '../assets/IMG_5717.png';
import imgClamp2 from '../assets/IMG_6004.png';
import imgClamp from '../assets/IMG_6062.png';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.h2}>📸 Workbench & Project Showcase</Text>
        
        <View style={styles.galleryGrid}>
          <TouchableOpacity style={styles.galleryCard} onPress={() => setSelectedImage(imgRepair)}>
            <Image source={imgRepair} style={styles.galleryImage} resizeMode="cover" />
            <View style={styles.galleryContent}><Text style={styles.galleryTitle}>Precision Tablet Disassembly</Text></View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.galleryCard} onPress={() => setSelectedImage(imgClamp2)}>
            <Image source={imgClamp2} style={styles.galleryImage} resizeMode="cover" />
            <View style={styles.galleryContent}><Text style={styles.galleryTitle}>Hardware Diagnostics</Text></View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.galleryCard} onPress={() => setSelectedImage(imgClamp)}>
            <Image source={imgClamp} style={styles.galleryImage} resizeMode="cover" />
            <View style={styles.galleryContent}><Text style={styles.galleryTitle}>Structural B-7000 Adhesion</Text></View>
          </TouchableOpacity>
        </View>
      </View>

      {/* FULL-SCREEN IMAGE MODAL */}
      {selectedImage && (
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setSelectedImage(null)} activeOpacity={1}>
          <View style={styles.modalContent}>
            <Image source={selectedImage} style={styles.fullScreenImage} resizeMode="contain" />
            <Text style={styles.closeHint}>Tap anywhere to close</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', maxWidth: 960, alignSelf: 'center', paddingHorizontal: 20 },
  section: { paddingVertical: 40 },
  h2: { fontSize: 26, fontWeight: 'bold', color: '#e5e7eb', marginBottom: 15 },
  galleryGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
  galleryCard: { width: '31%', backgroundColor: '#1e293b', borderRadius: 12, borderWidth: 1, borderColor: '#334155', overflow: 'hidden', marginBottom: 15 },
  galleryImage: { width: '100%', height: 120, resizeMode: 'cover', backgroundColor: '#0f172a' },
  galleryContent: { padding: 12 },
  galleryTitle: { color: '#38bdf8', fontSize: 14, fontWeight: 'bold', marginBottom: 4 },
  modalOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(11, 17, 32, 0.95)', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: 20 },
  modalContent: { width: '100%', maxWidth: 800, height: '80%', justifyContent: 'center', alignItems: 'center' },
  fullScreenImage: { width: '100%', height: '90%', borderRadius: 8 },
  closeHint: { color: '#38bdf8', marginTop: 15, fontSize: 16, fontWeight: '600' }
});