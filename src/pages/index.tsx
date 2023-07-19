import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';
import { Content } from '../templates/Content';
import { Origins } from '../templates/Origins';
import { VerticalFeatures } from '../templates/VerticalFeatures';

const Index = () => (
  <Base>
    <Content />
    <VerticalFeatures />
    <Banner />
    <Origins />
  </Base>
);
export default Index;
