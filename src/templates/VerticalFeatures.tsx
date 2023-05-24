import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-purple-300">
    <Section
      id="How"
      title="How does PETALS work"
      description="Focus on five key metrics to identify continuous improvement"
    >
      <VerticalFeatureRow
        title="Identify five dimensions of team health rapidly and regularly"
        description="Rate Productivity, Enjoyment, Teamwork, Learning and Serenity from the past iteration to calculate your overall Average"
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Collect individual scores"
        description="Setup or use existing regular team meeting (recommend weekly but fortnightly and monthly also works, agile retrospectives are perfect). Ask everyone to rate 5 dimensions out of 5. Use standard form with incremental range slider"
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Review collective averages"
        description="Calculate averages across the team for each dimension for overall view. What are the shifts on last time and over time? Any outliers to call out? Is the team safe enough to discuss individual scores? Discuss as a group, celebrating successes &  identifying possible improvement areas"
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Discuss & act"
        description="Elaborate on key topics from scores. Determine route cause, use real examples to understand specific scenarios. Time-box each discussion to ensure every topic gets fair coverage. Agree on next steps with owners and goal dates"
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
