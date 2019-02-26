USE MASTER

CREATE DATABASE BBD_Hub

use BBD_Hub;
GO

CREATE TABLE Flags
(
	[FlagID][int]IDENTITY(1,1) NOT NULL,
	[Name] varchar(150) NULL,
	CONSTRAINT [PK_Flag] PRIMARY KEY CLUSTERED 
	(
		[FlagID] ASC
	)
);


CREATE TABLE Rooms
(
	[RoomID][int]IDENTITY(1,1) NOT NULL,
	[Name] varchar(150) NULL,
	CONSTRAINT [PK_Room] PRIMARY KEY CLUSTERED 
	(
		[RoomID] ASC
	)
);


CREATE TABLE Maintainers
(
	[MaintainerID][int]IDENTITY(1,1) NOT NULL,
	[Name] varchar(150) NULL,
	[Surname] varchar(150) NULL,
	CONSTRAINT [PK_Maintainer] PRIMARY KEY CLUSTERED 
	(
		[MaintainerID] ASC
	)
);

CREATE TABLE Requests
(

	/*PersonID int FOREIGN KEY REFERENCES Persons(PersonID)*/
	[RequestID][int]IDENTITY(1,1) NOT NULL,
	[RoomID] [int] FOREIGN KEY REFERENCES Rooms(RoomID),
	[Description] varchar(500) NULL,
	[FlagID] [int] FOREIGN KEY REFERENCES Flags(FlagID),
	[Image] [varbinary](max) NULL,
	CONSTRAINT [PK_Requests] PRIMARY KEY CLUSTERED 
	(
		[RequestID] ASC
	)
);
