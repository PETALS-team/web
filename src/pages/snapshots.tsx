import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const SnapshotsPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="Snapshots">
        <h1 className="text-4xl font-gaegu text-center mb-6">
          PETALS Snapshots
        </h1>
        <p className="my-6">
          Follow the journey of how PETALS is growing with regular reflections
          and insights from the creator, Si along with occasional cameos from
          PETALS adopters and contributors.
        </p>
        <p className="my-6">
          Content is released on a fortnightly cadence, similar to traditional
          Scrum sprints, providing enough opportunity to see measurable
          differences and allow time to produce the content.
        </p>
        <p className="my-6">
          Video content provides more context and visual aids on Youtube but
          audio content is also available as a podcast for those who prefer the
          format. Choose your favourite and provide feedback through the local
          comment threads.
        </p>
        <div className="py-6">
          <div id="Youtube">
            <h2 className="text-3xl font-gaegu my-6">Watch on Youtube</h2>
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
            <h2 className="text-3xl font-gaegu my-6">Listen on Spotify</h2>
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
