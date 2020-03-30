import React from 'react'
import github from '../pages/images/icons/github.png'
import linkedin from '../pages/images/icons/linkedin.png'
import mail from '../pages/images/icons/mail.png'

function Footer() {
  return (
    <div>
      <p className="font-sans italic text-center mt-5">// C O N T A C T - M E :</p>
      <div className="flex justify-center md:justify-around mt-2 md:mt-5 bottom-0 font-sans">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/N0matic" className="hover:text-blue-400">
          <p className="text-sm italic font-semibold">.github</p>
          <img src={github} alt="github icon" className="w-12 h-12 mr-4 object-center" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/z-naddaf-b22971191/" className="hover:text-blue-400">
          <p className="text-sm italic font-semibold">.linkedIn</p>
          <img src={linkedin} alt="linkedin icon" className="w-12 h-12 mr-4" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto: znaddaf@gmail.com" className="hover:text-blue-400">
          <p className="text-sm italic font-semibold">.email</p>
          <img src={mail} alt="mail icon" className="w-12 h-12" />
        </a>
      </div>
    </div>
  )
}

export default Footer