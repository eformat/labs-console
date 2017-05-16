import React from 'react';
import {shallow, mount, render } from 'enzyme';

//capture all errors and warnings in Jest mock functions
console.error = jest.genMockFunction();
console.warn = jest.genMockFunction();

const path = require('path');
const baseDir = __dirname + '/../../../../';
console.log(baseDir);
const CreateStageForm = require(path.resolve(baseDir + 'components/Forms/CreateStageForm.js')).default;

describe('Create Stage Form test suite', () => {

  it('should set the stage name when a value is passed to the component', () => {
    let handleSubmit = () => {};
    let handleCancel = () => {};
    let topology = {};
    let value = { name: 'Test Stage'};

    const wrapper = mount(
      <CreateStageForm handleSubmit={ handleSubmit } handleCancel={ handleCancel } value={value} topology={topology}/>
    );

    expect(wrapper.find('#input1').html()).toEqual('<input type="text" class="form-control" id="input1" placeholder="stage-name" value="Test Stage">');
    expect(wrapper.find('#input1').props().value).toEqual(value.name);
  });

});