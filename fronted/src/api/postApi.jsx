const API_URL = "http://localhost:5001/api/posts";

export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createPost = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in createPost:", error);
    throw error;
  }
};

export const deletePost = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const updatePost = async (id, formData) => {
  try {
    const response = await fetch(`http://localhost:5001/api/posts/${id}`, {
      method: "PUT",
      body: formData,
    });
    if (!response.ok) throw new Error("Failed to update post");
    return await response.json();
  } catch (error) {
    console.error("Error in updatePost:", error);
    throw error;
  }
};
