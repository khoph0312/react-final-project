const requestHeader = {
    headers: {
      "Content-Type": "application/json",
    },
  };

export const performServiceCall = async (method, apiUrl, body) => {
    try {
        let header = {...requestHeader, method};
        if (body) {
            header = {...header, body: JSON.stringify(body)}
        }
        const response = await fetch(`http://localhost:5000/${apiUrl}`, header)
        console.log(response)
    } catch (err) {
        throw err
    }
}