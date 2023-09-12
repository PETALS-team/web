import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const SnapshotsPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="Snapshots">
        <h1 className="text-4xl font-gaegu mb-6">PETALS Snapshots</h1>
        <p className="mb-6">
          Follow the journey of how PETALS is growing with regular reflections
          and insights from the creator, Si.
        </p>
        <p>
          Content is released on a fortnightly cadence, similar to traditional
          Scrum sprints, providing enough opportunity to see measurable
          differences and allow time to produce the content.
        </p>
        <div className="py-6">
          <div id="Youtube">
            <h2 className="text-3xl font-gaegu mb-6">Watch on Youtube</h2>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/videoseries?si=X6cBcTDIFwiDWdy2&amp;list=PLKbU77Ew5WTEGzy0nUAvnDPlKWcyRId9X"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
          <div id="Spotify">
            <h2 className="text-3xl font-gaegu mb-6">Listen on Spotify</h2>
            <iframe
              className="rounded-xl"
              src="https://open.spotify.com/embed/show/1dGwBZFMtlLtcJG4nbQYGS?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Section>
    </Background>
  </Base>
);

export default SnapshotsPage;
