import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

import UnnesImage from '%/cv/unnes.jpg'

const education: any = {
  'unnes': {
    title: 'Universitas Negeri Semarang',
    caption: 'S1 Teknik Informatika',
    duration: 'Aug 2018 - Oct 2023',
    link: '',
    icon: UnnesImage,
  },
}

export default function Education() {
  return (
    <Block token={'education-cv'} heading="education" className="space-y-4">
      {Object.keys(education).map((key) => {
        const job = education[key]
        return <ItemLink key={key} {...job} />
      })}
    </Block>
  )
}
