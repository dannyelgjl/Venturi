import React from 'react';
// Component
import Header from '../../../components/Header';
// PropTypes
import PropTypes from 'prop-types';
// Componentes estilizados
import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header title="Venturi 🚀"/>
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
