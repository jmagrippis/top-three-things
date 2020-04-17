import dynamic from 'next/dynamic'

export const iconToComponent = {
  'binge-watch': dynamic(() => import('./binge-watch.svg')),
  book: dynamic(() => import('./book.svg')),
  music: dynamic(() => import('./music.svg')),
  shop: dynamic(() => import('./shop.svg')),
}
