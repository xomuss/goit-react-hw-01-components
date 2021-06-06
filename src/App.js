import React from 'react';
import Profile from './components/profile/Profile';
import { name, tag, location, avatar, stats } from './user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/friendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
