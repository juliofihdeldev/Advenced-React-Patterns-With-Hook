import { useContext } from 'react';
import { ExpandableContext } from './Expandable.jsx';

const Icon = () => {
  const { expanded } = useContext(ExpandableContext);
  return expanded ? '-' : '+';
};
export default Icon;
