import React, { useState } from 'react';
import { Button, View, Text, ImageBackground, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://preview.redd.it/kanye-west-graduation-3840x2160-v0-kjektcn4myv91.png?auto=webp&s=09ab551caf64aa606dc8720953ad6abaca36c079' }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}
    >
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 40, fontFamily: 'Arial', fontWeight: 'bold', color: '#333', color: 'black' }}>
          Site legal
        </Text>
        <Button
          title="Calcular idade"
          onPress={() => navigation.navigate('Idade')}
          color="#FF5733"  // Cor personalizada
        />
        <Button
          title="Área do quadrado"
          onPress={() => navigation.navigate('Quadrado')}
          color="#3498db"  // Cor personalizada
        />

        <Button
          title="Área do triângulo"
          onPress={() => navigation.navigate('Triangulo')}
          color="#8e44ad"  // Cor personalizada
        />
      </View>
    </ImageBackground>
  );
}

function IdadeScreen({ navigation }) {
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');

  const apenasnumeros = (text) => {
    const formattedText = text.replace(/[^0-9]/g, '');
    setAge(formattedText);
  };

  const handleGreet = () => {
    const ageValue = parseInt(age);

    if (ageValue >= 0 && ageValue <= 12) {
      setCategory('Criança');
    } else if (ageValue >= 13 && ageValue <= 17) {
      setCategory('Adolescente');
    } else if (ageValue >= 18 && ageValue <= 20) {
      setCategory('Jovem');
    } else if (ageValue >= 21 && ageValue <= 60) {
      setCategory('Adulto');
    } else if (ageValue > 60) {
      setCategory('Idoso');
    } else {
      setCategory('Idade inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={apenasnumeros}
        value={age}
        keyboardType="numeric"
      />
      <Button title="Verificar" onPress={handleGreet} />
      <Text style={styles.category}>{category}</Text>
    </View>
  );
}

function TrianguloScreen({ navigation }) {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = (parseFloat(base) * parseFloat(height)) / 2;
    setResult(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triângulo em React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura do triângulo"
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
        value={height}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={styles.result}>Área: {result}</Text>}
    </View>
  );
}

function QuadradoScreen({ navigation }) {
  const [side, setSide] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = parseFloat(side) ** 2;
    setResult(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Quadrado </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSide(text)}
        keyboardType="numeric"
        value={side}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={styles.result}>Área: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  category: {
    marginTop: 20,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Idade" component={IdadeScreen} />
        <Stack.Screen name="Quadrado" component={QuadradoScreen} />
        <Stack.Screen name="Triangulo" component={TrianguloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
