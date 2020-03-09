import React, { useEffect, useState, memo } from "react";
import { getStoryIds, getStory, storyUrl } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

function StoriesContainer() {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid="story">
        <h1>Hacker News</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId}></Story>
        ))}
      </StoriesContainerWrapper>
    </>
  );
}

export default StoriesContainer;
