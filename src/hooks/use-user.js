// import { useState, useEffect, useContext } from 'react';
// import UserContext from '../context/user';
import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState();
  // const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      // we need a function that we can call (firebase service) that gets the user data based on the id
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }
    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser, setActiveUser };
}
