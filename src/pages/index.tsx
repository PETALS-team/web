import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';
import { Content } from '../templates/Content';
import { Origins } from '../templates/Origins';
import { VerticalFeatures } from '../templates/VerticalFeatures';

const Index = () => (
  <Base>
    <Banner />
    <Content />
    <VerticalFeatures />
    <Origins />
  </Base>
);
export default Index;
