import Head from 'next/head';
import SlackComponent from '../components/custom/sections/slackcomponent';

const Slack = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | Slack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SlackComponent />
    </div>
  );
};
export default Slack;
