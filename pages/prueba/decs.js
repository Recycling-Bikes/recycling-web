
import { useRef } from "react"
import { HiPlus } from "react-icons/hi"
import { useState } from "react"
import style from "./else.module.scss"
import { Col, Image, Row } from "react-bootstrap"

export default function InputFile() {
    const [images, setImages] = useState([])

    const Button = useRef(null)

    const preview = () => {
        return images.map((image, index) =>{
            if(image !== "error"){
                return(<Col key={index}>
                <Image src={URL.createObjectURL(image)} alt="something" />
                </Col>)
            }
            return (<Col key={index}>
            <p  className={style.error}>Error</p>
            </Col>)
        })
      
    }

    const OnChange = () => {
        // Si usas typescript pues verás un error acá, sinceramente, no tuve tiempo para ver cómo quitarlo, pero todo funciona
        const files = Object.values(Button.current?.files)
        console.log(files)

        
        // Comparar si es que el archivo es una imagen soportada o no
        // también podrías cambiar una variable o poner que se retorne algo al padre o al form para que puedas usar este dato
        let paths = files.map((file) => {

        if (
                file?.type.includes("png")
                ||
                file?.type.includes("webp")
                ||
                file?.type.includes("jpeg")
        ) {

            return file
        }
        return "error"
        })

        setImages(paths)
    }

    const HandleClick = () => {
        Button.current?.click()
    }

    return (

        <div className={style.else}>
            <label htmlFor="bicicleImg" onClick={HandleClick} >
                <HiPlus />
                Subir o arrastrar fotos
            </label>
            <input
                type="file"
                name="bicicleImg"
                id="getImage"
                accept="image/png, image/jpeg, image/webp"
                ref={Button}
                onChange={OnChange}
                multiple={true}
            >

            </input>

        <Row>
            {preview()}
        </Row>
            

        </div>
    )
}