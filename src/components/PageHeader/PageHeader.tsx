// Lib
import React from 'react';

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => (
  <div className="page-header">{title && <h1 className="page-header__title">{title}</h1>}</div>
);

export default PageHeader;
