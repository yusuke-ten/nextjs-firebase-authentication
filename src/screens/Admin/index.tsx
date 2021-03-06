import React from 'react';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/react-hooks';

import { Session } from '@typeDefs/session';
import { CREATE_ADMIN_COURSE } from '@queries/course';
import { formatRouteQuery } from '@services/format';

const AdminPage = () => {
  const apolloClient = useApolloClient();
  const { query } = useRouter();

  React.useEffect(() => {
    apolloClient.mutate({
      mutation: CREATE_ADMIN_COURSE,
      variables: {
        uid: formatRouteQuery(query.uid),
        courseId: formatRouteQuery(query.courseId),
        bundleId: formatRouteQuery(query.bundleId),
      },
    });
  }, []);

  return null;
};

AdminPage.isAuthorized = (session: Session) => !!session;

export default AdminPage;
