const TextBox = () => {
  return (
     <div className="flex justify-center items-center bg-zinc-800 w-2/3 h-2/3 m-10 rounded-xl">
     <textarea className="text-gray-200 text-xl resize-none overflow-y-auto overflow-x-gidden w-full h-full focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 rounded-xl p-4" placeholder="...">

     </textarea> 
    </div>
  )
}

export default TextBox
