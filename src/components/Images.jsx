import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from './Image'

const Images = () => {
    useEffect(() => {
        window.confirm('写真の登録枚数は3枚までです')
    },[])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
    const [ files, setFiles ] = useState([])

    useEffect(() => {
        setFiles( [...files, acceptedFiles] )
    }, [acceptedFiles])


    const arrs = files.filter((file) => {return file.length !== 0 })


    return(
        <div>
            <h1 className='listTitle'>Drag and drop the image</h1>
            <div { ...getRootProps({ className: 'dropzone'}) }>
                <ul className='imagespace'>
                    <input { ...getInputProps() } className='hidden'/>
                    <div className='imageSpot'>
                        <Image arrs = { arrs } />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Images