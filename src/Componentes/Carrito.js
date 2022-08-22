import imgCarrito from '../img/carritoball.svg'

const ImgCarrito = () => {
        return (
            <div className="imgCarrito">
                {<span>0</span>}
                <img src={imgCarrito} alt=""/>
            </div>
        );
    
}

export default ImgCarrito