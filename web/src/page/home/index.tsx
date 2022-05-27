import ChatRoom from '../../component/ChatRoom/ChatRoom';
import LayoutPage from '../../component/Layout';

const HomePage = () => {
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
