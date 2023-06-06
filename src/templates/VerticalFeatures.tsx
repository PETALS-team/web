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
        title="Identify 5 key dimensions for your team's health"
        description="Rate PRODUCTIVITY, ENJOYMENT, TEAMWORK, LEARNING and SERENITY from your recent iteration to calculate the team's overall AVERAGE (hence the acronym PETALS)"
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Collect individual scores rapidly and regularly"
        description="Setup or use existing regular team meetings (recommend weekly but fortnightly and monthly also works, Agile retrospectives are perfect). Ask everyone to rate 5 dimensions out of 5. Use a standard form with simple star ratings."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Review collective averages"
        description="Calculate AVERAGES across the team for each dimension for overall team health view. What are the trends on last time and over time? Any outliers to call out? Is the team safe enough to discuss individual scores? Discuss as a group, celebrate successes &  identify possible improvement areas."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Discuss & act"
        description="Elaborate on key topics from the shared scores. Determine root cause, use real examples to understand specific scenarios, time-box each discussion to ensure every topic gets fair coverage. Agree on next steps with owners and goal dates."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
