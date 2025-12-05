const Entry = (props) => {
  return (
    <main>
        <artical className= 'container' >
            <div  className="journal-entry">
                <img src={props.img} alt=" " className="img1" ></img>
            </div>
            <div className="inner-text">
                <img src="./location.jpeg" alt=" " className="location-img"></img>
                <span>{props.place} &nbsp;&nbsp;</span>
                <a href={props.location}>View on Google Maps</a>
                
                <h1 className="mg0">{props.name}</h1>
                <p className="mg0"><strong>{props.date}</strong></p>
                <p className="mg0">{props.text}</p>
            </div>
        </artical>
        

    </main>
  )
}

export default Entry