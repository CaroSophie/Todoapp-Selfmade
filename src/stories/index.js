import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Todo from '../Components/Todo'
import Progressbar from '../Components/Progressbar'
import Button from '../Components/Button'
import Counter from '../Components/Counter'
import Delete from '../Components/Delete'
import Input from '../Components/Input'
import Separator from '../Components/Separator'

storiesOf('Todo', module)
  .addDecorator(withKnobs)
  .add('TODO', () => (
    <Todo
      text={text('Label', 'Todo')}
      done={boolean('Change to done', false)}
      toggle={action('toggled')}
    />
  ))
  .addDecorator(withKnobs)
  .add('DONE', () => (
    <Todo
      text={text('Label', 'Done')}
      done={boolean('Clicked', true)}
      toggle={action('toggled')}
    />
  ))

storiesOf('Progressbar', module)
  .addDecorator(withKnobs)
  .add('Show percents', () => (
    <Progressbar percentage={number('Progress', '0.3')} />
  ))

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Togglebutton', () => (
    <Button
      defaultText={text('Label', 'Just kidding')}
      alternativeText={text('Label', 'Click here')}
      onClick={() => console.log('click')}
    />
  ))

storiesOf('Counter', module)
  .addDecorator(withKnobs)
  .add('Counting', () => <Counter num={number('Counter', '1')} />)

storiesOf('Delete', module)
  .addDecorator(withKnobs)
  .add('Deletebutton', () => <Delete handleDelete={action('delete Todo')} />)

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Press enter', () => <Input onEnter={action('Show written input')} />)

storiesOf('Separator', module)
  .addDecorator(withKnobs)
  .add('TODO', () => <Separator text="TODO" />)
  .add('DONE', () => <Separator text="DONE" />)
