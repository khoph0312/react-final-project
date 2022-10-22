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
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            header = {...header, headers:{'x-access-token': token}}
        }
        const response = await fetch(`http://localhost:5000/${apiUrl}`, header);
        const responseCode = response.status;
        const formattedResponse = await response.json();
        if (responseCode === 200) {
            return formattedResponse;
        }
        const errorMessage = formattedResponse?.errorMessage
        throw errorMessage;
    } catch (err) {
        throw err;
    }
}