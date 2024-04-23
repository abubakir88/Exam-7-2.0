const clientID = "7f7be62cd9214945946e8dc273d09a16";
const clientSecret = "05c4aceb6ff04c5b86af198f5d6f3b04";

export const getToken = async (token) => {
  try {
    const response = await fetch(token, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(clientID + ":" + clientSecret)}`,
      },
      body: "grant_type=client_credentials",
    });
    const data = await response.json();
    return localStorage.setItem(
      "asset_token",
      JSON.stringify(`${data.token_type} ${data.access_token}`)
    );
  } catch (error) {
    console.error("Error getting token:", error);
    throw error;
  }
};

export const getPlaylists = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("asset_token")}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting playlists:", error);
    throw error;
  }
};
