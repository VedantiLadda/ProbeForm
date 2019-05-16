import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({adapter:new Adapter()});

describe('App counter component',()=>{
  it('start with a count of 0',()=>{
    //create an instnce of App
    var wrapperinstance = shallow(<App/>);
    expect(wrapperinstance.state().count).toEqual(0);
  })
})