import Head from 'next/head';
import SlackHelp from '../../components/custom/sections/toolhelp/slack-help';
import HelpBannerComponent from '../../components/custom/sections/helpbannercomponent';

export default function ToolHelpSlack() {
  return (
    <div>
      <Head>
        <title>PROBBY | Help | Slack</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>
      <HelpBannerComponent />
      <SlackHelp />
    </div>
  );
}
