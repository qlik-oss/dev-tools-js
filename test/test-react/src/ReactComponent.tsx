export type ReactComponentProps = {
  name: string;
};

const ReactComponent = ({ name }: ReactComponentProps): React.ReactNode => (
  <section>Props: {`{ this name: "${name}" }`}</section>
);

export default ReactComponent;
