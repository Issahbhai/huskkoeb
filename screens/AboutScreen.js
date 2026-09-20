import { View, Text, Button } from 'react-native';
import styles, { colors } from '../styles/GlobalStyle';

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
        <Text style={styles.infoText}>3. Tryk på Ryd listen, når du vil starte forfra.</Text>
        <Text style={styles.infoText}>
          Listen gemmes ikke permanent. Når appen genstartes, vises eksempelvarerne igen.
        </Text>
      </View>
      <View style={styles.buttonArea}>
        <Button
          title="Tilbage til forsiden"
          color={colors.primary}
          onPress={() => navigation.navigate('Forside')}
        />
      </View>
    </View>
  );
}
