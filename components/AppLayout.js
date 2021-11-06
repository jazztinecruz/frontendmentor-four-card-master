import CodeBy from "./CodeBy";
import ContentLayout from "./ContentLayout";

const AppLayout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-rows-[1fr,auto]'>
      <main>
        <ContentLayout>
          {children}
        </ContentLayout>
      </main>

      <footer>
        <ContentLayout>
          <CodeBy />
        </ContentLayout>
      </footer>
    </div>
  );
}
export default AppLayout;