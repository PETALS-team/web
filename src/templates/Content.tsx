import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Content = () => (
  <Background color="bg-amber-300">
    <Section id="Why">
      <div className="text-center">
        <h2 className="text-4xl text-gray-900 font-gaegu font-bold pb-10">
          Why use PETALS?
        </h2>
        <p className="leading-9">
          Do you find your team&apos;s morale peaks and troughs without any
          direction?
        </p>
        <p className="leading-9">
          Have you observed teams you lead struggle to identify improvement
          areas?
        </p>
        <p className="leading-9">
          Are teams you&apos;re working with suggesting they&apos;re awesome but
          can&apos;t pinpoint why?
        </p>
        <p className="pt-20 leading-9">
          <strong className="text-lg">
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
