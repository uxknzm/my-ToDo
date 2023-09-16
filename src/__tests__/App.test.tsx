import * as React from 'react';
import {shallow} from 'enzyme';

import App from "../App";
import {cleanup} from "@testing-library/react";

describe('<App />', () => {

    afterEach(cleanup);

    it('renders the component without changes', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });

    it("renders the heading", () => {
        const result = shallow(<App />).contains(<h1>Todos</h1>);
        expect(result).toBeTruthy();
    });
})