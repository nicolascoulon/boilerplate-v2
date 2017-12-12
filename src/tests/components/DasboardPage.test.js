import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import { shallow } from 'enzyme';



test('should render DashboardPage corrctly', () => {
const wrapper = shallow(<DashboardPage />); 
expect(wrapper).toMatchSnapshot();  
});
