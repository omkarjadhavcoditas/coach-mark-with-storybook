import { Coach } from './Coach-mark';
import './Coach-mark.css';

export default {
    title: 'Coach Mark',
    argTypes: {
        title: { control: 'text', required: true },
        description: { control: 'text', required: true }
    }
};

const Template = (args) => Coach(args);

export const Mark = Template.bind({});
Mark.args = {
    title: 'Title',
    description: 'Description for the lorem ipsum frk kisyod knew weliopd josd jereona iefor iertt  erter er',
};