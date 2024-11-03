const API_URL = "http://localhost:5001/api/posts";

export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  return response.json();
};

export const deletePost = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
