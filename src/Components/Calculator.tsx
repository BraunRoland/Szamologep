import { useState } from "react"

export function Calculator() {
    const [elsoSzam, setElsoSzam] = useState<number>(0);
    const [masodikSzam,setMasodikSzam] = useState<number>(0);
    const [operator, setOperator] = useState<string>("");
    const [vegosszeg,setVegosszeg] = useState<number>(0);
    function szamKiiras(num: number) {
        if(operator=="") {
            if(elsoSzam==0) {
                setElsoSzam(num);
            }
            else {
                setElsoSzam(elsoSzam*10+num);
            }
        }
        else {
            if(masodikSzam==0) {
                setMasodikSzam(num);
            }
            else {
                setMasodikSzam(masodikSzam*10+num);
            }
        }
    }

    function Clear() {
        setElsoSzam(0);
        setMasodikSzam(0);
        setOperator("");
    }

    function Szamitas(){
        try {

            switch (operator) {
                case "+":
                    console.log("belep")
                    setVegosszeg(elsoSzam + masodikSzam);
                    break;
                case "-":
                    setVegosszeg(elsoSzam - masodikSzam);
                    break;
                case "*":
                    setVegosszeg(elsoSzam * masodikSzam);
                    break;
                case "/":
                    if (elsoSzam == 0 || masodikSzam == 0) {
                        throw new Error("Nullával nem lehet osztani!");
                    }
                    else {
                        setVegosszeg(elsoSzam / masodikSzam); 
                    }
                    break;
            }
        }
        catch(err) {
            if (err instanceof Error) {
                alert(err.message)
            }
        }
        Clear();
    }

    return(
        <>
        <div className="calc">
            <div className="row">
                <div className="col-sm-12">
                    <p id="inp">{operator==""? elsoSzam:masodikSzam}</p>
                </div>
            </div>
            <div className="row">
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(7)}}>7</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(8)}}>8</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(9)}}>9</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {setOperator('*')}}>*</button>
                </div>
            </div>
            <div className="row">
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(4)}}>4</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(5)}}>5</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(6)}}>6</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {setOperator('/')}}>/</button>
                </div>
            </div>
            <div className="row">
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(1)}}>1</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(2)}}>2</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(3)}}>3</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {setOperator('+')}}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={Clear}>C</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {szamKiiras(0)}}>0</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={() => {setOperator('-')}}>-</button>
                </div>
                <div className="col sm-3">
                    <button className="btn btn-light" onClick={Szamitas}>=</button>
                </div>
            </div>
        </div>
        <h2>Végösszeg: {vegosszeg}</h2>
        </>
    )
}