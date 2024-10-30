import HomeLayout from "../layouts/homeLayout/HomeLayout";
import { HomeLayoutTitle } from "../layouts/homeLayout/HomeLayoutTitle";

const HomeLayoutView = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomeLayout>
      <HomeLayoutTitle />
      {children}
    </HomeLayout>
  );
};

export default HomeLayoutView;
