import ChatRoom from '../../component/ChatRoom/ChatRoom';
import LayoutPage from '../../component/Layout';
import { handleLoginLogout } from '../../server/chatapp';
import { v4 as uuid } from 'uuid';
import { useRecoilState } from 'recoil';
import { currentUserStore } from '../../store/CurrentUser';

const HomePage = () => {
    const [currentUser] = useRecoilState(currentUserStore)
    window.addEventListener('beforeunload', function (e) {
        handleLoginLogout('disconnectedToServer',uuid(), currentUser);
    });
    return (
        <>
        <LayoutPage>
            <div className="h-full place-items-center">
                <ChatRoom />
            </div>
        </LayoutPage>
        </>
    );
}
export default HomePage;
