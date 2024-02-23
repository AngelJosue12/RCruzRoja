import React from 'react' 
import '@tailwindcss/forms'

export default function StepperControl() {
  return (
     
    <div className='container flex justify-around mt-4 mb-8'>
        {/*back button */}
        < button className=" bg-red-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-00 hover:bg-slate-700 hover:text-white transition duration-2oo ease-in-out">
            atras
            </button>

        {/*Next botton */}
        < button className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-2oo ease-in-out">
            siguiente
            </button>
    </div>
  )
}
 