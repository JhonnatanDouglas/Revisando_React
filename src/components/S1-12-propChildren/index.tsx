interface iChildren {
  children: React.ReactNode;
}

const PropChildren = ({ children }: iChildren) => {
  return <div>{children}</div>;
};

export default PropChildren;
