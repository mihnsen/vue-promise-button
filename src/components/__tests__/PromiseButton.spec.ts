import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PromiseButton from '../PromiseButton.vue'

describe('PromiseButton', () => {
  it('renders properly', () => {
    const wrapper = mount(PromiseButton, {
      props: {
        promise: () => Promise.resolve('foo')
      }
    })
    expect(wrapper.text()).toContain('Loading...')
  })
})
