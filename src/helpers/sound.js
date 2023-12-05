import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound'; // Import Sound library

import flipcardSound from "../assets/soundEffect/flipcard-91468.mp3";

const flipCardSound = new Sound(flipcardSound, null, (error) => {
    if (error) {
        console.log('Error loading flipcard sound:', error);
    } else {
        console.log('Flipcard sound loaded successfully');
    }
});

export default flipCardSound;
