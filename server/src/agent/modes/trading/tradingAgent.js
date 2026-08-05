export async function tradingAgent(userMessage) {

    return {

        success:true,

        type:"chat",

        speech:
        "Trading Mode is active. Please ask your trading question.",

        display:
        "📈 Trading Mode",

        task:null,

        data:null

    };

}