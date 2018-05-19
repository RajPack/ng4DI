export const MessageAPI = {};
MessageAPI.getServerMessage = () => {
    const messagePromise = new Promise(MessageAPI.fetch);
    return messagePromise;
}
MessageAPI.fetch = (resolve, reject) => {

    setTimeout(() => {
        try {
            var c = b/d;
            resolve("Welcome to Promise World");
        } catch (e) {
            reject(e);
        }
    }, 1000);

}