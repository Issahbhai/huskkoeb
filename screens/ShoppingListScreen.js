import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles, { colors } from '../styles/GlobalStyle';

export default function ShoppingListScreen() {
  // State gemmer inputfeltets tekst og de varer, der ligger på listen.
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'Havregryn' },
    { id: '2', name: 'Tomater' },
    { id: '3', name: 'Pasta' },
  ]);
  const [nextId, setNextId] = useState(4);

  // Funktionen tilføjer en vare. Tom tekst og mellemrum bliver afvist.
  function addItem() {
    const name = itemName.trim();
    if (name === '') {
      return;
    }

    const newItem = { id: String(nextId), name: name };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
    setItemName('');
  }

  // En tom liste erstatter de nuværende varer, når brugeren rydder listen.
  function clearList() {
    setItems([]);
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
        <Button title="Tilføj vare" color={colors.primary} onPress={addItem} />
      </View>

      <Text style={styles.counterText}>Antal varer: {items.length}</Text>

      {/* FlatList viser hver vare og en kort besked, hvis listen er tom. */}
      <FlatList
        style={styles.listContainer}
        data={items}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.infoText}>Listen er tom. Tilføj din første vare.</Text>
        }
      />
      <View style={styles.buttonArea}>
        <Button title="Ryd listen" color={colors.primary} onPress={clearList} />
      </View>
    </View>
  );
}
