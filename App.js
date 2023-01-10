import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import React, {useCallback, useState, useRef} from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from './constants/colors';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [chosenNumber, setChosenNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const nbRounds = useRef();
  const [fontsLoaded] = useFonts({
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  const onGameOverHandler = nbPlayedRounds => {
    setIsGameOver(true);
    nbRounds.current = nbPlayedRounds;
  };
  const onStartNewGameHandler = () => {
    setIsGameOver(false);
    setChosenNumber(null);
  };
  let screen = <StartGameScreen setChosenNumber={setChosenNumber} />;
  if (chosenNumber && !isGameOver) {
    screen = (
      <GameScreen onGameOver={onGameOverHandler} chosenNumber={chosenNumber} />
    );
  }
  if (chosenNumber && isGameOver) {
    screen = (
      <GameOverScreen
        onStartNewGame={onStartNewGameHandler}
        nbRounds={nbRounds.current}
        chosenNumber={chosenNumber}
      />
    );
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary600, Colors.accent500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBackground}>
        <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.25,
  },
});
