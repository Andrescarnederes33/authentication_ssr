import Link from 'next/link'

/* middleware */
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from '../middleware/utils'

/* components */
import Layout from '../components/layout/Layout'
import Nav from '../components/nav/Nav'
import Continue from "../components/continue/Continue"

export default function About(props) {
  const { profile } = props;

  return (
    <Layout title="Next.js with JWT Authentication | About Page">
      <div className="container">
        <main>
          <h1 className="title">About Page</h1>
          {!profile ? (
            <Continue />
          ) : (
            <div>
              <Nav />
              <div style={{ textAlign: 'left' }}>
                <fieldset>
                  <legend>
                    <h3>Your Profile</h3>
                  </legend>
                  <h4>ID: {profile.id}</h4>
                  <h4>Email: {profile.email}</h4>
                  <h4>Created: {profile.createdAt}</h4>
                </fieldset>
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api/about`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';

  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
} 