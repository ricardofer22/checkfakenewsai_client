import ToggleType from "./ToggleType"
import UploadImg from "./UploadImg"
import TextBox from "./TextBox"
import { useState } from "react"

const TypeSelector = () => {
  const [type, setType] = useState("")

  return (
    <div className="bg-zinc-900 flex flex-col items-center rounded-xl p-3 md:w-1/2 md:h-1/2 m-30 xl:w-1/3 xl:h-2/3">
      <ToggleType setType={setType} type={type}></ToggleType>
      {
        type === "txt"
        ? <TextBox></TextBox>
        : <UploadImg></UploadImg>
      }
      <div className="bg-red-700 text-gray-200 cursor-pointer hover:bg-red-500 text-2xl p-3 rounded-xl">Check</div>
    </div>
  )
}

export default TypeSelector
