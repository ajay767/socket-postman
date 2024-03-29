import Router from 'next/router';

const redirect = (context, target) => {
  if (context.res) {
    console.log(target);
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened, i.e user had never requested that authenticated page ;)
    Router.replace(target);
  }
};
export default redirect;
