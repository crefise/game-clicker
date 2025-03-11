import { shallowMount } from '@vue/test-utils'
import PowerStatus from '../TestEachTest.vue'

describe('TestEachTest component', () => {
  test.each([
    [120, 'You are super powerful!'],
    [90, 'You are just powerful!'],
    [70, 'You are strong!'],
    [50, 'You are not strong!'],
    [20, 'You are bad!'],
    [0, 'You are dead('],
    [-10, 'You are dead(']
  ])('renders correct status for power: %i', (power, expectedStatus) => {
    const wrapper = shallowMount(PowerStatus, {
      props: { power }
    })

    expect(wrapper.text()).toContain(expectedStatus)
    expect(wrapper.html()).toMatchSnapshot()
  })
})