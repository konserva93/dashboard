import * as S from './Tabs.styled';
import { ITabProps } from '@src/ui/Tabs/Tab';
import React, { useEffect, useState } from 'react';

interface ITabsProps {
  children?: React.ReactElement<ITabProps>[] | React.ReactElement<ITabProps>,
  defaultId: number,
  onChange: (id: number) => void,
}

export function Tabs({ children, defaultId, onChange }: ITabsProps) {
  const [selected, setSelected] = useState(defaultId);
  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  if (!children) {
    return null;
  }

  return Array.isArray(children)
    ? (
      <S.Wrapper>
        <S.Tabs>
          {children.map((child: React.ReactElement<ITabProps>) => React.cloneElement(
            child,
            {
              ...child.props,
              key: child.props.id,
              isSelected: child.props.id === selected,
              onClick: () => { setSelected(child.props.id); },
            },
          ))}
        </S.Tabs>
        {children.find((child: React.ReactElement<ITabProps>) => child.props.id === selected)?.props.panel}
      </S.Wrapper>
    )
    : <children.type {...children.props} isSelected />;
}
