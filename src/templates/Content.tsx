import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Content = () => (
  <Background color="bg-amber-300">
    <Section>
      <div className="text-center text-xl">
        <h2 className="text-4xl text-gray-900 font-bold pb-10">
          Why use PETALS?
        </h2>
        <p>
          Do you find your team&apos;s morale peaks and troughs without any
          direction?
        </p>
        <p>
          Have you observed teams you lead struggle to identify improvement
          areas?
        </p>
        <p>
          Are teams you&apos;re working with suggesting they&apos;re awesome but
          can&apos;t pinpoint why?
        </p>
        <p className="pt-20">
          <strong>
            PETALS is a framework to help improve team health, rapidly and
            regularly, with a tried and tested method from large tech
            organisations.
          </strong>
        </p>
      </div>
    </Section>
  </Background>
);

export { Content };
