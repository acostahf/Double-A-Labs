import React from "react"

const Modal = ({ toggleModal }) => {
  return (
    <div>
      <div
        class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full flex justify-center  max-w-lg p-5 relative  rounded-xl shadow-lg  bg-bl ">
          <div className="">
            <div className="w-full flex justify-end">
              <button
                onClick={() => toggleModal()}
                className="pb-5 font-black text-3xl text-white  text-right "
              >
                X
              </button>
            </div>
            <iframe
              width="1200"
              height="600"
              src="https://www.youtube.com/embed/DYcxd8g0REc"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
