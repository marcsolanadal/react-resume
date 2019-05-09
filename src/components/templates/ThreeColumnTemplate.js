import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Title = styled.div``;
const Personal = styled.div``;
const EmploymentHistory = styled.div``;
const Education = styled.div``;
const Technical = styled.div``;
const Language = styled.div``;

const Header = styled.div``;
const Col = styled.div`
  margin-left: 40px;
`;
const SlimCol = styled(Col)`
  max-width: 400px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const DesktopStyles = css`
  display: flex;
  flex-direction: row;

  ${Header} {
    flex-grow: 1;
  }

  ${Content} {
    flex-grow: 2;
  }

  /* Hides personal information from first column */
  ${Col} ${Personal} {
    display: none;
  }
`;

const TabletStyles = css`
  flex-direction: column;

  /* Centers title */
  ${Header} {
    display: flex;
    justify-content: space-around;
  }

  /* Hides personal information from header */
  ${Header} ${Personal} {
    display: none;
  }

  /* Shows personal information in the first column */
  ${Col} ${Personal} {
    display: block;
  }
`;

const Layout = styled.div`
  ${DesktopStyles}

  @media (max-width: 1024px) {
    ${TabletStyles}
  }

  @media print {
    ${TabletStyles}
  }
`;

const emptyFunction = () => {};

function ThreeColumnTemplate({
  renderTitle = emptyFunction,
  renderPersonal = emptyFunction,
  renderEmploymentHistory = emptyFunction,
  renderEducation = emptyFunction,
  renderTechnical = emptyFunction,
  renderLanguage = emptyFunction
}) {
  return (
    <Layout>
      <Header>
        <Title>{renderTitle()}</Title>
        <Personal>{renderPersonal()}</Personal>
      </Header>
      <Content>
        <Col>
          <Personal>{renderPersonal()}</Personal>
          <EmploymentHistory>{renderEmploymentHistory()}</EmploymentHistory>
        </Col>
        <SlimCol>
          <Education>{renderEducation()}</Education>
          <Technical>{renderTechnical()}</Technical>
          <Language>{renderLanguage()}</Language>
        </SlimCol>
      </Content>
    </Layout>
  );
}

ThreeColumnTemplate.propTyes = {
  renderTitle: PropTypes.func,
  renderPersonal: PropTypes.func,
  renderEmploymentHistory: PropTypes.func,
  renderEducation: PropTypes.func,
  renderTechnical: PropTypes.func,
  renderLanguage: PropTypes.func
};

export default ThreeColumnTemplate;
