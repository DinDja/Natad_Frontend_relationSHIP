
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const MatchModal = ({ visible, onClose, myProfile, matchedProfile }) => {
  if (!myProfile || !matchedProfile) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <LinearGradient
          colors={['#EC4899', '#F472B6']}
          style={styles.modalView}
        >
          <Text style={styles.title}>É um Match!</Text>
          <Text style={styles.subtitle}>
            Você e {matchedProfile.name} se curtiram mutuamente.
          </Text>

          <View style={styles.profilesContainer}>
            <Image source={{ uri: myProfile.image }} style={styles.profileImage} />
            <Image source={{ uri: matchedProfile.image }} style={[styles.profileImage, styles.secondImage]} />
          </View>

          <Pressable
            style={[styles.button, styles.buttonSendMessage]}
            onPress={onClose} 
          >
            <Text style={styles.textStyle}>Enviar Mensagem</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonKeepSwiping]}
            onPress={onClose}
          >
            <Text style={styles.textKeepSwiping}>Continuar Deslizando</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
  },
  profilesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
  },
  secondImage: {
      marginLeft: -40, 
  },
  button: {
    borderRadius: 30,
    paddingVertical: 15,
    elevation: 2,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonSendMessage: {
    backgroundColor: 'white',
  },
  buttonKeepSwiping: {
    backgroundColor: 'transparent',
  },
  textStyle: {
    color: '#EC4899',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  textKeepSwiping: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
  }
});

export default MatchModal;
