import { GetStaticPropsContext } from "next";
import Sidebar from "../containers/Sidebar";
import Topbar from "../containers/Topbar";

export default function Home() {
  return (
    <div>
        <Topbar />
        <Sidebar />
    </div>
  )
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../utils/messages/${locale}.json`)).default
    }
  };
}