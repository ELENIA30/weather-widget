const Weather = (props) => {
    const location = props.location || "seleziona una città";
    const temp = props.temp || 0;
    const status = props.status || "N/A";
    const icon = props.icon || `http://openweathermap.org/img/wn/${icon}@2x.png`;
  
    return (
      <section>
        <ul>
          <li>Location: {location}</li>
          <li>Temperatura: {temp} </li>
          <li>Condizione: {status}</li>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        </ul>
      </section>
    );
  };
  
  export { Weather };