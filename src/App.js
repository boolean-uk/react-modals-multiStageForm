import Modal from 'react-modal'
import { useState } from 'react'
import './App.css'
import constants from './constants'
import RequestForm from './components/RequestForm'
import Weather from './components/Weather'

const { form } = constants.pages.weather

Modal.setAppElement(document.getElementById('root'))

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [formStage, setFormStage] = useState(0)
  const [formData, setFormData] = useState(form.initialData)
  const [weatherData, setWeatherData] = useState({ main: {} })

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setFormStage(0)
    setIsOpen(false)
  }

  function nextStage(e) {
    e.preventDefault()
    setFormStage(() => formStage + 1)
  }

  function previousStage(e) {
    e.preventDefault()
    setFormStage(() => formStage - 1)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const { city, units, lang } = formData
    const appid = process.env.REACT_APP_APPID
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}&lang=${lang}`
    const res = await fetch(url)
    const data = await res.json()
    setWeatherData(data)
    closeModal()
  }

  function onChange (event) {
    const newData = { ...formData }
    newData[event.target.name] = event.target.value
    setFormData(newData)
  }

  return (
    <main>
      <button className="main-button" onClick={openModal}>Get Weather</button>

      <Modal
        className="weather-modal"
        isOpen={modalIsOpen}
        contentLabel="Weather Form Modal"
      >
        <nav className="form-header-nav">
          <button onClick={closeModal}>x</button>
        </nav>

        <h2>Get Weather</h2>
        <p>Fill this form out to see the weather in a specific city</p>

        <RequestForm
          formData={formData}
          form={form}
          stage={formStage}
          onChange={onChange}
          handleSubmit={handleSubmit}
          nextStage={nextStage}
          previousStage={previousStage}
        />
      </Modal>

      <Weather data={weatherData}/>
    </main>
  );
}

export default App
