import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import Feedbackstats from './Components/Feedbackstats'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AbouticonLink from './Components/AbouticonLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App()
{
    return( 
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <Feedbackstats />
                                <FeedbackList />
                            </>
                        }
                        ></Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AbouticonLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App