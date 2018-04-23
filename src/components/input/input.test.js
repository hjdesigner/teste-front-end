import 'raf/polyfill'
import React from 'react'
import InputForm from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<InputForm />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<InputForm label='Procurar' />)
  })
  it('Should return Input', () => {
    expect(wrapper.find('Input')).to.have.length(1)
  })
  it('Should return prop label correct', () => {
    expect(wrapper.instance().props.label).to.equal('Procurar')
  })
})
