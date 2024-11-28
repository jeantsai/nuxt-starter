import { mount } from '@vue/test-utils';
import SideNav from './SideNav.vue';

describe('SideNav', () => {
  it('renders', () => {
    const wrapper = mount(SideNav);

    const menu = wrapper.get('.p-menu');

    expect(menu).toBeTruthy();
  });
});
