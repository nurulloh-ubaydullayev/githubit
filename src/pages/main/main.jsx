import MainSection from "../../components/main/main";
import Sidebar from "../../components/sidebar/sidebar";

function Main() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <MainSection />
      </main>
    </>
  );
}

export default Main;
