import { shallowMount } from '@vue/test-utils'
import SnapshotsTest from '../SnapshotsTest';

test('Snapshot test', () => {
  const wrapper = shallowMount(SnapshotsTest, {
    props: {
      message: 'Hello new snapshot!',
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})