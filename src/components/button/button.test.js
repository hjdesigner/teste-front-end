import 'raf/polyfill'
import React from 'react'
import ButtonForm from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe(<ButtonForm />, () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ButtonForm label='Buscar' />)
  })
  it('Should return Button', () => {
    expect(wrapper.find('Button')).to.have.length(1)
  })
  it('Should return text Buscar', () => {
    expect(wrapper.contains('Buscar')).to.equal(true)
  })
})
