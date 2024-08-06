import  { ChangeEvent } from 'react'


interface LabelInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent  <HTMLInputElement>) => void;
    type? : string;
  
}
const Labelnput = ({label,placeholder,onChange,type}:LabelInputType) => {
  return (
    <div>
          <label className='block mb-2 text-sm font-medium text-black pt-4'>{label}</label>
          <input type={type || "text"} onChange={onChange} id = "userName" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder={placeholder} required/>
    </div>
  )
}

export default Labelnput