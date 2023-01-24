import { useGLTF } from "@react-three/drei";
import { createContext, useState } from "react";


export const ColorContext = createContext({})

export const ColorContextProvider = ({ children }) => {

    const { materials } = useGLTF("/scene.gltf");
    const [currentColor, setCurrentColor] = useState({
        color: "#9BB5CE",
        text: "Sierra Blue",
        rgbColor: "155, 181, 206"
    })

    let changeColorContext = (colorObject) => {
        materials.Body.color.set(colorObject.color);
        setCurrentColor(colorObject)
    }

    return (
        <ColorContext.Provider value={{ currentColor, changeColorContext }}>
            {children}
        </ColorContext.Provider>
    )
}