import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <div>
              <SecondaryStory key={story.id} {...story} />
              <Border />
            </div>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <div>
              <OpinionStory key={story.id} {...story} />
              <Border />
            </div>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media${QUERIES.desktopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  
  @media${QUERIES.desktopAndUp} {
    padding-right: 16px;
    border-right: 2px gray solid;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media${QUERIES.desktopAndUp} {
    padding-right: 16px;
    &:nth-of-type(2n - 1) {
      border-right: 2px solid gray;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  ${StoryList} {
    @media${QUERIES.tabletOnly} {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(172px, 1fr));
      gap: 16px;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media${QUERIES.desktopAndUp} {
    padding-top: 16px;
    border-top: 2px solid gray;
  }
`;

const Border = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #D0CDC8;
  height: 2px;
  border: none;

  @media${QUERIES.tabletOnly} {
    display: none;
  }
`;

export default MainStoryGrid;
