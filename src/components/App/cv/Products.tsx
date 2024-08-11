import {Product} from '@/types/product'
import {getWorks} from '##/index/Works'
import {getProjects} from '##/index/Projects'

import Block from '#/UI/Block'
import ProductCard from '#/UI/ProductCard'
import Button from '#/UI/Button'

const productList = {
  1: 'murino-arena',
  2: 'udelnaya',
}

const productsData = {
  heading: 'projects',
  text: 'Explore some of the personal <span class="text-white">projects</span> I have worked on, showcasing my expertise and creativity in development.',
}
const {heading, text} = productsData

export default async function Products() {
  const works: Product[] = await getWorks()
  const projects: Product[] = await getProjects()

  if (!works || !projects) {
    return <mark>An error occurred while receiving data!</mark>
  }

  const allProducts = [...works, ...projects]
  const slugsInOrder = Object.values(productList)
  const products = allProducts.filter((product) => slugsInOrder.includes(product.slug)).sort((a, b) => slugsInOrder.indexOf(a.slug) - slugsInOrder.indexOf(b.slug))

  return (
    <Block token={'products-cv'} heading={heading} text={text}>
      <div className="flex flex-col gap-5 sm:gap-4">
        {products.map((product, index) => (
          <ProductCard type="work" product={product} key={index} />
        ))}
      </div>

      <Button link="/works" text="View All" />
    </Block>
  )
}
