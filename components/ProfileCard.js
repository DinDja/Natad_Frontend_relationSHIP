import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const universitySeals = {
  UFBA: 'https://www.saude.ba.gov.br/wp-content/uploads/2014/08/cidadao_usuario_noticias_Brasao_Ufba.jpg',
  UNIFACS: 'https://i0.wp.com/jornalgrandebahia.com.br/wp-content/uploads/2019/12/Logomarca-da-Universidade-Salvador-UNIFACS-201911201.jpg?quality=100&ssl=1',
  UNEB: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bras%C3%A3o_da_UNEB.png/250px-Bras%C3%A3o_da_UNEB.png',
  default: 'https://placehold.co/100x100/cccccc/333?text=U',
};


export default function ProfileCard({ profile }) {
  if (!profile) {
    return null;
  }

  const sealUri = universitySeals[profile.university] || universitySeals.default;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: profile.image }}
        style={styles.image}
        resizeMode="cover"
      >
        <Image source={{ uri: sealUri }} style={styles.universitySeal} />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{profile.name}, {profile.age}</Text>
            <View style={styles.detailRow}>
               <FontAwesome5 name="graduation-cap" size={16} color="white" />
               <Text style={styles.details}>{profile.course}</Text>
            </View>
            <View style={styles.detailRow}>
               <FontAwesome5 name="university" size={16} color="white" />
               <Text style={styles.details}>{profile.university}</Text>
            </View>
            <Text style={styles.bio}>{profile.bio}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    aspectRatio: 3 / 4.5,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  universitySeal: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  gradient: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-end',
    padding: 20,
  },
  infoContainer: {
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  details: {
    fontSize: 16,
    color: 'white',
    marginLeft: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  bio: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

