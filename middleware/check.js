import express from 'express';

export const checkRole = (roles) => (req, res, next) => {
  try {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: 'User role not found' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Access denied: requires one of the following roles: ${roles.join(', ')}`,
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};