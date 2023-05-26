import './index.css';
import cover from './podcast1.jpeg'; //to be removed and use array

//  array of podcasts (to replace with  actual data)
const podcasts = [
  { id: 1, title: 'Podcast 1', image: './podcast1.jpeg' },
  { id: 2, title: 'Podcast 2', image: './podcast1.jpeg' },
  { id: 3, title: 'Podcast 3', image: './podcast1.jpeg' },
  { id: 1, title: 'Podcast 1', image: './podcast1.jpeg' },
  { id: 2, title: 'Podcast 2', image: './podcast1.jpeg' },
  { id: 3, title: 'Podcast 3', image: './podcast1.jpeg' },  
  { id: 1, title: 'Podcast 1', image: './podcast1.jpeg' },
  { id: 2, title: 'Podcast 2', image: './podcast1.jpeg' },
  { id: 3, title: 'Podcast 3', image: './podcast1.jpeg' },
  { id: 3, title: 'Podcast 3', image: './podcast1.jpeg' },
  // Add more podcast objects as needed // mandillahjr edit
];
const Body = () => {
  return (
    <div className="body-container">
      <div className="sidekick-menu">
      <ul>
          <li>History</li>
          <li>Liked</li>
          <li>Genres</li>
          <li>Artists</li>
          <li>Playlists</li>
          <li>Explore</li>
        </ul>
        
      </div>
      <div className="podcast-grid">
      {podcasts.map((podcast) => (
          <div className="podcast-item" key={podcast.id}>
            {/* <img src={podcast.image} alt={podcast.title} /> */}
            {/* to remove👇 */}
            <img src={cover} alt={podcast.title} /> 
            <h3>{podcast.title}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Body;
