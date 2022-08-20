import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/component.navbar'
import HomePage from './components/component.hompage'
import FeaturesPage from './components/component.featuresPage'
import ContactPage from './components/component.contactPage'
import ProcessPage from './components/component.processPage'
const App = () => {
    return (
        <Fragment>

            <Routes>
                <Route path='/' element={<Navbar />} >
                    <Route index element={<HomePage />} />
                    <Route path='features' element={<FeaturesPage />} />
                    <Route path='contact' element={<ContactPage />} />
                    <Route path='process' element={<ProcessPage />} />
                </Route>
            </Routes>

        </Fragment>
    )
}

export default App