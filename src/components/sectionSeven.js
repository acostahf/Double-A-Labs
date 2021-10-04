import React, { useState } from "react"

const SectionSeven = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    company: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <div className="grid lg:grid-cols-2">
      <div className=" p-5 lg:p-20 lg:pr-1">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="flex flex-col lg:text-left text-center"
        >
          <div className="pb-3 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold pb-3 ">
              Start Building Your Own World in Minutes{" "}
            </h1>
            <p className="text-nmr-textGrey">
              We’re a growing team of experts and thought leaders.
            </p>
          </div>
          <input type="hidden" name="form-name" value="contact" />

          <div className="pb-3">
            <input
              id="name"
              type="text"
              onChange={handleChange}
              value={formState.name}
              name="name"
              placeholder="First & Last Name"
              className="border-solid border-2 rounded-lg py-3 px-10 w-full lg:w-2/3"
            />
          </div>
          <div className="pb-3">
            <input
              id="phone"
              type="text"
              onChange={handleChange}
              value={formState.phone}
              name="phone"
              placeholder="Phone"
              className="border-solid border-2 rounded-lg py-3 px-10 w-full lg:w-2/3"
            />
          </div>
          <div className="pb-3">
            <input
              id="company"
              type="text"
              onChange={handleChange}
              value={formState.company}
              name="company"
              placeholder="Your Company Name"
              className="border-solid border-2 rounded-lg py-3 px-10 w-full lg:w-2/3"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue text-sm text-white rounded-lg py-4 px-10"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center bg-room bg-cover bg-no-repeat"></div>
    </div>
  )
}

export default SectionSeven
