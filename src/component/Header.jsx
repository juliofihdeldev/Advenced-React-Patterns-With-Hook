import React, { useContext } from 'react';
import { ExpandableContext } from './Expandable.jsx';

const Header = ({ children }) => {
  const { toggle } = useContext(ExpandableContext);
  return <div onClick={toggle}>{children}</div>;
};
export default Header;
