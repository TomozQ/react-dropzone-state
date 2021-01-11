import React from 'react'

const Image = ( props ) => {
    const { arrs } = props
    const pictures = []


    arrs.map(arr => {
        arr.map((picture => {
            if(pictures.length < 3){
                pictures.push(picture)
            }else{
                pictures.push(picture)
                pictures.shift()
            }
        }))
    })

    console.log('pictures',pictures)

    return(
        <>
            {pictures.map((picture, index) => {
                const createObjectURL = ( window.URL || window.webkitURL ).createObjectURL
                return(
                    <li key={ index }>
                        <img src={ createObjectURL( picture ) } alt='preview'/>
                    </li>
                )
            })}
        </>
    )
}

export default Image