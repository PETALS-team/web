import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';

const StartedPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="GettingStarted">
        <h1 className="text-4xl font-gaegu text-center mb-6">
          Getting Started with PETALS
        </h1>
        <p className="my-12"> </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative inset-0 ">
            <p className="my-6">
              Introduce PETALS to your team with the &quot;What is PETALS&quot;
              presentation
            </p>
          </div>
          <div className="relative inset-0 ">
            <p className="my-6">
              Capture some data from your team with the Google Toolkit or
              Microsoft Form
            </p>
          </div>
          <div className="relative inset-0 ">
            <p className="my-6">
              Discuss the results as a collective, talk through team avearges
              and individual contributions
            </p>
          </div>
          <div className="relative inset-0 ">
            <p className="my-6">
              Write down actions with owners and goal dates to improve your team
              health
            </p>
          </div>
        </div>
        <Banner />
      </Section>
    </Background>
  </Base>
);

export default StartedPage;
