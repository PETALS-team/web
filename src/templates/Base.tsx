import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Content } from './Content';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Origins } from './Origins';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-800 font-gaegu">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Content />
    <VerticalFeatures />
    <Banner />
    <Origins />
    <Footer />
  </div>
);

export { Base };
