import React from "react"

const AnimatedText = () => {
  return (
    <div className="bg-nmr-LightGray p-10">
      <div>
        <h1 className="text-3xl text-nmr-midnight  ">
          Use our platform to{" "}
          <div className="codinfox-changing-keywords" id="change">
            <span className="nmr-loop bg-clip-text text-transparent bg-gradient-to-r from-nmr-bgBlue to-nmr-yellow">
              increase sales
            </span>
            <span className="nmr-loop bg-clip-text text-transparent bg-gradient-to-r from-nmr-bgBlue to-nmr-yellow">
              boost employee engagement
            </span>
            <span className="nmr-loop bg-clip-text text-transparent bg-gradient-to-r from-nmr-bgBlue to-nmr-yellow">
              build brand loyalty
            </span>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default AnimatedText
