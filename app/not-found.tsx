const NotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center dark:text-neutral-300 gap-4">
      <h1 className="text-red-700 text-2xl">
        Throw new Error("404 Not Found")
      </h1>
      <h1 className="text-red-700 text-2xl">There is nothing here yet</h1>
      <h1 className="text-xl">I'll try to get it done ASAP</h1>
    </div>
  );
};

export default NotFound;
