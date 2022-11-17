import { Story } from './StoryCard.types';
import './StoryCard.css';

type AppProps = {
  story: Story,
  onStoryClick: (story: Story) => void,
  withAuthor?: boolean,
  withSource?: boolean,
  timeNewLine?: boolean,
};

const StoryCard = ({ story, onStoryClick, withAuthor, withSource, timeNewLine }: AppProps) => {
  const timeNewLineClass = timeNewLine ? 'time-new-line' : '';
  return (
    <article className='story-card' onClick={() => onStoryClick(story)}>
      <figure className='story-card-image'>
        <img src={story.image} alt={story.title} />
      </figure>
      <section className='story-card-details'>
        <div className={`story-card-title-est-time ${timeNewLineClass}`}>
          <span className='story-card-title'>{story.title}</span>
          <span className='story-card-est-time'>{story.time} min</span>
        </div>
        {withAuthor && <span className='story-card-author'>{story.author}</span>}
        {withSource && <span className='story-card-source'>{story.source}</span>}
        <p className='story-card-description'>
          {story.description}
        </p>
      </section>
    </article>
  );
};


export default StoryCard;
