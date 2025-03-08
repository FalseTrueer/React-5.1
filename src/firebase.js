import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDuaRMIUSr713wEHvBfc0CBibghvySbkAY',
	authDomain: 'react-5-1.firebaseapp.com',
	projectId: 'react-5-1',
	storageBucket: 'react-5-1.firebasestorage.app',
	messagingSenderId: '514297342833',
	appId: '1:514297342833:web:a174fa067167040b5e24d0',
	measurementId: 'G-F5Y47ZMKPW',
	databaseURL: 'https://react-5-1-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
