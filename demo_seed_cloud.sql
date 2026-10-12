-- Nouvelle base de données de démo (MySQL)
-- Mot de passe de tous les comptes : demo1234 (haché avec bcrypt, comme votre backend)

CREATE TABLE users (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    user_login VARCHAR(50) NOT NULL UNIQUE,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_role ENUM('admin','user','dev') DEFAULT 'user'
);

CREATE TABLE evenements (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Titre VARCHAR(100) NOT NULL,
    Description VARCHAR(500) NOT NULL,
    Date DATE NOT NULL,
    gouvernorat VARCHAR(500),
    imgevent VARCHAR(255),
    heure VARCHAR(100)
);

INSERT INTO users (user_name, user_login, user_email, user_password, user_role) VALUES
('Amira Ben Salah', 'amira',   'amira@exemple.tn',   '$2b$10$QdffDI2U6C3g6DaE2y0VueZp5uC/QrbRjs0Z5Fk4iOGEoqiwcxPwa', 'admin'),
('Youssef Trabelsi','youssef', 'youssef@exemple.tn', '$2b$10$QdffDI2U6C3g6DaE2y0VueZp5uC/QrbRjs0Z5Fk4iOGEoqiwcxPwa', 'dev'),
('Nour Gharbi',     'nour',    'nour@exemple.tn',    '$2b$10$QdffDI2U6C3g6DaE2y0VueZp5uC/QrbRjs0Z5Fk4iOGEoqiwcxPwa', 'user'),
('Karim Jlassi',    'karim',   'karim@exemple.tn',   '$2b$10$QdffDI2U6C3g6DaE2y0VueZp5uC/QrbRjs0Z5Fk4iOGEoqiwcxPwa', 'user'),
('Salma Mrad',      'salma',   'salma@exemple.tn',   '$2b$10$QdffDI2U6C3g6DaE2y0VueZp5uC/QrbRjs0Z5Fk4iOGEoqiwcxPwa', 'dev');

INSERT INTO evenements (Titre, Description, Date, gouvernorat, imgevent, heure) VALUES
('Festival du film méditerranéen', 'Projections et rencontres avec des réalisateurs de toute la région.', '2026-11-14', 'Sfax',  'https://picsum.photos/seed/film/600/300', '18:00'),
('Salon de l''emploi',             'Plus de 60 entreprises recrutent : CV, entretiens et ateliers.',        '2026-11-21', 'Tunis', 'https://picsum.photos/seed/job/600/300',  '09:00'),
('Concert au bord de mer',         'Soirée musicale en plein air avec trois groupes locaux.',               '2026-12-05', 'Sousse','https://picsum.photos/seed/sea/600/300',  '20:30'),
('Marathon de la médina',          'Course de 10 km à travers les ruelles de la vieille ville.',            '2026-12-13', 'Sfax',  'https://picsum.photos/seed/run/600/300',  '07:30');
