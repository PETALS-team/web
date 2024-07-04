import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const StyleGuidePage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="StyleGuide">
        <h1 className="text-4xl font-gaegu text-center mb-6">Style Guide</h1>
        <p className="my-6">
          <h2 className="text-3xl font-gaegu text-center mb-6">Five Factors</h2>
          <p>For each individual flower petal</p>
          <table className="width-">
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
        </p>
      </Section>
    </Background>
  </Base>
);

export default StyleGuidePage;
