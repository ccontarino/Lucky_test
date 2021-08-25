  
create database AppIndex;
use AppIndex;

create table user
(
	Id int not null,
	user_name varchar(25) null,
	password varchar(25) null
);

create unique index user_Id_uindex
	on user (Id);

alter table user
	add constraint user_pk
		primary key (Id);


create table city
(
	Id int null,
	countryId int null,
	name varchar(25) null
);

create table country
(
	id int not null,
	name varchar(25) null,
	constraint country_pk
		primary key (id)
);

create table address
(
	Id int not null,
	city_id int null,
	constraint address_pk
		primary key (Id)
);

create index city_Id_index
	on city (Id);

alter table address
	add constraint address_city_Id_fk
		foreign key (city_id) references city (Id);

create table profile
(
	Id int not null,
	user_id int null,
	address_id int null,
	street varchar(25) null,
	constraint profile_pk
		primary key (Id)
);

alter table profile
	add constraint profile_user_Id_fk
		foreign key (user_id) references user (Id);

alter table profile
	add constraint profile_address_Id_fk
		foreign key (address_id) references address (Id);

