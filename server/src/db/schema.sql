DROP DATABASE IF EXISTS makedle;

CREATE DATABASE makedle;

\c makedle;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE, --think about if we want this unique
  email VARCHAR(100) NOT NULL UNIQUE,
  hashed_password VARCHAR(255) NOT NULL,
  refresh_token VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS games (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL, --on delete of user delete user_id from all their games
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary_color CHAR(7) NOT NULL CHECK (primary_color ~ '^#([A-Fa-f0-9]{6})$'), --validates that the color string is a valid hexadecimal code (e.g., #FFFFFF)
  secondary_color CHAR(7) NOT NULL CHECK (primary_color ~ '^#([A-Fa-f0-9]{6})$'), --maybe dumb to check to validate here^, maybe client side if bad hex value just render default color?
  tertiary_color CHAR(7) NOT NULL CHECK (primary_color ~ '^#([A-Fa-f0-9]{6})$')
);

INSERT INTO users (username, email, hashed_password)
VALUES ('test-user', 'test_user@example', 'hashed_password_example');

INSERT INTO games (user_id, name, primary_color, secondary_color, tertiary_color)
VALUES (1, 'Test Game', '#FF5733', '#33FF57', '#3357FF');