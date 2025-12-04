const ToggleType = ({ setType, type }) => {
  return (
    <div className="flex w-2/5 items-center h-1/15 text-2xl">
      <div className="flex-1 bg-zinc-800 text-center border-r cursor-pointer hover:bg-gray-400" onClick={() => setType("txt")}>
        {
          type === "txt"
            ? <div className="bg-gray-200">text</div>
            : <div className="bg-zinc-800">text</div>
        }
      </div>
      <div className="flex-1 text-center bg-gray-800 border-l cursor-pointer hover:bg-gray-400" onClick={() => setType("img")}>
        {
          type === "img"
            ? <div className="bg-gray-200">image</div>
            : <div className="bg-zinc-800">image</div>
        }
      </div>
    </div>
  )
}

export default ToggleType
