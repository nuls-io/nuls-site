import React from 'react'

interface ItemProps {
  index: number
  title: string
  desc: string
}
const Item = (props: ItemProps) => {
  const { index, title, desc } = props
  return (
    <div className="border border-text rounded-lg py-[32px] pl-[32px] pr-[53px] lg:p-6">
      <h3 className="w-[53px] h-[34px] leading-[34px] text-center bg-text rounded-lg font-medium text-white">
        {index}
      </h3>
      <h3 className="text-2xl text-main font-bold mt-6 mb-3 lg:text-xl lg:mt-3">
        {title}
      </h3>
      <p className="text-sm">
        {desc}
      </p>
    </div>
  )
}

const items = [
  { index: 1, title: 'Download Wallet', desc: 'Metamask or Nabox Wallet, both are compatible with ENULS blockchain.' },
  { index: 2, title: 'Add Network', desc: 'Add the ENULS node RPC to your wallet' },
  { index: 3, title: 'Explore', desc: 'Explore our Ecosystem' },
]

function InteractWithENULS() {
  return (
    <section className="py-[145px] bg-sub lg:py-[74px] lg:px-6">
      <div className="wrap">
        <h3 className="text-[40px] leading-[50px] font-medium w-[433px] mb-[56px] lg:text-32 lg:w-full lg:text-center lg:mb-10">
          It's Easy Interact With{' '}
          <span className="text-main">ENULS Mainnet</span>
        </h3>
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-3">
          {items.map(item => <Item key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  )
}

export default InteractWithENULS
