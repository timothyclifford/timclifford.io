export interface Props {
  value: string;
}

const Dummy: React.FC<Props> = ({ value = '' }) => {
  return <div>{value}</div>;
};

export default Dummy;
