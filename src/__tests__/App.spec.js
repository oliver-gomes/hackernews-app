import React from "react";
import { act } from "react-dom/test-utils";
import { App } from "../App";
import { getStoryIds, getStory, storyUrl } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
