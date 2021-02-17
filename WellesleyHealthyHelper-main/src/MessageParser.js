class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("sleep")) {
        this.actionProvider.handleSleepList();
      }
      if (lowerCaseMessage.includes("eating")) {
        this.actionProvider.handleEatingList();
      }
      if (lowerCaseMessage.includes("anxiety")) {
        this.actionProvider.handleAnxietyList();
      }
      if (lowerCaseMessage.includes("depression")) {
        this.actionProvider.handleDepressionList();
      }
      if (lowerCaseMessage.includes("crisis")) {
        this.actionProvider.handleCrisisList();
      }
      if (lowerCaseMessage.includes("loneliness")) {
        this.actionProvider.handleLonelinessList();
      }
    }
  }
  
  export default MessageParser