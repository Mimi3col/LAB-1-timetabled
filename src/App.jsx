import './App.css';
import Calendar from "./components/Calendar.jsx";

const App = () => {

    return (
        <div className="App">
        <h1>Itinerary For Teachers</h1>
        <h2>A weekly view of How A teacher would plan their week</h2>
        <Calendar/>
        </div>
    )
}

export default App