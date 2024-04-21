import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        click clock organize
      </Text>
      <Button
        title="alarma"
        onPress={() => Alert.alert('no se ha creado ninguna alarma')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
       
      </Text>
      <Button
        title="cronometro"
        color="red"
        onPress={() => Alert.alert('no se ha establecido un tiempo especifico')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        
      </Text>
      <Button
        title="temporizador"
        color="purple"
        onPress={() => Alert.alert('no se ha establecido un tiempo especifico')}
      />


</View>
    <Separator />
    <View>
      <Text style={styles.title}>
        
      </Text>
      <Button
        title="Brujula"
        color="blue"
        onPress={() => Alert.alert('especificar una ubicacion')}
      />

</View>
    <Separator />
    <View>
      <Text style={styles.title}>
        
      </Text>
      <Button
        title="herramientas"
        color="pink"
        onPress={() => Alert.alert('ajustar hora y fecha')}
      />

      
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Que no se te haga tarde para lo importante
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Aprendiz"
          onPress={() => Alert.alert('Karen Lorena Mora Correal')}
        />
        <Button
          title="Ajustes"
          onPress={() => Alert.alert('ajustar hora,ajustar fecha,mas ajustes')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;






































































