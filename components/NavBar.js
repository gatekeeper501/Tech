import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, useWindowDimensions } from 'react-native';

export default function NavBar({ activePage, setActivePage }) {

    // 1. Hook to measure the user's screen width in real-time
    const { width } = useWindowDimensions();

    // 2. Set our breakpoint: Anything smaller than 768 pixels is considered a mobile phone
    const isMobile = width < 768;

    // 3. We store the buttons directly inside an empty fragment <></> so the parent Flexbox handles the layout perfectly
    const NavButtons = (
        <>
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

            <TouchableOpacity
                style={[styles.navButton, activePage === 'Architecture' && styles.activeButton]}
                onPress={() => setActivePage('Architecture')}
            >
                <Text style={[styles.navText, activePage === 'Architecture' && styles.activeText]}>Engineering Skills</Text>
            </TouchableOpacity>
        </>
    );

    return (
        <View style={styles.wrapper}>
            {/* 4. Conditional Rendering based on device size */}
            {isMobile ? (
                // IF MOBILE: Render the swipeable ScrollView (Typos fixed here!)
                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={styles.mobileContainer}
                >
                    {NavButtons}
                </ScrollView>
            ) : (
                // IF Tablet/Desktop: Render a static, evenly spaced flex row
                <View style={styles.desktopContainer}>
                    {NavButtons}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1e293b',
        borderBottomWidth: 1,
        borderBottomColor: '#334155'
    },
    // Styles for the iPhone swiping layout
    mobileContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    // Styles for the Mac/iPad static layout
    desktopContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    navButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 20
    },
    activeButton: { backgroundColor: '#38bdf8' },
    navText: { color: '#9ca3af', fontSize: 16, fontWeight: 'bold' },
    activeText: { color: '#0b1120' }
});