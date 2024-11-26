export type ReactComponentProps = {
  name: string;
};

const ReactComponent = ({ name }: ReactComponentProps): React.ReactNode => (
  <section>Props: {`{ this name: "${name}" }`}</section>
);

const ReactComponent2 = ({ name }: ReactComponentProps): React.ReactNode => {
  return <section>Props: {`{ this name: "${name}" }`}</section>;
};

function reactComponent({ name }: ReactComponentProps): React.ReactNode {
  return <section>Props: {`{ this name: "${name}" }`}</section>;
}

export { ReactComponent, ReactComponent2, reactComponent };
