import { Message } from "element-ui";
let messageInstance = null;
const rewriteMessage = (option) => {
  if (messageInstance) {
    messageInstance.close();
  }
  messageInstance = Message(option);
};
["error", "info", "success", "warning"].forEach((type) => {
  rewriteMessage[type] = (options) => {
    if (typeof options === "string") {
      options = {
        message: options,
      };
    }
    options.type = type;
    return rewriteMessage(options);
  };
});
export default function handleError(data) {
  if (data instanceof Error) {
    rewriteMessage.error(data.message);
  } else if (typeof data === "string") {
    rewriteMessage.error(data);
  } else {
    // rewriteMessage.error(data.data.msg)
    rewriteMessage.error(data.message);
  }
  return window.Promise.reject(data);
}
