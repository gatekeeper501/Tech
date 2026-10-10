import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function NavBar({ activePage, setActivePage }) {
    return (
        <View style={styles.navContainer}>
            <TouchableOpacity
                style={[styles.navButton, activePage === 'Home' && styles.activeButton]}
                onPress={() => setActivePage('Home')}
            >
                <Text style={[styles.navText, activePage === 'Home' && styles.activeText]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.navButton, activePage === 'Repair' && styles.activeButton]}
                onPress={() => setActivePage('Repair')}
            >
                <Text style={[styles.navText, activePage === 'Repair' && styles.activeText]}>Request Repair</Text>
            </TouchableOpacity>

            {/* New TAB ADDED HERE */}
            <TouchableOpacity
                style={[styles.navButton, activePage === 'Architecture' && styles.activeButton]}
                onPress={() => setActivePage('Architecture')}
            >
                <Text style={[styles.navText, activePage === 'Architecture' && styles.activeText]}>Engineering Skills</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1e293b',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#334155',
    },
    navButton: {
        paddingVertical: 8, paddingHorizontal: 20, marginHorizontal: 5, borderRadius: 20, },
        activeButton: {backgroundColor: '#38bdf8',},
        navText: {color: '#9ca3af', fontSize: 16, fontWeight: 'bold' },
        activeText: { color: '#0b1120' }
        
});

   