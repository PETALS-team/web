import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const SnapshotsPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="Toolkits">
        <h1 className="text-4xl font-gaegu text-center mb-6">
          PETALS Toolkits
        </h1>
        <p className="my-12">
          If you want to start using PETALS in your teams, there are a number of
          toolkits available that might help you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="MicrosoftToolkit" className="relative inset-0 ">
            <img
              src="/assets/images/office-logo.png"
              alt="Microsoft Office"
              className=" w-10 m-auto"
            />
            <h2 className="text-3xl font-gaegu text-center mb-6">
              Microsoft Toolkit
            </h2>
            <p className="my-6">
              For those who use <strong>Microsoft Office</strong> (e.g. Excel,
              Outlook etc), try using our Microsoft Toolkit.
            </p>
            <p className="my-6">
              <a href="https://petals.team/microsoft-toolkit">
                Copy the Microsoft Form
              </a>{' '}
              and view the live results to see how your team scored, looking for
              common scores and outliers.
            </p>
            <p className="my-6">
              <a href="https://forms.office.com/r/KSm2vb3HFy">
                Use the demo form
              </a>{' '}
              to get an idea of how it might work.
            </p>
          </div>
          <div id="GoogleToolkit" className="relative inset-0 ">
            <img
              src="/assets/images/google-logo.png"
              alt="Google Workspace"
              className=" w-10 m-auto"
            />
            <h2 className="text-3xl font-gaegu text-center mb-6">
              Google Toolkit
            </h2>
            <p className="my-6">
              If you use{' '}
              <a href="https://workspace.google.com/intl/en_uk/" rel="nofollow">
                Google Workspace
              </a>{' '}
              (e.g. Gmail, Google Docs, Google Sheets etc), you might want to
              try the Google Toolkit using Google Forms and Google Sheets.
            </p>
            <p className="my-6">
              <a href="https://petals.team/google-toolkit">
                Take a copy of the Google Toolkit
              </a>{' '}
              and follow the steps on the first Google Sheet to get setup.
            </p>
            <p className="my-6">
              Check out the{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdh2ll6ZPrbJmuCnwvv0P4P6lg6qxOBvi1ywrFbR0OLVOqtWQ/viewform">
                PETALS Google Form demo
              </a>{' '}
              and{' '}
              <a href="https://docs.google.com/spreadsheets/d/1m2yz37VKNAhPzA0VkpYT6rmsk2eUVv5JqRgNGY3zHus/edit?usp=sharing">
                PETALS Google Toolkit demo
              </a>{' '}
              to see how it all works together.
            </p>
          </div>
        </div>
      </Section>
    </Background>
  </Base>
);

export default SnapshotsPage;
