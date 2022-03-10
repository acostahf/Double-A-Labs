import React, { useState } from "react"

const SectionSeven = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    needs: "",
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
          <div className="pb-3 px-4 lg:px-0 text-center lg:text-left">
            <h1 className="text-4xl text-nmr-midnight max-w-md pb-3 ">
              Learn How to Grow Your Brand and Build Your Business in the
              Metaverse.
            </h1>
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
              id="email"
              type="text"
              onChange={handleChange}
              value={formState.email}
              name="phone"
              placeholder="Email Address"
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
          <div className="pb-3">
            <input
              id="needs"
              type="text"
              onChange={handleChange}
              value={formState.needs}
              name="needs"
              placeholder="Tell Us Your Needs"
              className="border-solid border-2 rounded-lg py-3 px-10 w-full lg:w-2/3"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-nmr-red text-sm text-white rounded-3xl py-4 px-10"
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
