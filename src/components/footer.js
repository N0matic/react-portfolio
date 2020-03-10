import React from 'react'
import github from '../pages/images/icons/github.png'
import linkedin from '../pages/images/icons/linkedin.png'
import mail from '../pages/images/icons/mail.png'

function Footer() {
  return (
    <div className="flex justify-around mt-0 lg:mt-12">
      <a href="https://github.com/N0matic">
        <img src={github} alt="github icon" className="w-12 h-12" />
      </a>
      <a href="https://www.linkedin.com/in/z-naddaf-b22971191/">
        <img src={linkedin} alt="linkedin icon" className="w-12 h-12" />
      </a>
      <a href="mailto: znaddaf@gmail.com">
        <img src={mail} alt="mail icon" className="w-12 h-12" />
      </a>
    </div>
  )
}

export default Footer