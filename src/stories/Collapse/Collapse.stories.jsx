import React from 'react';

import { Collapse } from './Collapse';

export default {
    title: 'Example/Collapse',
    component: Collapse
}

const Template = (args) => <Collapse {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Titulo del collapse'
}