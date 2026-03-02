USE trouve_ton_artisan;

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
('Amitee Lécuyer', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Couturier'), (SELECT id_ville FROM ville WHERE nom = 'Annecy')), 
('Au pain chaud', 4.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', NULL, TRUE,(SELECT id_specialite FROM specialite WHERE nom = 'Boulanger'), (SELECT id_ville FROM ville WHERE nom = 'Montélimar')), 
('Boucherie Dumont', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', NULL, FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Boucher'), (SELECT id_ville FROM ville WHERE nom = 'Lyon')), 
('Boutot & fils', 4.7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Menuisier'), (SELECT id_ville FROM ville WHERE nom = 'Bourg-en-bresse')), 
('C''est sup''hair', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Coiffeur'), (SELECT id_ville FROM ville WHERE nom = 'Romans-sur-Isère')), 
('CM Graphisme', 4.4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Webdesign'), (SELECT id_ville FROM ville WHERE nom = 'Valence')), 
('Chocolaterie Labbé', 4.9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE,(SELECT id_specialite FROM specialite WHERE nom = 'Chocolatier'), (SELECT id_ville FROM ville WHERE nom = 'Lyon')), 
('Claude Quinn', 4.2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Bijoutier'), (SELECT id_ville FROM ville WHERE nom = 'Aix-les-bains')), 
('Ernest Carignan', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', NULL, FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Ferronier'), (SELECT id_ville FROM ville WHERE nom = 'Le Puy-en-Velay')), 
('Le monde des fleurs', 4.6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Fleuriste'), (SELECT id_ville FROM ville WHERE nom = 'Annonay')), 
('Leala Dennis', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Coiffeur'), (SELECT id_ville FROM ville WHERE nom = 'Chambéry')), 
('Mont Blanc Eléctricité', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Electricien'), (SELECT id_ville FROM ville WHERE nom = 'Chamonix')), 
('Orville Salmons', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, TRUE,(SELECT id_specialite FROM specialite WHERE nom = 'Chauffagiste'), (SELECT id_ville FROM ville WHERE nom = 'Evian')), 
('Royden Charbonneau', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', NULL, FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Coiffeur'), (SELECT id_ville FROM ville WHERE nom = 'Saint-Priest')), 
('Traiteur Truchon', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Traiteur'), (SELECT id_ville FROM ville WHERE nom = 'Lyon')), 
('Vallis Bellemare', 4.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Plombier'), (SELECT id_ville FROM ville WHERE nom = 'Vienne')), 
('Valérie Laderoute', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', NULL, FALSE,(SELECT id_specialite FROM specialite WHERE nom = 'Toiletteur'), (SELECT id_ville FROM ville WHERE nom = 'Valence'));