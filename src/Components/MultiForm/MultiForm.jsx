import React from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import '@tailwindcss/forms'




export default function MultiForm() {
  return (
    <div className="md:w-1/2 mx auto shadow-xl  rounded-2x1 pb-2 bg-white">
      {/*Spetter */}
      <div className="container horizontal mt-5">
      <Stepper/>
      </div>
      {/*SpetterControl */}
      <StepperControl/>
    </div>
  )
}
