import Head from 'next/head';
import GitHubHelp from '../../components/custom/sections/toolhelp/github-help';
import HelpBannerComponent from '../../components/custom/sections/helpbannercomponent';

export default function ToolHelpGit() {
  return (
    <div>
      <Head>
        <title>PROBBY | Help | Github</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>
      <HelpBannerComponent />
      <GitHubHelp />
    </div>
  );
}
