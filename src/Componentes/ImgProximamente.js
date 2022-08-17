import { Component } from "react";
import imgProx from '../img/pokeball base.png'

export default class ImgProx extends Component{
    render() {
        return (
             <div className="imgProx">
                <h2>Proximamente...</h2>
                <img src={imgProx} alt="" />
             </div>
        );
    }
}