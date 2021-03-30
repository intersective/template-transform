import { transform } from '../index';

it('1. get the settings of a user', async () => {
  const result = transform('1', '1', "{'name': 'Practera'}");
  expect(result).toMatchSnapshot();
});

it('2. parsing an email', async () => {
  const result = transform('em', 'ail', {message: {body: {html: '<i>Hello World</i>', text: 'Hello World'}}});
  expect(result).toMatchSnapshot();
});

it('3. parsing a sms', async () => {
  const result = transform('s', 'ms', {message: {title: 'sweet', body: 'dude'}});
  expect(result).toMatchSnapshot();
});

it('4. parsing a fasdf', async () => {
  const result = transform('fas', 'df', {message: {title: 'dude', body: 'sweet'}});
  expect(result).toMatchSnapshot();
});
