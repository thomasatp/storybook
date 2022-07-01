import React from 'react';
import ArrowDown from './ArrowDown';

export default {
    component: ArrowDown,
    label: 'ArrowDown',
    title: 'Icons/ArrowDown',
};

const Template = (args) => <ArrowDown {...args}/>

export const Default = Template.bind({});
Default.args = {
    darkMode: false,
    sizeMode: 'medium',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    darkMode: true,
    sizeMode: 'medium',
};

export const Small = Template.bind({});
Small.args = {
    darkMode: false,
    sizeMode: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    darkMode: false,
    sizeMode: 'medium',
};


export const Large = Template.bind({});
Large.args = {
    darkMode: false,
    sizeMode: 'large',
};