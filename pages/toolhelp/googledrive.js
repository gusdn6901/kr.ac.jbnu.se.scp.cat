import Head from 'next/head';
import GoogleDriveHelp from '../../components/custom/sections/toolhelp/googledrive-help';
import HelpBannerComponent from '../../components/custom/sections/helpbannercomponent';

export default function ToolHelpGit() {
  return (
    <div>
      <Head>
        <title>PROBBY | Help | GoogleDrive</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>
      <HelpBannerComponent />
      <GoogleDriveHelp />
    </div>
  );
}
