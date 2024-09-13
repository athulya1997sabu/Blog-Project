import React from 'react'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'

function Image() {
  return (
    <div className='Image'>
        <table>
        <tr><td><img src={image1} height={200} width={200}/></td>
        <td> <img src={image2} height={200} width={200}/></td>
        <td> <img src={image3} height={200} width={200}/></td>
        </tr>
        </table>
   

    </div>
  )
}

export default Image