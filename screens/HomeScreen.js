import { View, Text, Pressable } from 'react-native';
import styles from '../styles/GlobalStyle';
import buttonStyles from '../styles/ButtonStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Introduktionen fortæller hvad appen kan bruges til. */}
      <View style={styles.card}>
        <Text style={styles.title}>HuskKøb</Text>
        <Text style={styles.subtitle}>
          En simpel måde at holde styr på dine indkøb.
        </Text>
      </View>

      {/* Knapperne åbner de to andre sider i appen. */}
      <View style={buttonStyles.buttonRow}>
        <View style={buttonStyles.rowButton}>
          <Pressable
            style={buttonStyles.button}
            onPress={() => navigation.navigate('Indkøbsliste')}
          >
            <Text style={buttonStyles.buttonText}>Åbn indkøbsliste</Text>
          </Pressable>
        </View>
        <View style={buttonStyles.rowButton}>
          <Pressable
            style={[buttonStyles.button, buttonStyles.secondaryButton]}
            onPress={() => navigation.navigate('Om appen')}
          >
            <Text style={[buttonStyles.buttonText, buttonStyles.secondaryButtonText]}>Om appen</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
