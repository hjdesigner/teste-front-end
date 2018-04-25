import 'raf/polyfill'
import React from 'react'
import Play from './index'
import { Link } from 'react-router-dom'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe(<Play />, () => {
  let wrapper, data
  beforeEach(() => {
    data = {
      'kind': 'youtube#video',
      'etag': '\'ZG3FIn5B5vcHjQiQ9nDOCWdxwWo/VQ6qNjmnfWdygIYDm2WdF72ItYY\'',
      'id': 'yzpB3Jyi_BA',
      'snippet': {
        'publishedAt': '2018-03-16T00:35:45.000Z',
        'channelId': 'UCtrjFP7i92_30uv6IehwE5Q',
        'title': 'A morte de Marielle Franco',
        'description': 'Este é um vídeo excepcional, uma tentativa de elaborar e entender o motivo da comoção pública com a morte violenta da vereadora Marielle Franco.',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/yzpB3Jyi_BA/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/yzpB3Jyi_BA/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/yzpB3Jyi_BA/hqdefault.jpg',
            'width': 480,
            'height': 360
          },
          'standard': {
            'url': 'https://i.ytimg.com/vi/yzpB3Jyi_BA/sddefault.jpg',
            'width': 640,
            'height': 480
          },
          'maxres': {
            'url': 'https://i.ytimg.com/vi/yzpB3Jyi_BA/maxresdefault.jpg',
            'width': 1280,
            'height': 720
          }
        },
        'channelTitle': 'Cadê a chave?',
        'tags': [
          'Leon',
          'Martins',
          'Nilce',
          'Moretto',
          'nilmoretto',
          'leon',
          'intercambio',
          'intercâmbio',
          'imigrar',
          'br',
          'pt',
          'ptbr',
          'daily',
          'vlog',
          'Canada',
          'sinusite',
          'morte',
          'Marielle Franco',
          'crime',
          'pm',
          'execução',
          'Rio de Janeiro',
          'Brasil'
        ],
        'categoryId': '24',
        'liveBroadcastContent': 'none',
        'localized': {
          'title': 'A morte de Marielle Franco',
          'description': 'Este é um vídeo excepcional, uma tentativa de elaborar e entender o motivo da comoção pública com a morte violenta da vereadora Marielle Franco.'
        }
      },
      'statistics': {
        'viewCount': '701930',
        'likeCount': '118529',
        'dislikeCount': '14953',
        'favoriteCount': '0',
        'commentCount': '12782'
      }
    }
    wrapper = shallow(<Play item={data} />)
  })

  it('Should return className play', () => {
    expect(wrapper.find('.play')).to.have.length(1)
  })
  it('Should return iframe', () => {
    expect(wrapper.find('iframe')).to.have.length(1)
  })
  it('Should contain title with text equal to date', () => {
    const title = wrapper.find('.title')
    expect(title.text()).to.equal('A morte de Marielle Franco')
  })
  it('Should contain views with number equal to date', () => {
    const views = wrapper.find('.views')
    expect(views.text()).to.equal('visualizações: 701930')
  })
  it('Should contain description with text equal to date', () => {
    const description = wrapper.find('.play-description p')
    expect(description.text()).to.equal('Este é um vídeo excepcional, uma tentativa de elaborar e entender o motivo da comoção pública com a morte violenta da vereadora Marielle Franco.')
  })
  it('Should contain black with text equal to Voltar para os resultados', () => {
    expect(wrapper.contains(<Link to='/'>Voltar para o resultados</Link>)).to.equal(true)
  })
})
