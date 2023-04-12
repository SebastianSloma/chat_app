import {
	MultiChatSocket,
	MultiChatWindow,
	useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
	const chatProps = useMultiChatLogic(
		'9a6036d0-23e8-4e13-b0e4-22bf41801ff5',
		props.user.username,
		props.user.secret
	);
	return (
		<div style={{ height: '100vh' }}>
			<MultiChatSocket {...chatProps} />
			<MultiChatWindow {...chatProps} style={{ height: '100%' }} />
		</div>
	);
};

export default ChatsPage;
