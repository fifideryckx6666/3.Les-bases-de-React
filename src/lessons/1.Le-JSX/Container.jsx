function Container() {

    function handleClick(e) {
    console.log("Click",e)
}

const txt ="gugug"

  return (
      <div>
          <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Tenetur sunt voluptatum
          dolores maxime sapiente accusamus, quod,
          culpa itaque amet libero minima quasi cumque.
              A iure, harum cupiditate optio quod fuga!
          </p>
          <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
          </ul>
          <button>Valider</button>
          <p>{10 + 10}</p>
          <p>{txt}</p>
          <p>{[1, 2, 3, , "k", "u"]}</p>
     
      
          <button className="btn" onClick= { function handleClick(){
              console.log("click")
      }}>clock</button>

       </div> 
    )
}

export default Container

