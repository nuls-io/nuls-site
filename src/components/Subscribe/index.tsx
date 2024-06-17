'use client'

import React, { FormEvent, useState, useRef } from 'react'

function Subscribe() {
  const [subscribed, setSubscribed] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSubscribe(event: FormEvent) {
    console.log(inputRef.current?.value, 234234)
    event.preventDefault()
    if (!inputRef.current?.value) return
    const fetchResult: any = await fetch('https://sys.nuls.io/api/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        source: 'nuls.io', //location.hostname,
        email: inputRef.current?.value
      })
    })
    const result = await fetchResult.json();
    if (result.code === 0) {
      setSubscribed(true)
    }    
  }
  return (
    <section className="py-[95px] bg-main lg:py-[54px]">
      <div className="wrap flex justify-between items-center flex-wrap">
        <h3 className="w-[612px] text-[26px] leading-[32px] font-bold flex-1 lg:w-full lg:text-2xl lg:text-center lg:mb-10 lg:px-6">
          Receive occasional updates about the NULS network and our latest
          innovations
        </h3>
        {subscribed ? (
          <div className="flex flex-wrap lg:w-full lg:px-4">
            <h3 className="text-32 font-bold text-special lg:w-full lg:text-3xl lg:text-center">
              Thank You! <br className="lg:hidden" />
              We’ve received your submission!
            </h3>
          </div>
        ) : (
          <form
            className="flex flex-wrap lg:w-full lg:px-4"
            onSubmit={handleSubscribe}>
            <input
              ref={inputRef}
              required
              type="email"
              placeholder="Email Address"
              className="placeholder:text-text outline-0 border border-text rounded-lg px-6 py-4 bg-[transparent] text-2xl font-semibold mr-[14px] lg:w-full lg:text-xl lg:rounded-[54px] lg:mr-0 lg:mb-[14px]"
            />
            <button
              type="submit"
              className="h-[64px] leading-[64px] bg-text rounded-lg text-center text-xl text-main px-[35px] cursor-pointer hover:opacity-70 lg:w-full lg:text-[20px] lg:rounded-[54px]">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Subscribe
