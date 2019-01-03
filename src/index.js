import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import CircleList from './components/CircleList';
import SkillList from './components/SkillList';
import Title from './components/Title';
import { Section, SubTitle } from './components/Elements';

import data from './resumeData';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-width: 300;
    font-size: 16px;
    color: #333;
    min-width: 280px;
    padding: 10px 15px 10px 10px;
  }

  @media screen and (min-width: 750px) {
    html {
      display: flex;
      justify-content: center;
    }
    body {
      padding: 36px;
    }
    div {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1400px) {
    html {
      display: block;
    }
  }
`;

function renderPersonalDetails({ birthDate, address, telephone, email }) {
  return (
    <Section>
      <SubTitle>PERSONAL DETAILS</SubTitle>
      <div>{birthDate}</div>
      <div>{address}</div>
      <div>{telephone}</div>
      <div>{email}</div>
    </Section>
  );
}

const JobItem = styled.div`
  div:first-child {
    font-weight: bold;
  }

  div:last-child {
    padding-top: 16px;
    text-align: justify;
  }
`;

function renderEmploymentHistory({ employmentHistory }) {
  return (
    <Section>
      <SubTitle>EMPLOYMENT HISTORY</SubTitle>
      <CircleList
        list={employmentHistory}
        maxWidth={600}
        renderItem={job => (
          <JobItem>
            <div>{job.title}</div>
            <div>
              <i>{job.company}</i>
            </div>
            <div>
              <i>{job.location}</i>
            </div>
            <div>{job.description}</div>
          </JobItem>
        )}
      />
    </Section>
  );
}

const EducationItem = styled.div`
  div:first-child {
    font-weight: bold;
  }
`;

function renderEducation({ education }) {
  return (
    <Section id="education">
      <SubTitle>EDUCATION</SubTitle>
      <CircleList
        list={education}
        maxWidth={400}
        renderItem={course => (
          <EducationItem>
            <div>{course.title}</div>
            <div>{course.school}</div>
            <div>{course.perdiod}</div>
            {course.additionalInfo && <div>{course.additionalInfo}</div>}
          </EducationItem>
        )}
      />
    </Section>
  );
}

function renderTechincalSkills({ skills }) {
  return (
    <Section>
      <SubTitle>TECHNICAL SKILLS</SubTitle>
      <SkillList skills={skills} />
    </Section>
  );
}

function renderLanguages({ languages }) {
  return (
    <Section>
      <SubTitle>LANGUAGES</SubTitle>
      <SkillList skills={languages} />
    </Section>
  );
}

const Column = styled.div``;
const MobileLayout = styled.div``;
const TabletLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${Column} {
    display: flex;
    flex-direction: column;
  }
  ${Column}:last-child {
    margin-left: 36px;
  }
`;

const DesktopLayout = styled.div`
  display: flex;
  flex-direction: row;

  ${Column} {
    margin-left: 36px;
  }

  ${Column}:first-child {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

function renderMobile() {
  return (
    <MobileLayout>
      <Title data={data} viewport="mobile" />
      {renderPersonalDetails(data)}
      {renderEmploymentHistory(data)}
      {renderEducation(data)}
      {renderTechincalSkills(data)}
      {renderLanguages(data)}
    </MobileLayout>
  );
}

function renderTablet() {
  return (
    <div>
      <Title data={data} />

      <TabletLayout>
        <Column>
          {renderPersonalDetails(data)}
          {renderEmploymentHistory(data)}
        </Column>
        <Column>
          {renderEducation(data)}
          {renderTechincalSkills(data)}
          {renderLanguages(data)}
        </Column>
      </TabletLayout>
    </div>
  );
}

function renderDesktop() {
  return (
    <div>
      <DesktopLayout>
        <Column>
          <Title data={data} />
          {renderPersonalDetails(data)}
        </Column>

        <Column>{renderEmploymentHistory(data)}</Column>
        <Column>{renderTechincalSkills(data)}</Column>

        <Column>
          {renderEducation(data)}
          {renderLanguages(data)}
        </Column>
      </DesktopLayout>
    </div>
  );
}

class Resume extends React.Component {
  state = {
    platform: 'mobile'
  };

  Breakpoint = Object.freeze({
    MOBILE: 750,
    TABLET: 1024,
    DESKTOP: 1400
  });

  getPlatformFromWidth = innerWidth => {
    if (
      window.innerWidth > this.Breakpoint.MOBILE &&
      window.innerWidth < this.Breakpoint.DESKTOP
    ) {
      return 'tablet';
    } else if (window.innerWidth >= this.Breakpoint.DESKTOP) {
      return 'desktop';
    } else {
      return 'mobile';
    }
  };

  componentDidMount() {
    this.setState({ platform: this.getPlatformFromWidth(window.innerWidth) });

    window.addEventListener('resize', () => {
      this.setState({ platform: this.getPlatformFromWidth(window.innerWidth) });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    const Layout = {
      mobile: renderMobile(),
      tablet: renderTablet(),
      desktop: renderDesktop()
    };

    return (
      <div>
        <GlobalStyle />
        {Layout[this.state.platform]}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Resume />, rootElement);
