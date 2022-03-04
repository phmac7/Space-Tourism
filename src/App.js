import './index.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import HomePage from './components/Home/HomePage';
import Navbar from './components/NavBar/Navbar';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology'

function App() {

    return (

        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/destination' element={<Destination />} />
                    <Route path='/crew' element={<Crew />} />
                    <Route path='/technology' element={<Technology />} />
                </Routes>
            </main>
        </Router>
    )
}

export default App;
