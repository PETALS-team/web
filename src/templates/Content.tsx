import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Content = () => (
  <Background color="bg-amber-300">
    <Section>
      <h2 className="text-2xl">What is PETALS?</h2>
      <p>
        PETALS is a framework to help improve team health, rapidly and
        regularly, with a tried and tested method from large tech organisations.
      </p>
    </Section>
  </Background>
);

export { Content };
