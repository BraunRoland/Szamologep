import { useState } from "react"

export function Calculator() {
    const [elsoSzam, setElsoSzam] = useState<string>("0");
    const [masodikSzam,setMasodikSzam] = useState<string>("0");
    const [operator, setOperator] = useState<string>("");
    const [vegosszeg,setVegosszeg] = useState<number>(0);
    const [kijelzo, setKijelzo] = useState<number>(0);


    function SzamKiiras(num: string) {
        if(operator == "") {
            setKijelzo(0);
            if ( num == "." && elsoSzam.includes(".")) {
                return;
            }
            else if (elsoSzam == "0" && num != ".") {
                setElsoSzam(num);
            }
            else {
                setElsoSzam(elsoSzam+num);
            }
        }
        else {
            setKijelzo(1);
            if (num == "." && masodikSzam.includes(".")) {
                return;
            }
            else if( masodikSzam == "0" && num != ".") {
                setMasodikSzam(num);
            }
            else {
                setMasodikSzam(masodikSzam+num)
            }
        }
    }

    function Clear() {
        setElsoSzam("0");
        setMasodikSzam("0");
        setOperator("");
    }
        
    function Clear_Btn() {
        setKijelzo(0);
        setElsoSzam("0");
        setMasodikSzam("0");
        setOperator("");
    }

    function InputKiiras() {
        switch (kijelzo) {
            case 0:
                return elsoSzam;
            case 1:
                return masodikSzam;
            case 2: 
                return vegosszeg.toString();
        }
    }

    function Szamitas(){
        setKijelzo(2);
        try {
            switch (operator) {
                case "+":
                    console.log("belep")
                    setVegosszeg(parseFloat(elsoSzam) + parseFloat(masodikSzam));
                    break;
                case "-":
                    setVegosszeg(parseFloat(elsoSzam) - parseFloat(masodikSzam));
                    break;
                case "*":
                    setVegosszeg(parseFloat(elsoSzam) * parseFloat(masodikSzam));
                    break;
                case "/":
                    if (parseFloat(elsoSzam) == 0 || parseFloat(masodikSzam) == 0) {
                        throw new Error("Nullával nem lehet osztani!");
                    }
                    else {
                        setVegosszeg(parseFloat(elsoSzam) / parseFloat(masodikSzam)); 
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
                <div className="col-12">
                    <p id="inp">{InputKiiras()}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("7")}}>7</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("8")}}>8</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("9")}}>9</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary gomb" onClick={() => {setOperator('*')}}>*</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("4")}}>4</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("5")}}>5</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("6")}}>6</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary gomb" onClick={() => {setOperator('/')}}>/</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("1")}}>1</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("2")}}>2</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("3")}}>3</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary gomb" onClick={() => {setOperator('+')}}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-danger gomb" onClick={Clear_Btn}>C</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras("0")}}>0</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light gomb" onClick={() => {SzamKiiras(".")}}>.</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary gomb" onClick={() => {setOperator('-')}}>-</button>
                </div>
            </div>
                <div className="d-grid w-100 mt-2">
                    <button type="button" className="btn btn-secondary" onClick={Szamitas}>=</button>
                </div>
        </div>
        <h2>Végösszeg: {vegosszeg}</h2>
        </>
    )
}