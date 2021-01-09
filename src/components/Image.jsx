import React from 'react'

const Image = ( props ) => {
    const { files } = props
    console.log('image', files)

    return(
        <>
            {files.map((file, index) => {
                const createObjectURL = ( window.URL || window.webkitURL ).createObjectURL
                return(
                    <li key={ index }>
                        <img src={ createObjectURL( file ) } alt='preview'/>
                    </li>
                )
            })}
        </>
    )
}

export default Image