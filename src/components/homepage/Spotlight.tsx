import React from "react"
import type { Spotlight } from "../../types/homepage"

interface Props {
  spotlight: Spotlight
}

const SpotlightSection: React.FC<Props> = ({ spotlight }) => {
  if (!spotlight) return null

  return (
    <section className="bg-gradient-to-r from-[#005ab7]/10 to-blue-50 p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8">
      <img
        src={spotlight.imageUrl}
        alt={spotlight.title}
        className="w-full md:w-1/2 h-64 object-cover rounded-xl"
      />
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-[#005ab7]">{spotlight.title}</h2>
        <p className="text-gray-700 mb-6">{spotlight.description}</p>
        <a
          href={spotlight.callToActionLink}
          className="inline-block bg-[#005ab7] text-white px-6 py-3 rounded-full hover:bg-[#134596] transition-colors font-semibold"
        >
          {spotlight.callToActionText}
        </a>
      </div>
    </section>
  )
}

export default SpotlightSection
