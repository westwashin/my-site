import Block from '#/UI/Block'

const aboutData = {
  heading: 'about me',
  text: "I am a Computer Science Freshgraduate, I really like new things that can develop my potential I am intrested in Data Science & Analytics Design, Software Development, and Web Development. Therefore i always want to learn and be able to implement and share knowledge so that it can be useful.",
}
const {heading, text} = aboutData

export default function About() {
  return <Block token={'about-cv'} heading={heading} text={text} />
}
