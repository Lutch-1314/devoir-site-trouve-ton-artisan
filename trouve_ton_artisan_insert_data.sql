INSERT INTO trouve_ton_artisan.ville (nom) VALUES
('Aix-les-bains'),
('Annecy'),
('Annonay'),
('Bourg-en-bresse'),
('Chambéry'),
('Chamonix'),
('Evian'),
('Le Puy-en-Velay'),
('Lyon'),
('Montélimar'),
('Romans-sur-Isère'),
('Saint-Priest'),
('Valence'),
('Vienne');

INSERT INTO trouve_ton_artisan.categorie (nom) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

INSERT INTO trouve_ton_artisan.specialite (nom, id_categorie) VALUES
('Bijoutier', 3),
('Boucher', 1),
('Boulanger', 1),
('Chauffagiste', 2),
('Chocolatier', 1),
('Coiffeur', 4),
('Couturier', 3),
('Electricien', 2),
('Ferronier', 3),
('Fleuriste', 4),
('Menuisier', 2),
('Plombier', 2),
('Toiletteur', 4),
('Traiteur', 1),
('Webdesign', 4);

INSERT INTO trouve_ton_artisan.artisan (nom, note, a_propos, email, site_web, top, id_specialite, id_ville) VALUES
