import React from "react";
import UsersTable from "../components/UsersTable";
import {shallow} from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import 'whatwg-fetch';

Enzyme.configure({ adapter: new Adapter() });

it("should contain Paper", () => {
    const component = shallow(<UsersTable/>)
    const dataGrid =  component.find("Paper")
    expect(dataGrid.length).toBe(1)
})

