import React from "react";
import {render} from "enzyme";
import ActionButton from '../components/ActionButton';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it("Displays right active label",()=>{
    const dispatch=jest.fn()
    const ab=render(<ActionButton useDispatchButton={dispatch}>ClickMe</ActionButton>)
    expect(ab.find('.MuiButton-label').text()).toBe("ClickMe");
})

