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
					<ul className='font-semibold ml-5 text-lg'>
					{listUser.map((item, index) => (
						<li key={item} className='flex items-center mt-2'>
							{index%2 === 0 ? (
								<img
								className="w-10 h-10 rounded-full mr-3"
								src={`${process.env.PUBLIC_URL}/images/avt2.jpeg`}
								alt="Logo"
							/>
							) : (
								<img
								className="w-10 h-10 rounded-full mr-3"
								src={`${process.env.PUBLIC_URL}/images/avt.jpeg`}
								alt="Logo"
							/>
							)}
							
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