import React from 'react';
import Button from './Button';

export default {
    component: Button,
    label: 'Button',
    title: 'components/Button',
};

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
    outline: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    label: 'Button',
    outline: false,
};

export const Outline = Template.bind({});
Outline.args = {
    primary: false,
    label: 'Button',
    outline: true,
};

export const Small = Template.bind({});
Small.args = {
    primary: false,
    label: 'Button',
    outline: false,
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    primary: false,
    label: 'Button',
    outline: false,
    size: 'medium',
};


export const Large = Template.bind({});
Large.args = {
    primary: false,
    label: 'Button',
    outline: false,
    size: 'large',
};