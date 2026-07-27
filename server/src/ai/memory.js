const history = [];

// const history = [
//   {
//     role: "system",
//     content: "You are NIKA AI, a smart personal assistant.",
//   },
// ];

export function addMessage(role, content) {

    history.push({
        role,
        content,
    });

}

export function getHistory() {

    return history;

}

export function clearHistory() {

    history.length = 0;

}