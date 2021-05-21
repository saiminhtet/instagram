/* eslint-disable no-nested-ternary */
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';
import UserContext from '../context/user';
import usePhotos from '../hooks/use-photos';
import Post from './post/index';

export default function Timeline() {
  const { user } = UserContext(LoggedInUserContext);
  // we need to get the logged in user's photos (hook)
  const { photos } = usePhotos();
  // on loading the photos, we need to use react skeleton
  // if we have photos, render them (create a post component)
  // if the user has no photos, tell them to create some photos
  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
