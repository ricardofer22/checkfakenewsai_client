import ToggleType from "./ToggleType"
import UploadImg from "./UploadImg"
import TextBox from "./TextBox"
import { useState } from "react"

const TypeSelector = () => {
  const [type, setType] = useState("")

  return (
    <div className="bg-red-500 flex flex-col items-center rounded-xl p-3 w-1/2 h-1/2 m-auto">
      <ToggleType setType={setType} type={type}></ToggleType>
      {
        type === "txt"
        ? <TextBox></TextBox>
        : <UploadImg></UploadImg>
      }
      <div className="bg-blue-500 cursor-pointer hover:bg-blue-300 text-3xl p-3 rounded-xl">Submit</div>
    </div>
  )
}

export default TypeSelector
