import 'raf/polyfill'
import React from 'react'
import Showcase from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Showcase />', () => {
  let wrapper1, wrapper2, data1, data2
  beforeEach(() => {
    data1 = [
      {
        'kind': 'youtube#searchResult',
        'etag': '\'ZG3FIn5B5vcHjQiQ9nDOCWdxwWo/9MG0AxDhlqFWpYWfJk0ycLitzVs\'',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'jksTmnsxe3M'
        },
        'snippet': {
          'publishedAt': '2013-12-29T21:00:01.000Z',
          'channelId': 'UCtrjFP7i92_30uv6IehwE5Q',
          'title': 'AS PIORES PIADAS DO MUNDO!!! - Ep. 08',
          'description': 'GOSTOU? DEIXE O SEU JOINHA!!! Twitter da Nilce: @nilmoretto Facebook da Nilce: /nilmoretto Instagram da Nilce: @nilmoretto Twitter do Leon: @cdnleon Facebook do Leon: /coisadenerd Instagram...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/jksTmnsxe3M/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/jksTmnsxe3M/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/jksTmnsxe3M/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'Cadê a chave?',
          'liveBroadcastContent': 'none'
        }
      }
    ]
    data2 = [
      {
        'kind': 'youtube#searchResult',
        'etag': '\'ZG3FIn5B5vcHjQiQ9nDOCWdxwWo/9MG0AxDhlqFWpYWfJk0ycLitzVs\'',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'jksTmnsxe3M'
        },
        'snippet': {
          'publishedAt': '2013-12-29T21:00:01.000Z',
          'channelId': 'UCtrjFP7i92_30uv6IehwE5Q',
          'title': 'AS PIORES PIADAS DO MUNDO!!! - Ep. 08',
          'description': 'GOSTOU? DEIXE O SEU JOINHA!!! Twitter da Nilce: @nilmoretto Facebook da Nilce: /nilmoretto Instagram da Nilce: @nilmoretto Twitter do Leon: @cdnleon Facebook do Leon: /coisadenerd Instagram...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/jksTmnsxe3M/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/jksTmnsxe3M/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/jksTmnsxe3M/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'Cadê a chave?',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '\'ZG3FIn5B5vcHjQiQ9nDOCWdxwWo/vHa5WFSJyTzH0vXaUVIbifFkiY8\'',
        'id': {
          'kind': 'youtube#video',
          'videoId': '5k7pk272Lrw'
        },
        'snippet': {
          'publishedAt': '2013-12-21T20:49:33.000Z',
          'channelId': 'UCtrjFP7i92_30uv6IehwE5Q',
          'title': 'Leon que ama a Nilce que ama... o Jaime?- Ep. 01',
          'description': 'Gostou? Joinha! Inscreva-se no canal e acompanhe a saga que só está começando. ;)',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/5k7pk272Lrw/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/5k7pk272Lrw/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/5k7pk272Lrw/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'Cadê a chave?',
          'liveBroadcastContent': 'none'
        }
      }
    ]
    wrapper1 = shallow(<Showcase items={data1} />)
    wrapper2 = shallow(<Showcase items={data2} />)
  })
  it('Wrapper1 should return one li', () => {
    expect(wrapper1.find('li')).to.have.length(1)
  })
  it('Wrapper1 should contain link whit data-id correct equal videoId', () => {
    expect(wrapper1.find('[data-id="jksTmnsxe3M"]')).to.have.length(1)
  })
  it('Wrapper1 should contain image correct equal date1', () => {
    const image = wrapper1.find('figure')
    expect(image.contains(<img src='https://i.ytimg.com/vi/jksTmnsxe3M/mqdefault.jpg' />)).to.equal(true)
  })
  it('Wrapper1 should contain title equal date1', () => {
    const title = wrapper1.find('h2')
    expect(title.text()).to.equal('AS PIORES PIADAS DO MUNDO!!! - Ep. 08')
  })
  it('Wrapper1 should contain description equal date1', () => {
    const description = wrapper1.find('p')
    expect(description.text()).to.equal('GOSTOU? DEIXE O SEU JOINHA!!! Twitter da Nilce: @nilmoretto Facebook da Nilce: /nilmoretto Instagram da Nilce: @nilmoretto Twitter do Leon: @cdnleon Facebook do Leon: /coisadenerd Instagram...')
  })
  it('Wrapper2 should return two li', () => {
    expect(wrapper2.find('li')).to.have.length(2)
  })
  it('Wrapper2 should contain link whit data-id correct equal videoId', () => {
    expect(wrapper2.find('[data-id="jksTmnsxe3M"]')).to.have.length(1)
  })
  it('Wrapper2 should contain link whit data-id correct equal videoId', () => {
    expect(wrapper2.find('[data-id="5k7pk272Lrw"]')).to.have.length(1)
  })
  it('Wrapper2 should contain image correct equal date2', () => {
    const image2 = wrapper2.find('figure').at(1)
    expect(image2.contains(<img src='https://i.ytimg.com/vi/5k7pk272Lrw/mqdefault.jpg' />)).to.equal(true)
  })
  it('Wrapper2 should contain title equal date2', () => {
    const title2 = wrapper2.find('h2').at(1)
    expect(title2.text()).to.equal('Leon que ama a Nilce que ama... o Jaime?- Ep. 01')
  })
  it('Wrapper2 should contain description equal date2', () => {
    const description2 = wrapper2.find('p').at(1)
    expect(description2.text()).to.equal('Gostou? Joinha! Inscreva-se no canal e acompanhe a saga que só está começando. ;)')
  })
})
