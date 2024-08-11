import {Suspense} from 'react'

import {Product} from '@/types/product'
import {getWorks} from '##/index/Works'

import Container from '#/Global/Container'
import Block from '#/UI/Block'
import WorksPlate from '##/works/WorksPlate'

export default async function WorksPage() {
  const works: Product[] = await getWorks()

  if (!works) {
    return <mark>Thank's for your help!</mark>
  }

  works.sort((a, b) => a.id - b.id)

  return (
    <Container>
      <Block token={'works-index'} className="space-y-3" heading="my works">
        <Suspense>
          <WorksPlate works={works} />
        </Suspense>
      </Block>
    </Container>
  )
}
