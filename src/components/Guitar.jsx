export default function Guitar ({guitar}){
    const {id, name, image, description, price} = guitar
    return(
        <div className="row mt-5">
<<<<<<< HEAD
        <div className="col-md-6 col-lg-4 my-4 row align-items-center"> 
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt= {`imagen guitarra`} />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name} </h3>
=======
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image} `} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">Lukather</h3>
>>>>>>> 0f31c66558cc7b6b8e3ee67cc3817867c8b22f3d
                <p>{description} </p>
                <p className="fw-black text-primary fs-3">${price} </p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                >Agregar al Carrito</button>
            </div>
        </div>
    </div> 
    )
}