// Lib
import React from 'react';

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => (
  <header className="page-header">{title && <h1 className="page-header__title">{title}</h1>}</header>
);

export default PageHeader;
