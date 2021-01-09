import React from 'react'
import { useDropzone } from 'react-dropzone'
import Image from './Image'

const Images = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

    return(
        <div>
            <h1 className='listTitle'>画像</h1>
            <div { ...getRootProps({ className: 'dropzone'}) }>
                <ul className='imagespace'>
                    <input { ...getInputProps() } className='hidden'/>
                    <div className='imageSpot'>
                        {(() => {
                            if(acceptedFiles.length <= 3){
                                let files = acceptedFiles
                                return <Image files = { files }/>
                            }else{
                                let files = acceptedFiles.slice( 0, 3 )
                                console.log( files )
                                return (
                                    <>
                                        {console.log('return内',files)}
                                        <Image files = { files }/>
                                    </>
                                )
                            }
                        })()}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Images