import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const StyleGuidePage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="StyleGuide">
        <h1 className="text-4xl font-gaegu text-center mb-6">Style Guide</h1>
        <div className="my-6" id="Factors">
          <h2 className="text-3xl font-gaegu text-center mb-6">Five Factors</h2>
          <p className="text-xl font-gaegu text-center mb-6">
            For each individual flower petal
          </p>
          <table className="table-auto w-full mb-6">
            <thead>
              <tr>
                <th>Colour Name</th>
                <th>Colour Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Productivity Cyan</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#68CFB7' }}
                  >
                    #68CFB7
                  </var>
                </td>
              </tr>
              <tr>
                <th>Enjoyment Pink</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#FF66C4' }}
                  >
                    #FF66C4
                  </var>
                </td>
              </tr>
              <tr>
                <th>Teamwork Yellow</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#FFDE59' }}
                  >
                    #FFDE59
                  </var>
                </td>
              </tr>
              <tr>
                <th>Learning Green</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#C1FF72' }}
                  >
                    #C1FF72
                  </var>
                </td>
              </tr>
              <tr>
                <th>Serenity Purple</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#D8B4FE' }}
                  >
                    #D8B4FE
                  </var>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-6" id="RAG">
          <h2 className="text-3xl font-gaegu text-center mb-6">
            Traffic Lights
          </h2>
          <p className="text-xl font-gaegu text-center mb-6">
            For 1-5 ratings of each factor
          </p>
          <table className="table-auto w-full mb-6">
            <thead>
              <tr>
                <th>Level</th>
                <th>Colour Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Level 1 Red</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#F24822' }}
                  >
                    #F24822
                  </var>
                </td>
              </tr>
              <tr>
                <th>Level 2 Orange</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#FFA629' }}
                  >
                    #FFA629
                  </var>
                </td>
              </tr>
              <tr>
                <th>Level 3 Yellow</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#FFCD29' }}
                  >
                    #FFCD29
                  </var>
                </td>
              </tr>
              <tr>
                <th>Level 4 Light Green</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#BBCC00' }}
                  >
                    #BBCC00
                  </var>
                </td>
              </tr>
              <tr>
                <th>Level 5 Dark Green</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#14AE5C' }}
                  >
                    #14AE5C
                  </var>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-6" id="Notifications">
          <h2 className="text-3xl font-gaegu text-center mb-6">
            Notifications
          </h2>
          <p className="text-xl font-gaegu text-center mb-6">
            For emphasising different types of messages
          </p>
          <table className="table-auto w-full mb-6">
            <thead>
              <tr>
                <th>Message Type</th>
                <th>Colour Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Info Blue</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#74D7DA' }}
                  >
                    #74D7DA
                  </var>
                </td>
              </tr>
              <tr>
                <th>Warning Yellow</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#FCD34D' }}
                  >
                    #FCD34D
                  </var>
                </td>
              </tr>
              <tr>
                <th>Success Green</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#4FB9A7' }}
                  >
                    #4FB9A7
                  </var>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-6" id="Monochrome">
          <h2 className="text-3xl font-gaegu text-center mb-6">Monochrome</h2>
          <p className="text-xl font-gaegu text-center mb-6">
            For all the different types of content sections.
          </p>
          <table className="table-auto w-full mb-6">
            <thead>
              <tr>
                <th>Context</th>
                <th>Colour Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Text color</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950 text-white"
                    style={{ backgroundColor: 'RGB(33, 37, 41)' }}
                  >
                    RGB(33, 37, 41)
                  </var>
                </td>
              </tr>
              <tr>
                <th>Page background</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#EDF2F7' }}
                  >
                    #EDF2F7
                  </var>
                </td>
              </tr>
              <tr>
                <th>Form background</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#BBBBBB' }}
                  >
                    #BBBBBB
                  </var>
                </td>
              </tr>
              <tr>
                <th>Button background</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950 text-white"
                    style={{ backgroundColor: '#494547' }}
                  >
                    #494547
                  </var>
                </td>
              </tr>
              <tr>
                <th>Table background</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: '#DDDDDD' }}
                  >
                    #DDDDDD
                  </var>
                </td>
              </tr>
              <tr>
                <th>Table row background</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: 'RGBA(0,0,0,0.05)' }}
                  >
                    RGBA(0,0,0,0.05)
                  </var>
                </td>
              </tr>
              <tr>
                <th>Tile background</th>
                <td>
                  <var
                    className="border-2 p-1 border-slate-950"
                    style={{ backgroundColor: 'RGBA(0,0,0,0.1)' }}
                  >
                    RGBA(0,0,0,0.1)
                  </var>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-6" id="Typography">
          <h2 className="text-3xl font-gaegu text-center mb-6">Typography</h2>
          <p className="text-xl font-gaegu text-center mb-6">
            For formatting text consistently across all media.
          </p>
          <table className="table-auto w-full mb-6">
            <thead>
              <tr>
                <th>Context</th>
                <th>CSS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Paragraph</th>
                <td>
                  <pre
                    className="not-italic"
                    style={{ fontFamily: 'monospace' }}
                  >
                    font-family: monospace; font-size: 14px;
                  </pre>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    fontFamily: 'gaegu',
                    fontSize: '36px',
                    fontWeight: 400,
                  }}
                >
                  Heading 1
                </th>
                <td>
                  <pre
                    className="not-italic"
                    style={{ fontFamily: 'monospace' }}
                  >
                    font-family: gaegu; font-size: 36px; font-weight: 400;
                  </pre>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    fontFamily: 'gaegu',
                    fontSize: '30px',
                    fontWeight: 400,
                  }}
                >
                  Heading 2
                </th>
                <td>
                  <pre
                    className="not-italic"
                    style={{ fontFamily: 'monospace' }}
                  >
                    font-family: gaegu; font-size: 30px; font-weight: 400;
                  </pre>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    fontFamily: 'gaegu',
                    fontSize: '24px',
                    fontWeight: 400,
                  }}
                >
                  Heading 3
                </th>
                <td>
                  <pre
                    className="not-italic"
                    style={{ fontFamily: 'monospace' }}
                  >
                    font-family: gaegu; font-size: 24px; font-weight: 400;
                  </pre>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    fontFamily: 'gaegu',
                    fontSize: '20px',
                    fontWeight: 400,
                  }}
                >
                  Heading 4
                </th>
                <td>
                  <pre
                    className="not-italic"
                    style={{ fontFamily: 'monospace' }}
                  >
                    font-family: gaegu; font-size: 20px; font-weight: 400;
                  </pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </Background>
  </Base>
);

export default StyleGuidePage;
