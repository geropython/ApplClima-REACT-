import './WeatherApp.css'

export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '9097d8123a279879ef077c2a2560d318'
    const diffKelvin = 273.15

    const handleSubmit = (event) => {
        event.preventDefault
    }

    return (
        <div className="container">
            <h1>App del Clima con React</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese una ciudad/pais/pueblo" />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
