import {useEffect } from 'react';
import {collection, getDocs } from 'firebase/firestore/lite';
import {db} from "../firebase-config.ts";
import {Firestore} from "@firebase/firestore/lite";

function App() {

    useEffect(() => {
        async function getCities(db: Firestore) {
            const citiesCol = collection(db, 'cities');
            const citySnapshot = await getDocs(citiesCol);
            const cityList = citySnapshot.docs.map(doc => doc.data());
            return cityList;
        }
        getCities(db).then(data => console.log(data))
    }, []);

    return (
        <div className="App">
            <h1>My Todo List</h1>
        </div>
    );
}

export default App;
