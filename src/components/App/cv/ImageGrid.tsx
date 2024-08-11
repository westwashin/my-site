import Image from 'next/image'

import MountainTurkeyImage from '%/cv/grid/mountain-turkey.jpeg'
import RunningMarathonImage from '%/cv/grid/running-marathon.jpeg'
import VkFestImage from '%/cv/grid/vk-fest.jpeg'
import MoscowCityImage from '%/cv/grid/moskow-city.jpeg'
import VkFestConcertImage from '%/cv/grid/vkfest-concert.jpeg'
import MoskowSubwayImage from '%/cv/grid/moskow-subway.jpeg'

type GridData = {
  main: Record<
    string,
    {
      src: any
      video?: boolean
      classes: string
      alt: string
    }
  >
}

const gridImageHeight = 'h-44 xl:h-32 sm:h-40 xs:h-32'

const gridData: GridData = {
  main: {
    'vkfest-concert': {
      src: VkFestConcertImage,
      alt: 'Me at a concert at VK Fest 2024',
      classes: `${gridImageHeight} sm:col-span-2`,
    },
    'vk-fest': {
      src: VkFestImage,
      alt: 'Me in the volunteer team at VK Fest 2024',
      classes: 'row-span-2 sm:row-span-1',
    },
    'running-marathon': {
      src: RunningMarathonImage,
      alt: 'Me at a running marathon in Sochi at the World Youth Festival 2024',
      classes: gridImageHeight,
    },
    'mountain-turkey': {
      src: MountainTurkeyImage,
      alt: 'Me on some mountain in Turkey',
      classes: 'row-span-2 sm:hidden',
    },
    'moskow-subway': {
      src: MoskowSubwayImage,
      alt: 'Me somewhere between the skyscrapers in Moscow City',
      classes: 'row-span-2 sm:row-span-1',
    },
    'moskow-city': {
      src: MoscowCityImage,
      alt: 'Me in the Moscow Metro',
      classes: gridImageHeight,
    },
  },
}

export default function ImageGrid() {
  return (
    <section data-section="hero-cv">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 xl:gap-3 sm:gap-2.5 sm:grid-cols-2">
        {Object.entries(gridData.main).map(([key, {src, alt, classes, video}]) => (
          <div key={key} className={`relative rounded-lg overflow-hidden ${classes}`}>
            {video ? (
              <video className="object-cover s-full" width="100%" height="100%" muted loop autoPlay playsInline preload="auto">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image quality={100} alt={alt} src={src} fill sizes="35vw" priority className="object-cover sm:object-center" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
