import React, { FC, PropsWithChildren } from 'react';

interface LayoutProps {
  imageBackground?: Boolean;
}

const LayoutPage: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div className="flex justify-center w-screen h-screen px-4 text-gray-700">
	<div className="flex w-full max-w-screen-lg">
		<div className="flex flex-col w-24 py-4 pr-3">
		</div>
		<div className="flex flex-col flex-grow border-l border-r border-gray-300">
      		{children}
		</div>
		<div className="flex flex-col flex-shrink-0 w-24 py-4 pl-4">
		</div>
	</div>
</div>
  );
};

export default LayoutPage;