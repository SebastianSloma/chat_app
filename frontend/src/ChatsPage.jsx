import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
	
	return (
		<div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='9a6036d0-23e8-4e13-b0e4-22bf41801ff5'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height:'100%' }}
			/>
		</div>
	);
};

export default ChatsPage;
