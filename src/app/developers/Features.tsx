import React from 'react'
import clsx from 'clsx'

  interface ItemProps {
    title: string
    desc: string | React.ReactElement
    className?: string
  }
  const Item = ({ title, desc }: ItemProps) => {
    return (
      <div className="h-[313px] bg-[#262628B2] py-8 pl-8 pr-[53px] rounded-lg lg:h-auto lg:p-6">
        <h3 className="text-2xl text-main font-bold mb-5 lg:text-xl lg:mb-3">{title}</h3>
        <p className="text-sm text-white">{desc}</p>
      </div>
    )
  }

const items = [
  {
    title: 'Nulstar™',
    desc: (
      <>
        Nulstar is a micro-service management platform developed by NTC to
        manage various modules based on the microservice architecture.
        Currently, each module of NULS 2.x is under its management.
        <br className="lg:hidden" />
        <br />
        NULStar has a wide range of application scenarios and can be a common
        option for projects based on micro-service architecture as their core
        underlying framework.
      </>
    )
  },
  {
    title: 'NULS Cross-Chain™',
    desc: 'Powered by NerveNetwork, the Cross-Chain module allows you to transfer assets from outside blockchains, such as BTC, ETH, BSC, Heco, OKX Chain to a NULS chain. Short block times and high node count gives NULS the speed of a layer-2 solution, with the security of a layer-1 blockchain. This makes NULS the ideal platform for decentralized exchanges and payment processors.'
  },
  {
    title: 'Module Warehouse™',
    desc: 'Module Warehouse is a module management system and repository where modules can be stored and accessed by ChainBox. Modules can be enhanced with various implementations or functions. Customize a business application module, or use existing modules to build or enhance a chain.'
  },
  {
    title: 'NULS Virtual Machine™',
    desc: 'NULS-VM is a high performance virtual machine cluster with scalability that can be developed using a subset of Java. NULS can seamlessly integrate DAPP developers from other ecosystems with a small learning curve.'
  },
  {
    title: 'NULS Evolution™',
    desc: 'Evolution implements a seamless upgrade mechanism of the blockchain network through automatic voting of consensus nodes. Any node in the network can initiate an upgrade. When the number of votes in the network reaches the specified threshold, the entire network will simultaneously implement the latest protocol. This mechanism eliminates the difficulty of upgrading the blockchain network and prevents hard forks.'
  },
  {
    title: 'Application Toolbox™',
    desc: 'NULS Application Toolkit encapsulates the underlying data of blockchains in the form of HTTP API’s and is used to develop wallets and explorers, saving months of development time.'
  }
]

function Features() {
  return (
    <section className="py-[133px] bg-[url('/home/home5.jpg')] bg-cover bg-center lg:py-[74px] lg:px-6 lg:bg-none lg:bg-text">
      <div className="wrap grid grid-cols-3 gap-6 lg:grid-cols-1">
        {items.map(item => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Features
