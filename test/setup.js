// as suggested at https://stackoverflow.com/a/46628165/9080015
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });