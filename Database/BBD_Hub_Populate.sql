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
VALUES
    ('Bob','The Builder'),
    ('Spongebob','Square Pants'),
    ('Tinky','Winky'),
    ('Dip','sy'),
    ('La','La'),
    ('P','O'),
    ('Scooby','Doo')
GO

INSERT INTO Requests([Status],[RoomID],[Description],[FlagID])
VALUES
    (1,1,'broken fone',4),
    (0,5,'a thing broke',4),
    (0,1,'the thing fell',4),
    (1,3,'over there',4),
    (0,4,'its fucked up',4),
    (1,2,'maybe',4),
    (1,5,'one or the other',4)
GO