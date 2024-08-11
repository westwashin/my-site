import Link from 'next/link'

import Block from '#/UI/Block'
import Text from '#/UI/Text'
import ArrowLink from '#/UI/ArrowLink'

import {links} from '@/lib/constants'

export default function GetMe() {
  return (
    <Block token={'touch-cv'} heading="get in touch" className="space-y-4">
      <Text>
        Want to hire me? Got a question or need a website? Feel free to{' '}
        <Link className="text-white underline hover:no-underline underline-offset-2" href={links.email.url}>
          email me
        </Link>{' '}
        directly. Try finding me anywhere else at{' '}
        <Link target="_blank" href="https://www.google.com/search?q=westwashin" className="text-white">
          @syujazr
        </Link>
      </Text>

      <div className="flex gap-5 xl:gap-3.5 sm:flex-wrap sm:gap-x-3.5 sm:gap-y-2 text-neutral-300">
        {Object.entries(links).map(([key, link]) => (
          <ArrowLink key={key} href={link.url} text={link.text} className={key == 'inst' ? 'sm:hidden' : ''} />
        ))}
      </div>
    </Block>
  )
}
