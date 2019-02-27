use master
GO

IF DB_ID('BBD_Hub') is not null
DROP DATABASE BBD_Hub
GO

CREATE DATABASE BBD_Hub
GO

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
GO

CREATE TABLE Rooms
(
	[RoomID][int]IDENTITY(1,1) NOT NULL,
	[Name] varchar(150) NULL,
	CONSTRAINT [PK_Room] PRIMARY KEY CLUSTERED 
	(
		[RoomID] ASC
	)
);
GO

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
GO

CREATE TABLE Users
(
	[UserID][int]IDENTITY(1,1) NOT NULL,
	[FirstName][varchar](120) NULL,
	[LastName][varchar](120) NULL,
	CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
	(
		[UserID] ASC
	)
);
GO

CREATE TABLE Requests
(
	[RequestID][int]IDENTITY(1,1) NOT NULL,
	[Status][BIT] NOT NULL DEFAULT 0,
	[RoomID] [int] FOREIGN KEY REFERENCES Rooms(RoomID),
	[Description] varchar(500) NULL,
	[FlagID] [int] FOREIGN KEY REFERENCES Flags(FlagID),
	CONSTRAINT [PK_Requests] PRIMARY KEY CLUSTERED 
	(
		[RequestID] ASC
	)
);
GO