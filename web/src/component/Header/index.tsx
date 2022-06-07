import { handleLoginLogout } from '../../service/chatapp';
import { useRecoilState } from 'recoil';
import { currentUserStore } from '../../store/CurrentUser';
import { useNavigate } from 'react-router-dom';
interface Props{
    title: string
}
const Header = ({title}: Props) => {
    const navigate = useNavigate();
    const [currentUser] = useRecoilState(currentUserStore)
    const handleDisconnect = () => {
        handleLoginLogout('disconnectedToServer', 'has left the chat room', currentUser, 'disconnected');
        navigate('/');
    }
    return(
        <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
				<h1 className="text-xl font-semibold">{title}</h1>
				<button className="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400" onClick={handleDisconnect}>Disconnection</button>
			</div>
    )
}
export default Header;