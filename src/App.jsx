import { useState } from "react"
import Header from "./components/Header"
import { db } from "./data/db"
import Guitar from "./components/Guitar"

function App() {
  const [data, setData]= useState(db)
  
  return (
    <>
     <Header/>
     <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className = "row mt-5 ">
        {data.map((guitar)=>{
          return(
          <Guitar
                guitar={guitar}
              />
            )}
        )}  
        </div>
     </main>   

<<<<<<< HEAD
     <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
=======
     <footer class="bg-dark mt-5 py-5">
        <div class="container-xl">
            <p class="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
>>>>>>> 0f31c66558cc7b6b8e3ee67cc3817867c8b22f3d
        </div>
     </footer>
    </>
  )
  }

export default App
