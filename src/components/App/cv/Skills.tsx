import Block from '#/UI/Block'
import Badge from '#/UI/Badge'

import TsLogo from '%/cv/tech/typescript.svg'
import PythonLogo from '%/cv/tech/python.svg'
import NextLogo from '%/cv/tech/nextjs.svg'
import NodeLogo from '%/cv/tech/node.svg'
import TailwindLogo from '%/cv/tech/tailwind.svg'

const skillsData: any = {
  heading: 'skills',
  text: 'With over 1 years of <span class="text-white">back-end development experience, I specialize in crafting website and delivering high-quality web solutions.',
  techs: {
    ts: {
      name: 'Typescript',
      icon: TsLogo,
    },
    py: {
      name: 'Python',
      icon: PythonLogo,
    },
    nextjs: {
      name: 'NextJS',
      icon: NextLogo,
    },
    nodejs: {
      name: 'NodeJS',
      icon: NodeLogo,
    },
    tailwind: {
      name: 'Tailwind CSS',
      icon: TailwindLogo,
    },
  },
}
const {heading, text, techs} = skillsData

export default function Skills() {
  return (
    <Block token={'skills-cv'} heading={heading} text={text} className="space-y-4">
      <div className="flex flex-wrap gap-2 sm:grid-cols-3 md:grid-cols-4">
        {Object.keys(techs).map((key) => {
          const item = techs[key]
          return <Badge className="text-neutral-200" size="medium" text={item.name} icon={item.icon} key={item} />
        })}
      </div>
    </Block>
  )
}
