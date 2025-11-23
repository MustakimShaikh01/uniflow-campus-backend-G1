/**
 * Mock auth middleware.
 * In real systems this would verify JWT or session.
 * Here we just attach a fake user for learning purposes.
 */
export const protect = (req, res, next) => {
  // In training mode, we can skip real auth
  req.user = {
    id: "demo-user-id",
    role: "student",
    name: "Demo User",
  };
  next();
};

export const requireRole = (roles = []) => {
  const allowed = Array.isArray(roles) ? roles : [roles];
  return (req, res, next) => {
    if (!req.user || (allowed.length && !allowed.includes(req.user.role))) {
      return res.status(403).json({ message: "Forbidden: insufficient role" });
    }
    next();
  };
};
