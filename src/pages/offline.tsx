import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';

const SnapshotsPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="Toolkits">
        <h1 className="text-4xl font-gaegu text-center mb-6">
          PETALS Offline IRL 
        </h1>
        <p className="my-12">
          Fancy taking your PETALS conversations offline to a meeting room or even pub? Here's some tips and suggestions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="GetData" className="relative inset-0 ">
            <img
              src="/assets/images/office-logo.png"
              alt="Microsoft Office"
              className=" w-10 m-auto"
            />
            <h2 className="text-3xl font-gaegu text-center mb-6">
              Get team data
            </h2>
            <p className="my-6">
              Use which toolkit you prefer to get everyone's scores along with the analysis 
            </p>
          </div>
          <div id="GetReady" className="relative inset-0 ">
            <img
              src="/assets/images/google-logo.png"
              alt="Google Workspace"
              className=" w-10 m-auto"
            />
            <h2 className="text-3xl font-gaegu text-center mb-6">
              Get ready
            </h2>
            <p className="my-6">
              Print out the resulting analysis or take a screen to share.
            </p>
            <p className="my-6">
              Grab some sticky notes and pens, here's some recommendations:
              
              <a href="https://amzn.to/49ERv4S">Multi-coloured bubble shape sticky notes</a> or 
              <a href="https://amzn.to/3I4rmQU">multi-coloured square sticky notes</a>
            </p>
            <p className="my-6">Book a space big enough for people to sit comfortably but also move about, ideally with a large wall or table to place your thoughts</p>
            <p className="my-6">Spread out the five headings across the space in the nominated colours:</p>
            <p className="my-6">
            <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Teamwork</span>
            </p>
            <p>Leave space above and below each heading for positives (above) and negatives (below)</p>
          </div>
          <div id="GetTalking" className="relative inset-0 ">
            <img
              src="/assets/images/google-logo.png"
              alt="Google Workspace"
              className=" w-10 m-auto"
            />
            <h2 className="text-3xl font-gaegu text-center mb-6">
              Get talking
            </h2>
            <p className="my-6">
              Start the session by reviewing the results from the data collection
            </p>
            <p className="my-6">
              Encourage people to share their personal scores along with why 
            </p>
            <p className="my-6">Spend 5 minutes writing down thoughts about wins and challenges for each topic</p>
            <p className="my-6">Ask each team member to take turns placing their notes around the headings, positives above the heading and negatives below</p>
            <p className="my-6">Group notes together as you go around the team's discussions, elaborating if unclear but timeboxing to 3 minutes</p>
            <p className="my-6">Ask every participant to dot-vote their most important discussions, 2-5 each, to determine the most important topics</p>
            <p className="my-6">Collectively discuss and agree the immmediate actions to focus on, consider arranging dedicated conversations if required (either in person or via text chats)</p>
            <p className="my-6">Track the actions somewhere clear for everyone to remember and follow up on, maybe the team's project board?</p>
          </div>
        </div>
        <Banner />
      </Section>
    </Background>
  </Base>
);

export default SnapshotsPage;
