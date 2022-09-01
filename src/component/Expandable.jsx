import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';

import Header from './Header';
import Icon from './Icon';
import Body from './Body';

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current) {
      onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded]);
  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
  return <Provider value={value}>{children}</Provider>;
};

Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;

export default Expandable;
