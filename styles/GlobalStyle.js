import { StyleSheet } from 'react-native';

// Farverne deles af sidernes styling og de almindelige Button-komponenter.
export const colors = {
  background: '#F7F6F0',
  primary: '#24543C',
  text: '#202B24',
  muted: '#667068',
  white: '#FFFFFF',
  border: '#D5DDD5',
  accent: '#D88B5B',
};

// Alle tre sider bruger den samme styling fra denne fil.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingBottom: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 25,
    color: colors.text,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
  },
  purchasedList: {
    flex: 1,
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  buttonArea: {
    marginTop: 8,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    marginBottom: 12,
  },
});

export default styles;
