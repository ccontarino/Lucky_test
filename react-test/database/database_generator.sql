create table city
(
    Id        int         null,
    countryId int         null,
    name      varchar(25) null
);

create table address
(
    Id      int not null
        primary key,
    city_id int null,
    constraint address_city_Id_fk
        foreign key (city_id) references city (Id)
);

create index city_Id_index
    on city (Id);

create table country
(
    id   int         not null
        primary key,
    name varchar(25) null
);

create table user
(
    Id        int         not null,
    user_name varchar(25) null,
    password  varchar(25) null,
    constraint user_Id_uindex
        unique (Id)
);

alter table user
    add primary key (Id);

create table profile
(
    Id         int         not null
        primary key,
    user_id    int         null,
    address_id int         null,
    street     varchar(25) null,
    constraint profile_address_Id_fk
        foreign key (address_id) references address (Id),
    constraint profile_user_Id_fk
        foreign key (user_id) references user (Id)
);