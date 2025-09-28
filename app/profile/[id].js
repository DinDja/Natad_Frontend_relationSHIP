import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PROFILES } from '../../constants/mockData';

export default function ProfileDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const profile = PROFILES.find((p) => p.id === id);

    if (!profile) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Perfil não encontrado.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground source={{ uri: profile.image }} style={styles.headerImage}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <FontAwesome5 name="chevron-left" size={24} color="#FFF" />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.contentContainer}>
                    <Text style={styles.name}>{profile.name}, {profile.age}</Text>
                    <View style={styles.detailRow}>
                        <FontAwesome5 name="graduation-cap" size={16} color="#666" />
                        <Text style={styles.details}>{profile.course}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <FontAwesome5 name="university" size={16} color="#666" />
                        <Text style={styles.details}>{profile.university}</Text>
                    </View>

                    <View style={styles.separator} />

                    <Text style={styles.bio}>{profile.bio}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerImage: {
        width: '100%',
        aspectRatio: 3 / 4,
        justifyContent: 'flex-start',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 10,
        borderRadius: 20,
    },
    contentContainer: {
        padding: 20,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    details: {
        fontSize: 18,
        color: '#666',
        marginLeft: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#E8E8E8',
        marginVertical: 20,
    },
    bio: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
    },
});
