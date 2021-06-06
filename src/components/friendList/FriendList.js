import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li class="item" key={id}>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="" width="48" />
        <p class="name">{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
