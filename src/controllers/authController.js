export const login = (req, res) => {
  const { email } = req.body;
  // Mock login
  res.json({
    message: "Login successful (mock)",
    user: {
      id: "demo-user-id",
      name: "Demo User",
      email: email || "demo@example.com",
      role: "student",
    },
    token: "fake-jwt-token-for-training-only",
  });
};

export const register = (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User registered (mock)",
    user: {
      id: "new-user-id",
      name,
      email,
      role: "student",
    },
  });
};
