// Lib
import React from 'react';

const Page = (props?: any) => (
  <div className="page">
    <div className="container container--page">{props.children}</div>
  </div>
);

export default Page;
