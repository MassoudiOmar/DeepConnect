import Sound from 'react-native-sound';
import shuffleCardSound from "../assets/soundEffect/shuffling2-85600.mp3";

const shuffleSound = new Sound(shuffleCardSound, null, (error) => {
    if (error) {
        console.log('Error loading shuffle sound:', error);
    } else {
        console.log('Shuffle sound loaded successfully');
    }
});



export default shuffleSound;
