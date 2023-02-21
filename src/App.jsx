import './App.css';
import Calendar from "./components/Calendar.jsx";

const App = () => {

    return (
        <div className="App">
        <h1>Itinerary For Teacher Workshops</h1>
        <h2>The weekly view of a five day workshops available to teachers one week before school</h2>
        <Calendar/>
        </div>
    )
}

export default App