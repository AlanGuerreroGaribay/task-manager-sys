const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4 max-w-md">{children}</div>
    </div>
  );
};

export default HomeLayout;
