import React from 'react'
import '../css/Histories.css'
import image1 from '../media/1.jpg'
import image2 from '../media/2.jpg'
import image3 from '../media/3.jpg'
import image4 from '../media/4.jpg'
import image5 from '../media/5.jpg'
import image6 from '../media/6.jpg'
import image7 from '../media/7.jpg'
import image8 from '../media/8.png'
import image9 from '../media/9.jpg'
import image10 from '../media/10.jpg'

function Histories() {
    return (
        <div className='history'>
            <div className='history__items'>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image1} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image2} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image3} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image4} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image5} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image6} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image7} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image8} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image9} className='history__image'></img>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='history__avatar'>
                        <img src={image10} className='history__image'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Histories
