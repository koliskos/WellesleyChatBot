class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    handleDepressionList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on Depression:",
          {
            widget: "depressionLinks",
          }
        );
        this.updateChatbotState(message);
      };

    handleAnxietyList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on Anxiety:",
          {
            widget: "anxietyLinks",
          }
        );
        this.updateChatbotState(message);
      };

    handleSleepList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on Sleep:",
          {
            widget: "sleepLinks",
          }
        );
        this.updateChatbotState(message);
      };

    handleCrisisList = () => {
        const message = this.createChatBotMessage(
          "You are not alone in this. I've got the following resources for you on Crisis:",
          {
            widget: "crisisLinks",
          }
        );
        this.updateChatbotState(message);
      };

    handleEatingList = () => {
        const message = this.createChatBotMessage(
          "You are not alone in this. I've got the following resources for you on Disordered Eating:",
          {
            widget: "eatingLinks",
          }
        );
        this.updateChatbotState(message);
      };
    
    handleLonelinessList = () => {
        const message = this.createChatBotMessage(
          "You are not alone in this. I've got the following resources for you on Loneliness:",
          {
            widget: "lonelinessLinks",
          }
        );
        this.updateChatbotState(message);
      };
    
      updateChatbotState(message) {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
    
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      }
    }
    
    export default ActionProvider;