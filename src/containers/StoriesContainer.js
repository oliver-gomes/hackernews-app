import React, { useEffect, useState } from "react";
import { getStoryIds, getStory, storyUrl } from "../services/hnApi";
import Story from "../components/Story";

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data.data));
  }, []);

  return storyIds.map(storyId => <Story storyId={storyId}></Story>);
}

export default StoriesContainer;
