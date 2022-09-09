import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <View style={[styles.square, styles.red]}>
        <Text style={{ fontWeight: '700' }}>Square 1</Text>
      </View>
      <View style={[styles.square, styles.aqua]}>
        <Text style={{ fontWeight: '700' }}>Square 2</Text>
      </View>
      <View style={[styles.square, styles.green]}>
        <Text style={{ fontWeight: '700' }}>Square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    margin: 20,
    paddingVertical: 30,
    paddingHorizontal: 40
  },
  red: {
    backgroundColor: 'yellow',
  },
  aqua: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  }
}
);
