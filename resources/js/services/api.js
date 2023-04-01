import axios from "axios";

const API_BASE_URL = "/api";
const API_KEY = "18167eb1";
const BASE_URL = "https://www.omdbapi.com/";

export const getAllItems = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/items`);
        return response.data;
    } catch (error) {
        console.error("Error getting all items", error);
        throw error;
    }
};

export const getFavoriteItems = async (id) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/favorite-items/${id}`,
            {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("access_token"),
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error getting favorite items", error);
        throw error;
    }
};

export const deleteFavoriteItem = async (userId, itemId) => {
    try {
        const response = await axios.delete(
            `${API_BASE_URL}/favorite-items/${userId}/${itemId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error deleting favorite item", error);
        throw error;
    }
};

export const updateItemPoster = async (itemId, imageUrl) => {
    try {
        const response = await axios.put(
            `/api/items/image/${itemId}`,
            { image_url: imageUrl },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + localStorage.getItem("access_token"),
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating item", error);
        throw error;
    }
};

export const addFavoriteItem = async (itemId, userId) => {
    try {
        const response = await axios.post(
            "/api/add-favorite-item",
            { itemId, userId },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error adding favorite item", error);
        throw error;
    }
};

export const updateItem = async (id, editItem) => {
    try {
        const response = await axios.put(
            `/api/items/${id}`,
            {
                title: editItem.title,
                year: editItem.year,
                genre: editItem.genre,
                duration: editItem.duration_in_minutes,
                imdb: editItem.imdb,
            },
            {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("access_token"),
                },
            }
        );

        const data = response.data;

        if (data.success) {
            return Promise.resolve();
        }
    } catch (error) {
        if (error.response.data.errors) {
            const validationErrors = {};

            for (const prop in error.response.data.errors) {
                if (prop === "title") {
                    validationErrors.title = true;
                } else if (prop === "year") {
                    validationErrors.year = true;
                } else if (prop === "genre") {
                    validationErrors.genre = true;
                } else if (prop === "duration") {
                    validationErrors.duration = true;
                } else if (prop === "imdb") {
                    validationErrors.imdb = true;
                }
            }

            return Promise.reject(validationErrors);
        }

        console.error("Error updating item", error);
        return Promise.reject();
    }
};

export const getItemImage = async (title) => {
    const url = `${BASE_URL}?apikey=${API_KEY}&t=${title.replace(" ", "+")}`;

    try {
        const response = await axios.get(url, {
            headers: { "X-Requested-With": undefined },
        });
        if (response.data) {
            return response.data.Poster;
        } else {
            return "";
        }
    } catch (error) {
        console.error("Error getting item image", error);
    }
};

export async function loginUser(email, password, remember) {
    try {
        const response = await axios.post("/login", {
            email,
            password,
            remember,
        });
        localStorage.setItem("access_token", response.data.access_token);
        window.location.href = "/home";
    } catch (error) {
        console.error(error);
    }
}
