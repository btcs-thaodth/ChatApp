import axios from 'axios';
const apiDomain = process.env.REACT_APP_SERVER;
class MessageApi {
  getAllMessages = async () => {
    return await axios(
      `${apiDomain}/messages`,
      {
        method: 'GET'
      },
    );
  };
}

export default new MessageApi();
