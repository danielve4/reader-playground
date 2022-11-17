import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StoryCard from './StoryCard';
import { Story } from './StoryCard.types';

function App() {
  const [dark, setDark] = useState(true);
  const [withAuthor, setWithAuthor] = useState(false);
  const [withSource, setWithSource] = useState(false);
  const [timeNewLine, setTimeNewLine] = useState(false);
  const stories: Story[] = [];
  for (let i = 1; i < 6; i++) {
    stories.push(
      {
        title: `Story ${i}`,
        url: `https://www.google.com/search?q=story+${i}`,
        author: 'John Doe',
        source: 'Source Name',
        time: 2 * i,
        image: logo,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    );
  }

  const onStoryClick = (story: Story) => {
    console.log(story);
  };

  return (
    <div id="App" className={dark ? 'dark' : ''}>
      <label htmlFor="dark-mode-toggle">
        <input id="dark-mode-toggle" type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
        Dark Mode
      </label>
      <label htmlFor="with-author-toggle">
        <input id="with-author-toggle" type="checkbox" checked={withAuthor} onChange={() => setWithAuthor(!withAuthor)} />
        With Author
      </label>
      <label htmlFor="with-source-toggle">
        <input id="with-source-toggle" type="checkbox" checked={withSource} onChange={() => setWithSource(!withSource)} />
        With Source
      </label>
      <label htmlFor="time-new-line-toggle">
        <input id="time-new-line-toggle" type="checkbox" checked={timeNewLine} onChange={() => setTimeNewLine(!timeNewLine)} />
        Time on New Line
      </label>

      <ul>
        {stories.map((story) => (
          <li key={story.url}>
            <StoryCard story={story} onStoryClick={onStoryClick}
              withAuthor={withAuthor} withSource={withSource} timeNewLine={timeNewLine}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
