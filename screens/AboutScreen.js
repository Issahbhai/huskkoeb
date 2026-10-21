import { View, Text, Pressable } from 'react-native';
import styles from '../styles/GlobalStyle';
import buttonStyles from '../styles/ButtonStyles';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Her kan brugeren læse formålet og en enkel vejledning. */}
      <View style={styles.card}>
        <Text style={styles.title}>Om HuskKøb</Text>
        <Text style={styles.subtitle}>
          HuskKøb samler dine varer på en enkel indkøbsliste, så du kan huske dem i butikken.
        </Text>
        <Text style={styles.infoText}>1. Åbn indkøbslisten og skriv navnet på en vare.</Text>
        <Text style={styles.infoText}>2. Tryk på Tilføj vare for at sætte varen på listen.</Text>
        <Text style={styles.infoText}>3. Tryk på Købt, når du har købt en vare.</Text>
        <Text style={styles.infoText}>
          Varerne gemmes lokalt, så listen stadig er der, når appen åbnes igen.
        </Text>
      </View>
      <View style={buttonStyles.buttonArea}>
        <Pressable
          style={buttonStyles.button}
          onPress={() => navigation.navigate('Forside')}
        >
          <Text style={buttonStyles.buttonText}>Tilbage til forsiden</Text>
        </Pressable>
      </View>
    </View>
  );
}
