import React, { FC, PropsWithChildren } from 'react';
import { useRecoilState } from 'recoil';
import { listUserStore } from '../../store/ListUser';

interface LayoutProps {
  imageBackground?: Boolean;
}

const LayoutPage: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	const [listUser] = useRecoilState(listUserStore)
	return (
		<div className="flex justify-center w-screen h-screen text-gray-700">
			<div className="flex w-screen">
				<div className="flex flex-col w-64 py-4 pr-3">
				</div>
				<div className="flex flex-col flex-grow border-l border-r border-gray-300">
					{children}
				</div>
				<div className="w-64 py-4 pl-4">
					<ul className='list-disc font-semibold ml-5 text-base'>
					{listUser.map((item) => (
						<li key={item}>
							{item}
						</li>

					))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LayoutPage;