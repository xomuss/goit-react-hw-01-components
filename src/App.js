import React from 'react';
import Profile from './components/profile/Profile';
import { name, tag, location, avatar, stats } from './user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './statistical-data.json';

const App = () => {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
};

export default App;
