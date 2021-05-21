import React, { useContext } from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  // const {
  //   user: { fullName, username, userId, following, docId }
  // } = useUser();

  const { user: { docId = '', fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}
