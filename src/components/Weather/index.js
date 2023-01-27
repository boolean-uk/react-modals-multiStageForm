import './Weather.css'

function Weather ({data}) {
  const temp = Math.floor(data.main.temp) || undefined
  return (
    <>
    {data.name && <p className="weather-data">{data.name}: {temp}°</p>}
    </>
  )
}

export default Weather
