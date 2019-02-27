USE master;
USE BBD_Hub;
GO

INSERT INTO Flags(Name)
VALUES
    ('Furniture'),
    ('Electrical Sockets'),
    ('Cables'),
    ('Appliances'),
    ('Lighting'),
    ('Ventilation'),
    ('Flooring'),
    ('Structural'),
    ('Office Equipment')
GO

INSERT INTO Rooms(Name)
VALUES
    ('Collab'),
    ('Python'),
    ('Boo'),
    ('Game Room'),
    ('Cafeteria')
GO

INSERT INTO Users([FirstName],[LastName])
VALUE
    ('Bob','The Builder'),
    ('Spongebob','Square Pants'),
    ('Tinky','Winky'),
    ('Dip','sy'),
    ('La','La'),
    ('P','O')
GO