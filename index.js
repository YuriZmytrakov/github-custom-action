import * as core from '@actions/core';

const name = core.getInput('name');
const output_value = `Hello ${name}`;

core.setOuput('greeting', output_value);