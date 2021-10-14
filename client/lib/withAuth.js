import React from 'react';
import cookie from 'cookie';
import redirect from './Redirect';
import { getAuthToken, getCookieItem } from '@utils/Api';

function withAuth({ component: Component }) {
  const { token } = getAuthToken();
  console.log('with auth token = ', token);

  const Protect = ({ children, ...props }) => {
    return <Component {...props}>{children}</Component>;
  };

  Protect.getInitialProps = async (ctx) => {
    let token;
    if (ctx.req) {
      const cookieStr = ctx.req.headers.cookie || '';
      const cookieObj = cookie.parse(cookieStr);
      token = cookieObj.POSTMAN_TOKEN;
    } else {
      const { token: authToken } = getAuthToken();
      token = authToken;
    }

    if (!token) {
      redirect(ctx, '/login');
      return { status: 'Redirected' };
    }

    const props =
      Component.getInitialProps && (await Component.getInitialProps(ctx));

    return { ...props, status: 'success' };
  };

  return Protect;
}

export default withAuth;
