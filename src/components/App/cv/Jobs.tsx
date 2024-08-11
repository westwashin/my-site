import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

import IkitasImage from '%/cv/ikitas.jpg'
import GoldApparelImage from '%/cv/goldapparel.png'

const jobsData: any = {
  heading: 'work',
  text: 'Below is a list of companies where I have worked as a <span class="text-white">Software Developer</span>',
  items: {
    'ikitas': {
      title: 'Internship',
      caption: 'Laravel Backend Developer',
      duration: 'Jan 2021 - Feb 2021',
      link: '/works',
      icon: IkitasImage,
    },
    'gold-apparel': {
      title: 'CV Gold Apparel',
      caption: 'Manager',
      duration: 'Apr 2021 - Jan 2023',
      link: '/works',
      icon: GoldApparelImage,
    },
  },
}
const {heading, text, items} = jobsData

export default function Jobs() {
  return (
    <Block token={'jobs-cv'} heading={heading} text={text} className="space-y-4">
      <div className="space-y-6">
        {Object.keys(items).map((key) => {
          const job = items[key]
          return <ItemLink key={key} {...job} />
        })}
      </div>
    </Block>
  )
}
