import uploadImg from '../../public/upload_img.png'

const UploadImg = () => {
  return (
    <div className="flex justify-center items-center bg-zinc-800 w-2/3 h-2/3 m-10 rounded-xl text-gray-200">
      <img src={uploadImg} alt="upload_img" className=
      "invert cursor-pointer"/>
    </div>
  )
}

export default UploadImg
