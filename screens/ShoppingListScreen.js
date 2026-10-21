import { useCallback, useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import styles, { colors } from '../styles/GlobalStyle';
import buttonStyles from '../styles/ButtonStyles';
import listStyles from '../styles/ListStyles';

const ACTIVE_ITEMS_KEY = 'activeItems';
const PURCHASED_ITEMS_KEY = 'purchasedItems';
const exampleItems = [
  { id: '1', name: 'Havregryn' },
  { id: '2', name: 'Tomater' },
  { id: '3', name: 'Pasta' },
];

export default function ShoppingListScreen({ navigation }) {
  // State gemmer inputfeltets tekst og de varer, der ligger på listen.
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);

  // Henter den gemte indkøbsliste, når siden åbnes.
  useFocusEffect(
    useCallback(() => {
      async function loadItems() {
        try {
          const storedItems = await AsyncStorage.getItem(ACTIVE_ITEMS_KEY);
          if (storedItems === null) {
            await AsyncStorage.setItem(ACTIVE_ITEMS_KEY, JSON.stringify(exampleItems));
            setItems(exampleItems);
          } else {
            setItems(JSON.parse(storedItems));
          }
        } catch (error) {
          setItems([]);
        }
      }

      loadItems();
    }, [])
  );

  // Funktionen tilføjer en vare. Tom tekst og mellemrum bliver afvist.
  function addItem() {
    const name = itemName.trim();
    if (name === '') {
      return;
    }

    const newItem = { id: String(Date.now()), name: name };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    AsyncStorage.setItem(ACTIVE_ITEMS_KEY, JSON.stringify(updatedItems));
    setItemName('');
  }

  // En tom liste erstatter de nuværende varer, når brugeren rydder listen.
  function clearList() {
    setItems([]);
    AsyncStorage.setItem(ACTIVE_ITEMS_KEY, JSON.stringify([]));
  }

  // Flytter varen fra indkøbslisten til købte varer.
  async function markAsPurchased(item) {
    const updatedItems = items.filter((listItem) => listItem.id !== item.id);
    const storedPurchasedItems = await AsyncStorage.getItem(PURCHASED_ITEMS_KEY);
    const purchasedItems = storedPurchasedItems ? JSON.parse(storedPurchasedItems) : [];
    const updatedPurchasedItems = [...purchasedItems, item];

    setItems(updatedItems);
    await AsyncStorage.setItem(ACTIVE_ITEMS_KEY, JSON.stringify(updatedItems));
    await AsyncStorage.setItem(PURCHASED_ITEMS_KEY, JSON.stringify(updatedPurchasedItems));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Din indkøbsliste</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>Hvad skal du huske at købe?</Text>
        <TextInput
          style={styles.input}
          placeholder="Skriv en vare"
          placeholderTextColor={colors.muted}
          accessibilityLabel="Varens navn"
          value={itemName}
          onChangeText={setItemName}
        />
        <Pressable style={buttonStyles.button} onPress={addItem}>
          <Text style={buttonStyles.buttonText}>Tilføj vare</Text>
        </Pressable>
      </View>

      <Text style={styles.counterText}>Antal varer: {items.length}</Text>

      {/* FlatList viser hver vare og en kort besked, hvis listen er tom. */}
      <FlatList
        style={styles.listContainer}
        data={items}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <View style={listStyles.listItem}>
            <Text style={listStyles.itemText}>{item.name}</Text>
            <Pressable
              style={listStyles.itemButton}
              onPress={() => markAsPurchased(item)}
            >
              <Text style={listStyles.itemButtonText}>Købt</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.infoText}>Listen er tom. Tilføj din første vare.</Text>
        }
      />
      <View style={buttonStyles.buttonRow}>
        <View style={buttonStyles.rowButton}>
          <Pressable
            style={buttonStyles.button}
            onPress={() => navigation.navigate('Købte varer')}
          >
            <Text style={buttonStyles.buttonText}>Se købte varer</Text>
          </Pressable>
        </View>
        <View style={buttonStyles.rowButton}>
          <Pressable style={[buttonStyles.button, buttonStyles.secondaryButton]} onPress={clearList}>
            <Text style={[buttonStyles.buttonText, buttonStyles.secondaryButtonText]}>Ryd listen</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
