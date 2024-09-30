import { documentationPage, content } from "./DocumentationPage.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Footer from "../../../components/site/Footer/Footer";

function DocumentationPage() {
  return (
    <div class={documentationPage}>
      <Sidebar />
      <main class={content}>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default DocumentationPage;
