import React, {
  ReactElement,
  ReactNode,
  FC,
  PropsWithChildren,
} from 'react';
import { Container } from './styles';
import { Head } from '../Header';
import { Foot } from '../Footer';

type ContainerProps = PropsWithChildren<{
  children: ReactNode;
}>;

export const LayoutContainer: FC<ContainerProps> = (
  props: ContainerProps,
): ReactElement => {
  return (
    <Container>
      <Head />
      {props.children}
      <Foot />
    </Container>
  );
};
