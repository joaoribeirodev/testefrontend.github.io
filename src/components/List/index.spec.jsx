import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './index.jsx';

import data from '../../../data/data.json';

configure({adapter: new Adapter()});

let component = null;

describe('Testing the List component', function() {
    beforeEach(() => {
        component = mount(<List data={data}/>);
    });

    it('should be have a input rendered', function() {
        expect(component.find('input').at(0)).toHaveLength(1);
    });

    it('should be have a input value like false', function() {
        expect(component.find('input').at(0).prop('value')).toBeFalsy();
    });

    it('should be have a 54 .init classes length in DOM renered', function() {
        expect(component.find('.init')).toHaveLength(54);
    });

    it('should return a first label a hash', function() {
        const id = '2469bdab-23b5-4cb8-90c9-c609a49410b0';
        expect(component.find('label').at(0).prop('htmlFor')).toEqual(id);
    });
});
